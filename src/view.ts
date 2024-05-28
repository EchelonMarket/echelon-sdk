import { createSurfClient, createViewPayload } from "@thalalabs/surf";
import { AnyNumber } from "@thalalabs/surf/build/types/types/common";
import { LENDING_ASSETS_ABI } from "./abi/lending_assets";
import { Aptos } from "@aptos-labs/ts-sdk";
import { fp64ToFloat } from "./utils/fp64ToFloat";

/**
 * Converts a specified amount of a coin to its corresponding share.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} market - The market identifier.
 * @param {AnyNumber} amount - The amount of the coin to convert.
 * @returns {Promise<number>} A promise that resolves to the converted share amount.
 */
export const convertAmountToShare = async (
  aptos: Aptos,
  market: string,
  amount: AnyNumber
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "coins_to_shares",
      functionArguments: [market as `0x${string}`, amount],
      typeArguments: [],
    }),
  });
  return Number(result[0]);
};

/**
 * Retrieves the supplied amount of a coin for a specified account in a market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} account - The address of the account.
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the supplied amount.
 */
export const getAccountSupply = async (
  aptos: Aptos,
  account: string,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "account_coins",
      functionArguments: [account as `0x${string}`, market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return Number(result[0]);
};

/**
 * Retrieves the borrowable amount of a coin for a specified account in a market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} account - The address of the account.
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the borrowable amount.
 */
export const getAccountBorrowable = async (
  aptos: Aptos,
  account: string,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "account_borrowable_coins",
      functionArguments: [account as `0x${string}`, market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return Number(result[0]);
};

/**
 * Retrieves the withdrawable amount of a coin for a specified account in a market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} account - The address of the account.
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the withdrawable amount.
 */
export const getAccountWithdrawable = async (
  aptos: Aptos,
  account: string,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "account_withdrawable_coins",
      functionArguments: [account as `0x${string}`, market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return Number(result[0]);
};

/**
 * Retrieves the liability amount of a coin for a specified account in a market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} account - The address of the account.
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the liability amount.
 */
export const getAccountLiability = async (
  aptos: Aptos,
  account: string,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "account_liability",
      functionArguments: [account as `0x${string}`, market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return Number(result[0]);
};

/**
 * Retrieves the supply Annual Percentage Rate (APR) for a specified market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the supply APR.
 */
export const getSupplyApr = async (
  aptos: Aptos,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "supply_interest_rate",
      functionArguments: [market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return fp64ToFloat(BigInt((result[0] as { v: string }).v));
};

/**
 * Retrieves the borrow Annual Percentage Rate (APR) for a specified market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} market - The market identifier.
 * @returns {Promise<number>} A promise that resolves to the borrow APR.
 */
export const getBorrowApr = async (
  aptos: Aptos,
  market: string
): Promise<number> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "borrow_interest_rate",
      functionArguments: [market as `0x${string}`],
      typeArguments: [],
    }),
  });
  return fp64ToFloat(BigInt((result[0] as { v: string }).v));
};

/**
 * Retrieves a list of all market identifiers.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @returns {Promise<string[]>} A promise that resolves to an array of market identifiers.
 */
export const getAllMarkets = async (aptos: Aptos): Promise<string[]> => {
  const result = await aptos.view({
    payload: createViewPayload(LENDING_ASSETS_ABI, {
      function: "market_objects",
      functionArguments: [],
      typeArguments: [],
    }),
  });

  return (result[0] as { inner: string }[]).map((o) => o.inner);
};

/**
 * Retrieves the coin address for a specified market.
 *
 * @param {Aptos} aptos - The Aptos instance from @aptos-labs/ts-sdk
 * @param {string} market - The market identifier.
 * @returns {Promise<string>} A promise that resolves to the coin address.
 */
export const getMarketCoin = async (
  aptos: Aptos,
  market: string
): Promise<string> => {
  const result = await createSurfClient(aptos)
    .useABI(LENDING_ASSETS_ABI)
    .resource.CoinInfo({
      account: market as `0x${string}`,
      typeArguments: [],
    });
  return result.type_name;
};
