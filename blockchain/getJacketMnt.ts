import { getProvider } from "@decentraland/web3-provider";
import RequestManager, { ContractFactory } from "eth-connect";
import JacketMNT_ABI from "./artifacts/JacketMNT_ABI";
import JacketAsset_ABI from "./artifacts/JacketAsset_ABI";
import { JACKET_MNT_ADDRESS } from "./artifacts/addresses";

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
  log("(getJacketAssetContract) - JacketAddress",jacketAssetAdr)
  log("(getJacketAssetContract) - TokenID",await nmtContract.getJacketIntAddress())
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