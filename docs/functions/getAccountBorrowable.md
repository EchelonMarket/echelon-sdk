[**echelon-sdk**](../README.md) • **Docs**

***

[echelon-sdk](../globals.md) / getAccountBorrowable

# Function: getAccountBorrowable()

> **getAccountBorrowable**(`aptos`, `account`, `market`): `Promise`\<`number`\>

Retrieves the borrowable amount of a coin for a specified account in a market.

## Parameters

• **aptos**: `Aptos`

The Aptos instance from @aptos-labs/ts-sdk

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

## Returns

`Promise`\<`number`\>

A promise that resolves to the borrowable amount.

## Source

view.ts:61
