/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC1155",
        name: "_item",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161066b38038061066b83398181016040528101906100329190610125565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561006c57600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550655af3107a400060016000600181526020019081526020016000208190555065b5e620f48000600160006002815260200190815260200160002081905550660110d9316ec000600160006003815260200190815260200160002081905550506101b2565b60008151905061011f8161019b565b92915050565b60006020828403121561013b5761013a610196565b5b600061014984828501610110565b91505092915050565b600061015d82610176565b9050919050565b600061016f82610152565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6101a481610164565b81146101af57600080fd5b50565b6104aa806101c16000396000f3fe60806040526004361061002d5760003560e01c8063e7fb74c71461003c578063f23a6e611461005857610037565b3661003757600080fd5b600080fd5b610056600480360381019061005191906102a0565b610095565b005b34801561006457600080fd5b5061007f600480360381019061007a9190610206565b610170565b60405161008c9190610384565b60405180910390f35b6000349050600160008381526020019081526020016000205481101580156100d157506000600160008481526020019081526020016000205414155b6100da57600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f242432a30338560016040518563ffffffff1660e01b815260040161013a949392919061032c565b600060405180830381600087803b15801561015457600080fd5b505af1158015610168573d6000803e3d6000fd5b505050505050565b600063f23a6e6160e01b90509695505050505050565b60008135905061019581610446565b92915050565b60008083601f8401126101b1576101b061042f565b5b8235905067ffffffffffffffff8111156101ce576101cd61042a565b5b6020830191508360018202830111156101ea576101e9610434565b5b9250929050565b6000813590506102008161045d565b92915050565b60008060008060008060a087890312156102235761022261043e565b5b600061023189828a01610186565b965050602061024289828a01610186565b955050604061025389828a016101f1565b945050606061026489828a016101f1565b935050608087013567ffffffffffffffff81111561028557610284610439565b5b61029189828a0161019b565b92509250509295509295509295565b6000602082840312156102b6576102b561043e565b5b60006102c4848285016101f1565b91505092915050565b6102d6816103b0565b82525050565b6102e5816103c2565b82525050565b6102f481610418565b82525050565b600061030760008361039f565b915061031282610443565b600082019050919050565b6103268161040e565b82525050565b600060a08201905061034160008301876102cd565b61034e60208301866102cd565b61035b604083018561031d565b61036860608301846102eb565b8181036080830152610379816102fa565b905095945050505050565b600060208201905061039960008301846102dc565b92915050565b600082825260208201905092915050565b60006103bb826103ee565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006104238261040e565b9050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b50565b61044f816103b0565b811461045a57600080fd5b50565b6104668161040e565b811461047157600080fd5b5056fea26469706673582212205d256aac867a4b8455ee36ee39e1b682e4e489b1b9137543a5ad115dba41897964736f6c63430008070033";

export class Marketplace__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _item: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Marketplace> {
    return super.deploy(_item, overrides || {}) as Promise<Marketplace>;
  }
  getDeployTransaction(
    _item: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_item, overrides || {});
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}
