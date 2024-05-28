[**echelon-sdk**](../README.md) • **Docs**

***

[echelon-sdk](../globals.md) / createWithdrawPayload

# Function: createWithdrawPayload()

> **createWithdrawPayload**(`coinAddress`, `market`, `share`): `EntryPayload`

Creates a payload for withdrawing a specified share of a coin.

## Parameters

• **coinAddress**: `string`

The address of the coin to withdraw.

• **market**: `string`

The market identifier.

• **share**: `AnyNumber`

The share to withdraw. Use the [convertAmountToShare](convertAmountToShare.md) to convert an amount of coins to shares.

## Returns

`EntryPayload`

The payload for the withdraw transaction.

## Source

entry.ts:73
