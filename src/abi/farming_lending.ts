export const FARMING_LENDING_ABI = {
  address: "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba",
  name: "farming",
  friends: [
    "0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::lending",
  ],
  exposed_functions: [
    {
      name: "claim_reward",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: ["&signer", "0x1::string::String"],
      return: ["0x1::coin::Coin<T0>"],
    },
    {
      name: "claim_reward_fa",
      visibility: "public",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x1::fungible_asset::Metadata>",
        "0x1::string::String",
      ],
      return: ["0x1::fungible_asset::FungibleAsset"],
    },
    {
      name: "claimable_reward_amount",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address", "0x1::string::String", "0x1::string::String"],
      return: ["u64"],
    },
    {
      name: "farming_identifier",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address", "u64"],
      return: ["0x1::string::String"],
    },
    {
      name: "init_alloc_point",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::string::String", "0x1::string::String", "u64"],
      return: [],
    },
    {
      name: "new_epoch",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: ["&signer", "u64", "u64", "u64"],
      return: [],
    },
    {
      name: "new_epoch_fa",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "0x1::object::Object<0x1::fungible_asset::Metadata>",
        "u64",
        "u64",
        "u64",
      ],
      return: [],
    },
    {
      name: "new_pool",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::string::String"],
      return: [],
    },
    {
      name: "new_reward",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [
        {
          constraints: [],
        },
      ],
      params: ["&signer"],
      return: [],
    },
    {
      name: "new_reward_fa",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::object::Object<0x1::fungible_asset::Metadata>"],
      return: [],
    },
    {
      name: "pool_stake_amount",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["0x1::string::String"],
      return: ["u64"],
    },
    {
      name: "stake",
      visibility: "friend",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::string::String", "u64"],
      return: [],
    },
    {
      name: "stake_amount",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["address", "0x1::string::String"],
      return: ["u64"],
    },
    {
      name: "total_alloc_point",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: ["0x1::string::String"],
      return: ["u64"],
    },
    {
      name: "unstake",
      visibility: "friend",
      is_entry: false,
      is_view: false,
      generic_type_params: [],
      params: ["address", "0x1::string::String", "u64"],
      return: [],
    },
    {
      name: "update_alloc_point",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: ["&signer", "0x1::string::String", "0x1::string::String", "u64"],
      return: [],
    },
  ],
  structs: [
    {
      name: "ClaimEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "Farming",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "pools",
          type: "0x1::simple_map::SimpleMap<0x1::string::String, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::farming::Pool>",
        },
        {
          name: "rewards",
          type: "0x1::simple_map::SimpleMap<0x1::string::String, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::farming::Reward>",
        },
      ],
    },
    {
      name: "NewPoolEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
      ],
    },
    {
      name: "Pool",
      is_native: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "stake_amount",
          type: "u64",
        },
        {
          name: "rewards",
          type: "0x1::simple_map::SimpleMap<0x1::string::String, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::farming::PoolReward>",
        },
      ],
    },
    {
      name: "PoolChangeEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "prev_alloc_point",
          type: "u64",
        },
        {
          name: "new_alloc_point",
          type: "u64",
        },
      ],
    },
    {
      name: "PoolReward",
      is_native: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "alloc_point",
          type: "u64",
        },
        {
          name: "last_rewards_sec",
          type: "u64",
        },
        {
          name: "acc_rewards_per_share",
          type: "u256",
        },
      ],
    },
    {
      name: "Reward",
      is_native: false,
      abilities: ["copy", "drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "epoch_start_sec",
          type: "u64",
        },
        {
          name: "epoch_end_sec",
          type: "u64",
        },
        {
          name: "epoch_reward_per_sec",
          type: "u64",
        },
        {
          name: "total_alloc_point",
          type: "u64",
        },
      ],
    },
    {
      name: "RewardEpochEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "epoch_start_sec",
          type: "u64",
        },
        {
          name: "epoch_end_sec",
          type: "u64",
        },
        {
          name: "epoch_reward_per_sec",
          type: "u64",
        },
      ],
    },
    {
      name: "StakeEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "Staker",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [
        {
          name: "user_pools",
          type: "0x1::simple_map::SimpleMap<0x1::string::String, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::farming::UserPool>",
        },
      ],
    },
    {
      name: "UnstakeEvent",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "UserPool",
      is_native: false,
      abilities: ["store"],
      generic_type_params: [],
      fields: [
        {
          name: "farming_identifier",
          type: "0x1::string::String",
        },
        {
          name: "stake_amount",
          type: "u64",
        },
        {
          name: "rewards",
          type: "0x1::simple_map::SimpleMap<0x1::string::String, 0xc6bc659f1649553c1a3fa05d9727433dc03843baac29473c817d06d39e7621ba::farming::UserPoolReward>",
        },
      ],
    },
    {
      name: "UserPoolReward",
      is_native: false,
      abilities: ["drop", "store"],
      generic_type_params: [],
      fields: [
        {
          name: "reward_name",
          type: "0x1::string::String",
        },
        {
          name: "last_acc_rewards_per_share",
          type: "u256",
        },
        {
          name: "reward_amount",
          type: "u64",
        },
      ],
    },
  ],
} as const;
