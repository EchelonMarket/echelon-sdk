[**echelon-sdk**](../README.md) • **Docs**

***

[echelon-sdk](../globals.md) / getAccountWithdrawable

# Function: getAccountWithdrawable()

> **getAccountWithdrawable**(`aptos`, `account`, `market`): `Promise`\<`number`\>

Retrieves the withdrawable amount of a coin for a specified account in a market.

## Parameters

• **aptos**: `Aptos`

The Aptos instance from @aptos-labs/ts-sdk

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

## Returns

`Promise`\<`number`\>

A promise that resolves to the withdrawable amount.

## Source

view.ts:84
