$(function () {
    consoleInit(main)
    });
    
    
    const HERMES_CHEF_ABI = [
        {
            "stateMutability": "nonpayable",
            "inputs": [],
            "type": "constructor"
        },
        {
            "type": "event",
            "name": "ApolloTransfer",
            "anonymous": false,
            "inputs": [
                {
                    "internalType": "address",
                    "indexed": false,
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "requested",
                    "type": "uint256"
                },
                {
                    "name": "amount",
                    "indexed": false,
                    "internalType": "uint256",
                    "type": "uint256"
                }
            ]
        },
        {
            "anonymous": false,
            "type": "event",
            "inputs": [
                {
                    "name": "to",
                    "internalType": "address",
                    "type": "address",
                    "indexed": false
                },
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "indexed": false,
                    "name": "multiplier"
                },
                {
                    "name": "bonus",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "name": "Bonus"
        },
        {
            "type": "event",
            "name": "Deposit",
            "anonymous": false,
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address",
                    "indexed": true
                },
                {
                    "internalType": "uint256",
                    "name": "pid",
                    "indexed": true,
                    "type": "uint256"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "amount",
                    "indexed": false
                }
            ]
        },
        {
            "anonymous": false,
            "name": "EmergencyWithdraw",
            "inputs": [
                {
                    "indexed": true,
                    "name": "user",
                    "internalType": "address",
                    "type": "address"
                },
                {
                    "type": "uint256",
                    "name": "pid",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "indexed": false,
                    "type": "uint256"
                }
            ],
            "type": "event"
        },
        {
            "type": "event",
            "name": "OwnershipTransferred",
            "inputs": [
                {
                    "name": "previousOwner",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "internalType": "address",
                    "type": "address",
                    "indexed": true,
                    "name": "newOwner"
                }
            ],
            "anonymous": false
        },
        {
            "anonymous": false,
            "name": "PoolAdd",
            "type": "event",
            "inputs": [
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "user",
                    "indexed": true
                },
                {
                    "indexed": false,
                    "name": "lpToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "allocPoint",
                    "indexed": false
                },
                {
                    "name": "lastRewardBlock",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "depositFeeBP",
                    "type": "uint16",
                    "indexed": false,
                    "internalType": "uint16"
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "type": "address",
                    "name": "lpToken",
                    "indexed": false,
                    "internalType": "contract IERC20"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "allocPoint",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "lastRewardBlock",
                    "indexed": false
                },
                {
                    "name": "depositFeeBP",
                    "type": "uint16",
                    "internalType": "uint16",
                    "indexed": false
                }
            ],
            "name": "PoolSet",
            "type": "event",
            "anonymous": false
        },
        {
            "type": "event",
            "inputs": [
                {
                    "internalType": "address",
                    "indexed": true,
                    "type": "address",
                    "name": "user"
                },
                {
                    "name": "newAddress",
                    "internalType": "address",
                    "indexed": true,
                    "type": "address"
                }
            ],
            "anonymous": false,
            "name": "SetDevAddress"
        },
        {
            "name": "SetFeeAddress",
            "type": "event",
            "inputs": [
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "user",
                    "indexed": true
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "type": "address",
                    "name": "newAddress"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "UpdateEmissionRate",
            "anonymous": false,
            "inputs": [
                {
                    "internalType": "address",
                    "indexed": true,
                    "type": "address",
                    "name": "user"
                },
                {
                    "indexed": false,
                    "name": "tokenPerBlock",
                    "internalType": "uint256",
                    "type": "uint256"
                }
            ]
        },
        {
            "inputs": [
                {
                    "type": "address",
                    "name": "user",
                    "internalType": "address",
                    "indexed": true
                },
                {
                    "internalType": "uint256",
                    "name": "startBlock",
                    "indexed": false,
                    "type": "uint256"
                }
            ],
            "type": "event",
            "name": "UpdateStartBlock",
            "anonymous": false
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "pid",
                    "internalType": "uint256",
                    "indexed": true,
                    "type": "uint256"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256",
                    "indexed": false
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "name": "BONUS_MULTIPLIER",
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "stateMutability": "view",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "type": "function",
            "name": "BURN_ADDRESS"
        },
        {
            "inputs": [],
            "type": "function",
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "name": "MAXIMUM_EMISSION_RATE",
            "stateMutability": "view"
        },
        {
            "stateMutability": "view",
            "inputs": [],
            "name": "NULL_ADDRESS",
            "type": "function",
            "outputs": [
                {
                    "name": "",
                    "internalType": "address",
                    "type": "address"
                }
            ]
        },
        {
            "type": "function",
            "name": "devAddress",
            "inputs": [],
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "name": "feeAddress",
            "stateMutability": "view",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "type": "function"
        },
        {
            "name": "minNftToBoost",
            "type": "function",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view",
            "inputs": []
        },
        {
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC721"
                }
            ],
            "inputs": [],
            "name": "nft",
            "type": "function",
            "stateMutability": "view"
        },
        {
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": ""
                }
            ],
            "name": "nftBoost",
            "stateMutability": "view",
            "type": "function"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "internalType": "address",
                    "type": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "poolExistence",
            "stateMutability": "view",
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ]
        },
        {
            "name": "poolInfo",
            "type": "function",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "address",
                    "internalType": "contract IERC20",
                    "name": "lpToken"
                },
                {
                    "name": "allocPoint",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "lastRewardBlock",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "accApolloPerShare",
                    "internalType": "uint256"
                },
                {
                    "name": "depositFeeBP",
                    "type": "uint16",
                    "internalType": "uint16"
                },
                {
                    "name": "lpSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "stateMutability": "nonpayable",
            "name": "renounceOwnership",
            "inputs": [],
            "outputs": [],
            "type": "function"
        },
        {
            "name": "startBlock",
            "inputs": [],
            "type": "function",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "inputs": [],
            "outputs": [
                {
                    "internalType": "contract Plutus",
                    "type": "address",
                    "name": ""
                }
            ],
            "name": "token",
            "stateMutability": "view"
        },
        {
            "name": "tokenPerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "type": "function",
            "stateMutability": "view",
            "inputs": []
        },
        {
            "name": "totalAllocPoint",
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": ""
                }
            ],
            "type": "function",
            "stateMutability": "view"
        },
        {
            "outputs": [],
            "name": "transferOwnership",
            "inputs": [
                {
                    "type": "address",
                    "name": "newOwner",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "type": "function",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "name": "rewardDebt"
                }
            ],
            "name": "userInfo",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "name": "poolLength",
            "stateMutability": "view",
            "inputs": [],
            "type": "function",
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "stateMutability": "nonpayable",
            "outputs": [],
            "type": "function",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_allocPoint",
                    "internalType": "uint256"
                },
                {
                    "name": "_lpToken",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "type": "uint16",
                    "internalType": "uint16",
                    "name": "_depositFeeBP"
                }
            ],
            "name": "add"
        },
        {
            "name": "set",
            "type": "function",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_allocPoint",
                    "type": "uint256"
                },
                {
                    "name": "_depositFeeBP",
                    "internalType": "uint16",
                    "type": "uint16"
                }
            ],
            "outputs": []
        },
        {
            "name": "getMultiplier",
            "inputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_from"
                },
                {
                    "name": "_to",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "type": "function",
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "uint256",
                    "name": "",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "inputs": [
                {
                    "name": "_pid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "type": "address",
                    "internalType": "address",
                    "name": "_user"
                }
            ],
            "name": "pendingApollo",
            "stateMutability": "view",
            "type": "function"
        },
        {
            "type": "function",
            "outputs": [],
            "inputs": [],
            "name": "massUpdatePools",
            "stateMutability": "nonpayable"
        },
        {
            "outputs": [],
            "name": "updatePool",
            "type": "function",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "internalType": "uint256",
                    "type": "uint256",
                    "name": "_pid"
                }
            ]
        },
        {
            "outputs": [],
            "name": "deposit",
            "stateMutability": "nonpayable",
            "type": "function",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_pid",
                    "internalType": "uint256"
                },
                {
                    "type": "uint256",
                    "name": "_amount",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "stateMutability": "nonpayable",
            "type": "function",
            "inputs": [
                {
                    "name": "_pid",
                    "internalType": "uint256",
                    "type": "uint256"
                },
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_amount"
                }
            ],
            "outputs": [],
            "name": "withdraw"
        },
        {
            "type": "function",
            "stateMutability": "nonpayable",
            "name": "emergencyWithdraw",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_pid",
                    "internalType": "uint256"
                }
            ],
            "outputs": []
        },
        {
            "name": "setDevAddress",
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_devAddress",
                    "type": "address"
                }
            ],
            "outputs": [],
            "type": "function",
            "stateMutability": "nonpayable"
        },
        {
            "name": "setFeeAddress",
            "inputs": [
                {
                    "type": "address",
                    "name": "_feeAddress",
                    "internalType": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "outputs": []
        },
        {
            "name": "updateEmissionRate",
            "type": "function",
            "stateMutability": "nonpayable",
            "outputs": [],
            "inputs": [
                {
                    "type": "uint256",
                    "name": "_tokenPerBlock",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "outputs": [],
            "type": "function",
            "name": "updateStartBlock",
            "stateMutability": "nonpayable",
            "inputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_startBlock"
                }
            ]
        },
        {
            "stateMutability": "nonpayable",
            "outputs": [],
            "type": "function",
            "name": "setMinNftBoost",
            "inputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": "_minNftToBoost"
                }
            ]
        },
        {
            "type": "function",
            "inputs": [
                {
                    "name": "_nftBoost",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "name": "setNftBoost",
            "outputs": []
        },
        {
            "inputs": [
                {
                    "name": "_nft",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "name": "setNftContract",
            "stateMutability": "nonpayable",
            "outputs": [],
            "type": "function"
        },
        {
            "stateMutability": "view",
            "outputs": [
                {
                    "type": "bool",
                    "name": "",
                    "internalType": "bool"
                }
            ],
            "name": "isNftHolder",
            "type": "function",
            "inputs": [
                {
                    "type": "address",
                    "name": "_address",
                    "internalType": "address"
                }
            ]
        },
        {
            "type": "function",
            "stateMutability": "view",
            "inputs": [
                {
                    "name": "_user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "internalType": "uint256",
                    "name": ""
                }
            ],
            "name": "calculateBonus"
        },
        {
            "type": "function",
            "stateMutability": "nonpayable",
            "outputs": [],
            "name": "setRewardTo4",
            "inputs": []
        },
        {
            "outputs": [],
            "stateMutability": "nonpayable",
            "inputs": [],
            "type": "function",
            "name": "setRewardTo04"
        },
        {
            "name": "setRewardTo05",
            "stateMutability": "nonpayable",
            "outputs": [],
            "type": "function",
            "inputs": []
        },
        {
            "inputs": [],
            "name": "setRewardTo06",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "name": "setMaxSupply",
            "type": "function",
            "stateMutability": "nonpayable",
            "outputs": [],
            "inputs": [
                {
                    "type": "uint256",
                    "name": "val",
                    "internalType": "uint256"
                }
            ]
        }
      ]
    async function main() {
        const App = await init_ethers();
    
        _print(`Initialized ${App.YOUR_ADDRESS}\n`);
        _print("Reading smart contracts...\n");
    
        const HERMES_CHEF_ADDR = "0x8c8dca27e450d7d93fa951e79ec354dce543629e";
        const rewardTokenTicker = "PLUTUS";
        const HERMES_CHEF = new ethers.Contract(HERMES_CHEF_ADDR, HERMES_CHEF_ABI, App.provider);
        const startBlock = await HERMES_CHEF.startBlock();
        const currentBlock = await App.provider.getBlockNumber();
        
        let rewardsPerWeek = 0;
        if(currentBlock < startBlock){
            _print(`Rewards start at block ${startBlock}\n`);
          }else{
           rewardsPerWeek = await HERMES_CHEF.tokenPerBlock() /1e18
             * 604800 / 2.1;
          }
    
        const tokens = {};
        const prices = await getHarmonyPrices();
    
        await loadHarmonyChefContract(App, tokens, prices, HERMES_CHEF, HERMES_CHEF_ADDR, HERMES_CHEF_ABI, rewardTokenTicker,
            "plutus", null, rewardsPerWeek, "pendingApollo");
    
        hideLoading();
    }
    
