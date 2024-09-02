import { createSurfClient, createViewPayload } from "@thalalabs/surf";
import { LENDING_ASSETS_ABI } from "./abi/lending_assets";
import { Aptos } from "@aptos-labs/ts-sdk";
import { fp64ToFloat } from "./utils/fp64ToFloat";
import { AnyNumber } from "@thalalabs/surf/build/types/types/common";
import { createEntryPayload, EntryPayload } from "@thalalabs/surf";
import { LENDING_SCRIPTS_ABI } from "./abi/lending_scripts";
import { FARMING_LENDING_ABI } from "./abi/farming_lending";

/**
 * EchelonClient class for interacting with the Aptos blockchain.
 */
export class EchelonClient {
  aptos: Aptos;
  address: `0x${string}`;

  /**
   * Creates an instance of EchelonClient.
   *
   * @param {Aptos} aptos - The Aptos instance to interact with the blockchain.
   * @param {`0x${string}`} contractAddress - The address of the Echelon contract.
   */
  constructor(aptos: Aptos, contractAddress: `0x${string}`) {
    this.aptos = aptos;
    this.address = contractAddress;
  }

  /**
   * Retrieves the coin address for a specified market.
   *
   * @param {string} market - The market identifier.
   * @returns {Promise<string>} A promise that resolves to the coin address.
   */
  async getMarketCoin(market: string): Promise<string> {
    try {
      const result = await createSurfClient(this.aptos)
        .useABI(LENDING_ASSETS_ABI, this.address)
        .resource.CoinInfo({
          account: market as `0x${string}`,
          typeArguments: [],
        });
      return result.type_name;
    } catch (e) {
      const result = await createSurfClient(this.aptos)
        .useABI(LENDING_ASSETS_ABI, this.address)
        .resource.FungibleAssetInfo({
          account: market as `0x${string}`,
          typeArguments: [],
        });
      return (result.metadata as { inner: string }).inner;
    }
  }

  /**
   * Retrieves a list of all market identifiers.
   *
   * @returns {Promise<string[]>} A promise that resolves to an array of market identifiers.
   */
  async getAllMarkets(): Promise<string[]> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "market_objects",
        functionArguments: [],
        typeArguments: [],
        address: this.address,
      }),
    });

    return (result[0] as { inner: string }[]).map((o) => o.inner);
  }

  /**
   * Retrieves the borrow Annual Percentage Rate (APR) for a specified market.
   *
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the borrow APR.
   */
  async getBorrowApr(market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "borrow_interest_rate",
        functionArguments: [market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return fp64ToFloat(BigInt((result[0] as { v: string }).v));
  }

  /**
   * Retrieves the supply Annual Percentage Rate (APR) for a specified market.
   *
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the supply APR.
   */
  async getSupplyApr(market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "supply_interest_rate",
        functionArguments: [market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return fp64ToFloat(BigInt((result[0] as { v: string }).v));
  }

  /**
   * Retrieves the liability amount of a coin for a specified account in a market.
   *
   * @param {string} account - The address of the account.
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the liability amount.
   */
  async getAccountLiability(account: string, market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "account_liability",
        functionArguments: [account as `0x${string}`, market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Retrieves the withdrawable amount of a coin for a specified account in a market.
   *
   * @param {string} account - The address of the account.
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the withdrawable amount.
   */
  async getAccountWithdrawable(
    account: string,
    market: string
  ): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "account_withdrawable_coins",
        functionArguments: [account as `0x${string}`, market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Retrieves the borrowable amount of a coin for a specified account in a market.
   *
   * @param {string} account - The address of the account.
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the borrowable amount.
   */
  async getAccountBorrowable(account: string, market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "account_borrowable_coins",
        functionArguments: [account as `0x${string}`, market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Retrieves the supplied amount of a coin for a specified account in a market.
   *
   * @param {string} account - The address of the account.
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the supplied amount.
   */
  async getAccountSupply(account: string, market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "account_coins",
        functionArguments: [account as `0x${string}`, market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Retrieves the coin price.
   *
   * @param {string} market - The market identifier.
   * @returns {Promise<number>} A promise that resolves to the coin price.
   */
  async getCoinPrice(market: string): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "asset_price",
        functionArguments: [market as `0x${string}`],
        typeArguments: [],
        address: this.address,
      }),
    });
    return fp64ToFloat(BigInt((result[0] as { v: string }).v));
  }

  /**
   * Retrieves claimable reward amount of a coin for a specified account.
   *
   * @param {string} account - The address of the account.
   * @param {string} coinName - the 0x1::coin::name of the coin.
   * @param {string} market - The market identifier.
   * @param {string} mode - The reward for supply the coin or borrow the coin.
   * @returns {Promise<number>} A promise that resolves to the amount of claimable reward.
   */
  async getAccountClaimableReward(
    account: string,
    coinName: string,
    market: string,
    mode: "supply" | "borrow"
  ): Promise<number> {
    const farmingId = `@${market}${mode === "supply" ? "200" : "201"}`;

    const result = await this.aptos.view({
      payload: createViewPayload(FARMING_LENDING_ABI, {
        function: "claimable_reward_amount",
        functionArguments: [account as `0x${string}`, coinName, farmingId],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Converts a specified amount of a coin to its corresponding share.
   *
   * @param {string} market - The market identifier.
   * @param {AnyNumber} amount - The amount of the coin to convert.
   * @returns {Promise<number>} A promise that resolves to the converted share amount.
   */
  async convertAmountToShare(
    market: string,
    amount: AnyNumber
  ): Promise<number> {
    const result = await this.aptos.view({
      payload: createViewPayload(LENDING_ASSETS_ABI, {
        function: "coins_to_shares",
        functionArguments: [market as `0x${string}`, amount],
        typeArguments: [],
        address: this.address,
      }),
    });
    return Number(result[0]);
  }

  /**
   * Creates a payload for borrowing a specified amount of a coin.
   *
   * @param {string} coinAddress - The address of the coin to borrow.
   * @param {string} market - The market identifier.
   * @param {AnyNumber} amount - The amount to borrow.
   * @returns {EntryPayload} The payload for the borrow transaction.
   */
  createBorrowPayload(
    coinAddress: string,
    market: string,
    amount: AnyNumber
  ): EntryPayload {
    return createEntryPayload(LENDING_SCRIPTS_ABI, {
      function: "borrow",
      typeArguments: [coinAddress],
      functionArguments: [market as `0x${string}`, amount],
      address: this.address,
    });
  }

  /**
   * Creates a payload for repaying a specified amount of a coin.
   *
   * @param {string} coinAddress - The address of the coin to repay.
   * @param {string} market - The market identifier.
   * @param {AnyNumber} amount - The amount to repay.
   * @returns {EntryPayload} The payload for the repay transaction.
   */
  createRepayPayload(coinAddress: string, market: string, amount: AnyNumber) {
    return createEntryPayload(LENDING_SCRIPTS_ABI, {
      function: "repay",
      typeArguments: [coinAddress],
      functionArguments: [market as `0x${string}`, amount],
      address: this.address,
    });
  }

  /**
   * Creates a payload for supplying a specified amount of a coin.
   *
   * @param {string} coinAddress - The address of the coin to supply.
   * @param {string} market - The market identifier.
   * @param {AnyNumber} amount - The amount to supply.
   * @returns {EntryPayload} The payload for the supply transaction.
   */
  createSupplyPayload(coinAddress: string, market: string, amount: AnyNumber) {
    return createEntryPayload(LENDING_SCRIPTS_ABI, {
      function: "supply",
      typeArguments: [coinAddress],
      functionArguments: [market as `0x${string}`, amount],
      address: this.address,
    });
  }

  /**
   * Creates a payload for withdrawing a specified share of a coin.
   *
   * @param {string} coinAddress - The address of the coin to withdraw.
   * @param {string} market - The market identifier.
   * @param {AnyNumber} share - The share to withdraw. Use the {@link convertAmountToShare} to convert an amount of coins to shares.
   * @returns {EntryPayload} The payload for the withdraw transaction.
   */
  createWithdrawPayload(coinAddress: string, market: string, share: AnyNumber) {
    return createEntryPayload(LENDING_SCRIPTS_ABI, {
      function: "withdraw",
      typeArguments: [coinAddress],
      functionArguments: [market as `0x${string}`, share],
      address: this.address,
    });
  }
}
