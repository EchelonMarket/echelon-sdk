[**@echelonmarket/echelon-sdk**](../README.md) • **Docs**

***

[@echelonmarket/echelon-sdk](../globals.md) / EchelonClient

# Class: EchelonClient

EchelonClient class for interacting with the Aptos blockchain.

## Constructors

### new EchelonClient()

> **new EchelonClient**(`aptos`, `contractAddress`): [`EchelonClient`](EchelonClient.md)

Creates an instance of EchelonClient.

#### Parameters

• **aptos**: `Aptos`

The Aptos instance to interact with the blockchain.

• **contractAddress**: \`0x$\{string\}\`

The address of the Echelon contract.

#### Returns

[`EchelonClient`](EchelonClient.md)

#### Source

index.ts:23

## Properties

### address

> **address**: \`0x$\{string\}\`

#### Source

index.ts:15

***

### aptos

> **aptos**: `Aptos`

#### Source

index.ts:14

## Methods

### convertAmountToShare()

> **convertAmountToShare**(`market`, `amount`): `Promise`\<`number`\>

Converts a specified amount of a coin to its corresponding share.

#### Parameters

• **market**: `string`

The market identifier.

• **amount**: `AnyNumber`

The amount of the coin to convert.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the converted share amount.

#### Source

index.ts:230

***

### createBorrowPayload()

> **createBorrowPayload**(`coinAddress`, `market`, `amount`): `EntryPayload`

Creates a payload for borrowing a specified amount of a coin.

#### Parameters

• **coinAddress**: `string`

The address of the coin to borrow.

• **market**: `string`

The market identifier.

• **amount**: `AnyNumber`

The amount to borrow.

#### Returns

`EntryPayload`

The payload for the borrow transaction.

#### Source

index.ts:253

***

### createRepayPayload()

> **createRepayPayload**(`coinAddress`, `market`, `amount`): `EntryPayload`

Creates a payload for repaying a specified amount of a coin.

#### Parameters

• **coinAddress**: `string`

The address of the coin to repay.

• **market**: `string`

The market identifier.

• **amount**: `AnyNumber`

The amount to repay.

#### Returns

`EntryPayload`

The payload for the repay transaction.

#### Source

index.ts:274

***

### createSupplyPayload()

> **createSupplyPayload**(`coinAddress`, `market`, `amount`): `EntryPayload`

Creates a payload for supplying a specified amount of a coin.

#### Parameters

• **coinAddress**: `string`

The address of the coin to supply.

• **market**: `string`

The market identifier.

• **amount**: `AnyNumber`

The amount to supply.

#### Returns

`EntryPayload`

The payload for the supply transaction.

#### Source

index.ts:291

***

### createWithdrawPayload()

> **createWithdrawPayload**(`coinAddress`, `market`, `share`): `EntryPayload`

Creates a payload for withdrawing a specified share of a coin.

#### Parameters

• **coinAddress**: `string`

The address of the coin to withdraw.

• **market**: `string`

The market identifier.

• **share**: `AnyNumber`

The share to withdraw. Use the [convertAmountToShare](EchelonClient.md#convertamounttoshare) to convert an amount of coins to shares.

#### Returns

`EntryPayload`

The payload for the withdraw transaction.

#### Source

index.ts:308

***

### getAccountBorrowable()

> **getAccountBorrowable**(`account`, `market`): `Promise`\<`number`\>

Retrieves the borrowable amount of a coin for a specified account in a market.

#### Parameters

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the borrowable amount.

#### Source

index.ts:146

***

### getAccountClaimableReward()

> **getAccountClaimableReward**(`account`, `coinName`, `market`, `mode`): `Promise`\<`number`\>

Retrieves claimable reward amount of a coin for a specified account.

#### Parameters

• **account**: `string`

The address of the account.

• **coinName**: `string`

the 0x1::coin::name of the coin.

• **market**: `string`

The market identifier.

• **mode**: `"borrow"` \| `"supply"`

The reward for supply the coin or borrow the coin.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the amount of claimable reward.

#### Source

index.ts:204

***

### getAccountLiability()

> **getAccountLiability**(`account`, `market`): `Promise`\<`number`\>

Retrieves the liability amount of a coin for a specified account in a market.

#### Parameters

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the liability amount.

#### Source

index.ts:105

***

### getAccountSupply()

> **getAccountSupply**(`account`, `market`): `Promise`\<`number`\>

Retrieves the supplied amount of a coin for a specified account in a market.

#### Parameters

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the supplied amount.

#### Source

index.ts:165

***

### getAccountWithdrawable()

> **getAccountWithdrawable**(`account`, `market`): `Promise`\<`number`\>

Retrieves the withdrawable amount of a coin for a specified account in a market.

#### Parameters

• **account**: `string`

The address of the account.

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the withdrawable amount.

#### Source

index.ts:124

***

### getAllMarkets()

> **getAllMarkets**(): `Promise`\<`string`[]\>

Retrieves a list of all market identifiers.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of market identifiers.

#### Source

index.ts:49

***

### getBorrowApr()

> **getBorrowApr**(`market`): `Promise`\<`number`\>

Retrieves the borrow Annual Percentage Rate (APR) for a specified market.

#### Parameters

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the borrow APR.

#### Source

index.ts:68

***

### getCoinPrice()

> **getCoinPrice**(`market`): `Promise`\<`number`\>

Retrieves the coin price.

#### Parameters

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the coin price.

#### Source

index.ts:183

***

### getMarketCoin()

> **getMarketCoin**(`market`): `Promise`\<`string`\>

Retrieves the coin address for a specified market.

#### Parameters

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the coin address.

#### Source

index.ts:34

***

### getSupplyApr()

> **getSupplyApr**(`market`): `Promise`\<`number`\>

Retrieves the supply Annual Percentage Rate (APR) for a specified market.

#### Parameters

• **market**: `string`

The market identifier.

#### Returns

`Promise`\<`number`\>

A promise that resolves to the supply APR.

#### Source

index.ts:86
