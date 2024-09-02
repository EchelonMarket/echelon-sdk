export const LENDING_ASSETS_ABI = {
  address: "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba",
  name: "lending",
  friends: [],
  exposed_functions: [
    {
      name: "preview_health_factor_given_borrow",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "preview_health_factor_given_repay",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "preview_health_factor_given_supply",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "preview_health_factor_given_withdraw",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
        "0x4dcae85fc5559071906cd5c76b7420fcbb4b0a92f00ab40ffc394aadbbff5ee9::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_borrowable_coins",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "account_borrowing_power",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_coins",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "account_emode",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: ["u8"],
    },
    {
      name: "account_emode_eligibility",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address", "u8"],
      return: [
        "bool",
        "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
      ],
    },
    {
      name: "account_lend_value",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_liability",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "account_liability_value",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_liquidation_threshold",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_liquidity",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "account_market_collateral_factor_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "account_shares",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "account_withdrawable_coins",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "asset_price",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "borrow",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["0x1::coin::Coin<T0>"],
    },
    {
      name: "borrow_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["0x1::fungible_asset::FungibleAsset"],
    },
    {
      name: "borrow_interest_rate",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "coins_to_shares",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["u64"],
    },
    {
      name: "create_efficiency_mode",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
        "u64",
        "u64",
      ],
      return: [],
    },
    {
      name: "create_efficiency_mode_v2",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
        "u64",
        "u64",
        "u64",
      ],
      return: [],
    },
    {
      name: "create_market_with_jump_model",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: ["&signer", "u64", "u64", "u64", "u64", "u64", "u64"],
      return: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
    },
    {
      name: "create_market_with_jump_model_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x1::fungible_asset::Metadata>",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
      ],
      return: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
    },
    {
      name: "create_market_with_jump_model_fa_v2",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x1::fungible_asset::Metadata>",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
      ],
      return: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
    },
    {
      name: "create_market_with_jump_model_v2",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
        "u64",
      ],
      return: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
    },
    {
      name: "efficiency_mode_info",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["u8"],
      return: [
        "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
        "u64",
        "u64",
      ],
    },
    {
      name: "exchange_rate",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64", "u64"],
    },
    {
      name: "lending_close_factor_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["u64"],
    },
    {
      name: "lending_interest_fee_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["u64"],
    },
    {
      name: "lending_liquidation_fee_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["u64"],
    },
    {
      name: "lending_liquidation_incentive_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["u64"],
    },
    {
      name: "liquidate",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::coin::Coin<T0>",
        "u64",
      ],
      return: [],
    },
    {
      name: "liquidate_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "address",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::fungible_asset::FungibleAsset",
        "u64",
      ],
      return: [],
    },
    {
      name: "market_asset_mantissa",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_asset_metadata",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["0x1::object::Object<0x1::fungible_asset::Metadata>"],
    },
    {
      name: "market_borrow_cap",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_coin",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["0x1::string::String"],
    },
    {
      name: "market_collateral_factor_bps",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_efficiency_mode_id",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u8"],
    },
    {
      name: "market_enter_efficiency_mode",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u8",
      ],
      return: [],
    },
    {
      name: "market_interest_rate_model_type",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_objects",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: [
        "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
      ],
    },
    {
      name: "market_paused",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["bool"],
    },
    {
      name: "market_quit_efficiency_mode",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: [],
    },
    {
      name: "market_statistics",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64", "u64", "u64", "u64"],
    },
    {
      name: "market_supply_cap",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_total_cash",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_total_liability",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_total_reserve",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "market_total_shares",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: ["u64"],
    },
    {
      name: "repay",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::coin::Coin<T0>",
      ],
      return: [],
    },
    {
      name: "repay_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::fungible_asset::FungibleAsset",
      ],
      return: [],
    },
    {
      name: "set_close_factor_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u64"],
      return: [],
    },
    {
      name: "set_efficiency_mode_collateral_factor_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u8", "u64"],
      return: [],
    },
    {
      name: "set_efficiency_mode_liquidation_incentive_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u8", "u64"],
      return: [],
    },
    {
      name: "set_efficiency_mode_liquidation_threshold_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u8", "u64"],
      return: [],
    },
    {
      name: "set_interest_fee_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u64"],
      return: [],
    },
    {
      name: "set_liquidation_fee_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u64"],
      return: [],
    },
    {
      name: "set_liquidation_incentive_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u64"],
      return: [],
    },
    {
      name: "set_market_borrow_cap",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [],
    },
    {
      name: "set_market_collateral_factor_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [],
    },
    {
      name: "set_market_jump_interest_rate_model",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
        "u64",
        "u64",
        "u64",
      ],
      return: [],
    },
    {
      name: "set_market_liquidation_threshold_bps",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [],
    },
    {
      name: "set_market_paused",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "bool",
      ],
      return: [],
    },
    {
      name: "set_market_supply_cap",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: [],
    },
    {
      name: "shares_to_coins",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["u64"],
    },
    {
      name: "supply",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::coin::Coin<T0>",
      ],
      return: [],
    },
    {
      name: "supply_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "0x1::fungible_asset::FungibleAsset",
      ],
      return: [],
    },
    {
      name: "supply_interest_rate",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "user_enter_efficiency_mode",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "u8"],
      return: [],
    },
    {
      name: "user_quit_efficiency_mode",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer"],
      return: [],
    },
    {
      name: "utilization",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
      ],
      return: [
        "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
      ],
    },
    {
      name: "vault_exists",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address"],
      return: ["bool"],
    },
    {
      name: "withdraw",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["0x1::coin::Coin<T0>"],
    },
    {
      name: "withdraw_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "u64",
      ],
      return: ["0x1::fungible_asset::FungibleAsset"],
    },
    {
      name: "withdraw_reserve",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "address",
      ],
      return: [],
    },
    {
      name: "withdraw_reserve_fa",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        "address",
      ],
      return: [],
    },
  ],
  structs: [
    {
      name: "AccrueMarketInterestEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "borrow_interest_rate",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
        {
          name: "second_delta",
          type: "u64",
        },
        {
          name: "simple_interest_factor",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
        {
          name: "interest_accumulated",
          type: "u64",
        },
        {
          name: "interest_fee",
          type: "u64",
        },
        {
          name: "interest_rate_index",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
        {
          name: "total_liability",
          type: "u64",
        },
        {
          name: "total_reserve",
          type: "u64",
        },
      ],
    },
    {
      name: "AccrueVaultInterestEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "account_addr",
          type: "address",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "prev_user_liability",
          type: "u64",
        },
        {
          name: "user_liability",
          type: "u64",
        },
        {
          name: "interest_rate_index",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
        {
          name: "interest_accumulated",
          type: "u64",
        },
      ],
    },
    {
      name: "BorrowEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "account_addr",
          type: "address",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "user_liability",
          type: "u64",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "total_liability",
          type: "u64",
        },
      ],
    },
    {
      name: "CoinInfo",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "type_name",
          type: "0x1::string::String",
        },
      ],
    },
    {
      name: "CreateMarketEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "asset_name",
          type: "0x1::string::String",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
      ],
    },
    {
      name: "EfficiencyMode",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "id",
          type: "u8",
        },
        {
          name: "markets",
          type: "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
        },
        {
          name: "collateral_factor_bps",
          type: "u64",
        },
        {
          name: "liquidation_incentive_bps",
          type: "u64",
        },
      ],
    },
    {
      name: "EmodeLiquidationThreshold",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "value_bps",
          type: "0x1::simple_map::SimpleMap<u8, u64>",
        },
      ],
    },
    {
      name: "FungibleAssetInfo",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "metadata",
          type: "0x1::object::Object<0x1::fungible_asset::Metadata>",
        },
      ],
    },
    {
      name: "JumpInterestRateModel",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "base_rate_bps",
          type: "u64",
        },
        {
          name: "multiplier_bps",
          type: "u64",
        },
        {
          name: "jump_multiplier_bps",
          type: "u64",
        },
        {
          name: "utilization_kink_bps",
          type: "u64",
        },
      ],
    },
    {
      name: "Lending",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "liquidation_incentive_bps",
          type: "u64",
        },
        {
          name: "close_factor_bps",
          type: "u64",
        },
        {
          name: "interest_fee_bps",
          type: "u64",
        },
        {
          name: "liquidation_fee_bps",
          type: "u64",
        },
        {
          name: "next_efficiency_mode_id",
          type: "u8",
        },
        {
          name: "efficiency_modes",
          type: "0x1::simple_map::SimpleMap<u8, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::EfficiencyMode>",
        },
        {
          name: "market_objects",
          type: "vector<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>>",
        },
      ],
    },
    {
      name: "Liability",
      is_native: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "principal",
          type: "u64",
        },
        {
          name: "interest_accumulated",
          type: "u64",
        },
        {
          name: "last_interest_rate_index",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
      ],
    },
    {
      name: "LiquidateEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "liquidator_addr",
          type: "address",
        },
        {
          name: "borrower_addr",
          type: "address",
        },
        {
          name: "collateral_market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "borrow_market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "repay_amount",
          type: "u64",
        },
        {
          name: "seize_shares",
          type: "u64",
        },
        {
          name: "seize_shares_post_fee",
          type: "u64",
        },
        {
          name: "borrower_shares",
          type: "u64",
        },
        {
          name: "liquidator_shares",
          type: "u64",
        },
        {
          name: "liquidation_fee_coins",
          type: "u64",
        },
        {
          name: "total_reserve",
          type: "u64",
        },
      ],
    },
    {
      name: "Market",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "extend_ref",
          type: "0x1::object::ExtendRef",
        },
        {
          name: "asset_name",
          type: "0x1::string::String",
        },
        {
          name: "asset_type",
          type: "u64",
        },
        {
          name: "asset_mantissa",
          type: "u64",
        },
        {
          name: "initial_liquidity",
          type: "u64",
        },
        {
          name: "total_shares",
          type: "u64",
        },
        {
          name: "total_liability",
          type: "u64",
        },
        {
          name: "total_reserve",
          type: "u64",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "interest_rate_model_type",
          type: "u64",
        },
        {
          name: "interest_rate_index",
          type: "0x94f0e00a99685c74067f7541b171bf2a4bd7d859609adce17980a7c924b135c8::fixed_point64::FixedPoint64",
        },
        {
          name: "interest_rate_last_update_seconds",
          type: "u64",
        },
        {
          name: "collateral_factor_bps",
          type: "u64",
        },
        {
          name: "efficiency_mode_id",
          type: "u8",
        },
        {
          name: "paused",
          type: "bool",
        },
        {
          name: "supply_cap",
          type: "u64",
        },
        {
          name: "borrow_cap",
          type: "u64",
        },
      ],
    },
    {
      name: "MarketLiquidationThreshold",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "value_bps",
          type: "u64",
        },
      ],
    },
    {
      name: "RepayEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "borrower_addr",
          type: "address",
        },
        {
          name: "repayer_addr",
          type: "address",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "user_liability",
          type: "u64",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "total_liability",
          type: "u64",
        },
      ],
    },
    {
      name: "SupplyEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "account_addr",
          type: "address",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "shares",
          type: "u64",
        },
        {
          name: "user_shares_increment",
          type: "u64",
        },
        {
          name: "user_shares",
          type: "u64",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "total_shares",
          type: "u64",
        },
      ],
    },
    {
      name: "Vault",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "efficiency_mode_id",
          type: "u8",
        },
        {
          name: "collaterals",
          type: "0x1::simple_map::SimpleMap<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>, u64>",
        },
        {
          name: "liabilities",
          type: "0x1::simple_map::SimpleMap<0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Liability>",
        },
      ],
    },
    {
      name: "VaultCreatedEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "account_addr",
          type: "address",
        },
      ],
    },
    {
      name: "WithdrawEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "account_addr",
          type: "address",
        },
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "shares",
          type: "u64",
        },
        {
          name: "user_shares",
          type: "u64",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "total_shares",
          type: "u64",
        },
      ],
    },
    {
      name: "WithdrawReserveEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "market_obj",
          type: "0x1::object::Object<0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending::Market>",
        },
        {
          name: "recipient",
          type: "address",
        },
        {
          name: "total_cash",
          type: "u64",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
} as const;
