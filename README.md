# echelon-sdk

## Quick Start

### Install

Edit or add a `.npmrc` file to including following lines:
```
//npm.pkg.github.com/:_authToken=_authToken
@echelonmarket:registry=https://npm.pkg.github.com
```

Run command to login:
```
$ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
```

USERNAME is you github account username. Get the token from your github settings, see ["Managing your personal access tokens."](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

Then you can install the package:
```
npm install @echelonmarket/echelon-sdk
```

And make sure you also install the `@aptos-labs/ts-sdk`.

For more details, see ["installing a package from github packages"](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package).

### Get all markets

```typescript
import { EchelonClient } from "echelon-sdk";
import { Account, Aptos, AptosConfig } from "@aptos-labs/ts-sdk";

// create the aptos instance
const aptos = new Aptos(
  new AptosConfig({
    network: Network.MAINNET,
    fullnode: "your rpc endpoint",
  })
);

const client = new EchelonClient(aptos, "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba");

// get all markets
const markets = await client.getAllMarkets();
```

Each market has a corresponding coin, to get the coin address:

```typescript
const market = markets[0]; // use the first market as an example
const coin = await client.getMarketCoin(market);
```

### Borrow/Supply/Replay/Withdraw

Borrow, supply, replay, and withdraw are similar. Let's use Borrow as an example.

First, you need to get the amount of coins the user can borrow:

```typescript
const borrowable = await client.getAccountBorrowable(account, market);
```

The user can borrow an amount of coins less than the maximum borrowable. To send the transaction, you can use "@thalalabs/surf" or Aptos wallet adapter. Here is an example using Surf:

```tsx
import { useSubmitTransaction } from '@thalalabs/surf/hooks';

const payload = client.createBorrowPayload(
  "0x1::aptos_coin::AptosCoin",
  // the market address of APT
  "0x761a97787fa8b3ae0cef91ebc2d96e56cc539df5bc88dadabee98ae00363a831",
  "100000000"
);

// in react:
const {submitTransaction} = useSubmitTransaction()

<button onClick={() => submitTransaction(payload)} />
```

## Details

Please refer to the complete API documentation at: [API docs](docs/globals.md)
