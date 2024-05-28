import { createEntryPayload, EntryPayload } from "@thalalabs/surf";
import { LENDING_SCRIPTS_ABI } from "./abi/lending_scripts";
import { AnyNumber } from "@thalalabs/surf/build/types/types/common";

/**
 * Creates a payload for borrowing a specified amount of a coin.
 *
 * @param {string} coinAddress - The address of the coin to borrow.
 * @param {string} market - The market identifier.
 * @param {AnyNumber} amount - The amount to borrow.
 * @returns {EntryPayload} The payload for the borrow transaction.
 */
export const createBorrowPayload = (
  coinAddress: string,
  market: string,
  amount: AnyNumber
): EntryPayload => {
  return createEntryPayload(LENDING_SCRIPTS_ABI, {
    function: "borrow",
    typeArguments: [coinAddress],
    functionArguments: [market as `0x${string}`, amount],
  });
};

/**
 * Creates a payload for repaying a specified amount of a coin.
 *
 * @param {string} coinAddress - The address of the coin to repay.
 * @param {string} market - The market identifier.
 * @param {AnyNumber} amount - The amount to repay.
 * @returns {EntryPayload} The payload for the repay transaction.
 */
export const createRepayPayload = (
  coinAddress: string,
  market: string,
  amount: AnyNumber
) => {
  return createEntryPayload(LENDING_SCRIPTS_ABI, {
    function: "repay",
    typeArguments: [coinAddress],
    functionArguments: [market as `0x${string}`, amount],
  });
};

/**
 * Creates a payload for supplying a specified amount of a coin.
 *
 * @param {string} coinAddress - The address of the coin to supply.
 * @param {string} market - The market identifier.
 * @param {AnyNumber} amount - The amount to supply.
 * @returns {EntryPayload} The payload for the supply transaction.
 */
export const createSupplyPayload = (
  coinAddress: string,
  market: string,
  amount: AnyNumber
) => {
  return createEntryPayload(LENDING_SCRIPTS_ABI, {
    function: "supply",
    typeArguments: [coinAddress],
    functionArguments: [market as `0x${string}`, amount],
  });
};

/**
 * Creates a payload for withdrawing a specified share of a coin.
 *
 * @param {string} coinAddress - The address of the coin to withdraw.
 * @param {string} market - The market identifier.
 * @param {AnyNumber} share - The share to withdraw. Use the {@link convertAmountToShare} to convert an amount of coins to shares.
 * @returns {EntryPayload} The payload for the withdraw transaction.
 */
export const createWithdrawPayload = (
  coinAddress: string,
  market: string,
  share: AnyNumber
) => {
  return createEntryPayload(LENDING_SCRIPTS_ABI, {
    function: "withdraw",
    typeArguments: [coinAddress],
    functionArguments: [market as `0x${string}`, share],
  });
};
