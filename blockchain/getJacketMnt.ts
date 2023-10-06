import { getProvider } from "@decentraland/web3-provider";
import RequestManager, {
  AbiEvent,
  Contract,
  ContractFactory,
} from "eth-connect";
import JacketMNT_ABI from "./artifacts/JacketMNT_ABI";
import JacketAsset_ABI from "./artifacts/JacketAsset_ABI";
import { JACKET_MNT_ADDRESS, PUB_ONWER, PUB_USER } from "./artifacts/addresses";

export async function getBlockchainManager() {
  const providerInstance = await getProvider();
  const requestManager = new RequestManager(providerInstance);
  return { providerInstance, requestManager };
}

export async function getJacketMncContract(requestManager) {
  const factory = new ContractFactory(requestManager, JacketMNT_ABI);
  return (await factory.at(JACKET_MNT_ADDRESS)) as any;
}

export async function getJacketAssetContract(requestManager) {
  const nmtContract = await getJacketMncContract(requestManager);
  const jacketAssetAdr = await nmtContract.getJacketAddress();
  log("(getJacketAssetContract) - JacketAddress", jacketAssetAdr);
  log(
    "(getJacketAssetContract) - TokenID",
    await nmtContract.getJacketIntAddress()
  );
  const factory = new ContractFactory(requestManager, JacketAsset_ABI);
  return (await factory.at(jacketAssetAdr)) as any;
}

// TODO
export async function getJacketAMContract(requestManager) {
  // const factory = new ContractFactory(requestManager, JacketMNT_ABI);
  // return (await factory.at(JACKET_MNT_ADDRESS)) as any;
}

export async function getJacketPDPContract(requestManager) {
  // const factory = new ContractFactory(requestManager, JacketMNT_ABI);
  // return (await factory.at(JACKET_MNT_ADDRESS)) as any;
}

export async function getJacketPIPContract(requestManager) {
  // const factory = new ContractFactory(requestManager, JacketMNT_ABI);
  // return (await factory.at(JACKET_MNT_ADDRESS)) as any;
}

export async function logBc() {
  log("logBc");

  const providerInstance = await getProvider();
  const requestManager = new RequestManager(providerInstance);
  const abi: AbiEvent = {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "color",
        type: "string",
      },
    ],
    name: "ChangedColor",
    type: "event",
  };

  const cc : Contract = await getJacketMncContract(requestManager);
  const jj : Contract = await getJacketAssetContract(requestManager);
  const xx = await (cc as any ).getJacketAddress();

  const contractCCEvents = await jj.events['ChangedColor']({ fromBlock: 0 });

  log("log", contractCCEvents.watch((a)=>log(a)));


  // const contractJJEvents = await cc.allEvents({});
  // await contractJJEvents.watch(($) => {
  //   log("eventJJ", $);
  // });
  // const web3 = new Web3("https://sepolia.infura.io/v3/");
  // const decentralandContract = new web3.eth.Contract(JacketAsset_ABI, xx);

  // decentralandContract.events['ChangedColor']({ fromBlock: 0 }, (error, event) => {
  //   if (!error) {
  //     log('Nuovo evento:', event);
  //     // Puoi elaborare l'evento qui come preferisci
  //   } else {
  //     log('Errore:', error);
  //   }
  // });
}

