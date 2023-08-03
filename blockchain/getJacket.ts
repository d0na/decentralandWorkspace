import { getProvider } from "@decentraland/web3-provider";
import RequestManager, { ContractFactory } from "eth-connect";
import JacketMNT_ABI from "./artifacts/JacketMNT_ABI";
import { JACKET_MNT_ADDRESS } from "./artifacts/addresses";

export function getJacket() {
  log("Trying to do things with ethereum");
  executeTask(async () => {
    try {
      // create an instance of the web3 provider to interface with Metamask
      const providerInstance = await getProvider();

      const requestManager = new RequestManager(providerInstance);

      // Create a factory object based on the abi
      const HelloWorldFactory = new ContractFactory(
        requestManager,
        JacketMNT_ABI
      );

      log("requestManager :", requestManager);
      log("HelloWorldFactory:", HelloWorldFactory);

      // Use the factory object to instance a `contract` object, referencing a specific contract
      const JacketMNTContract = (await HelloWorldFactory.at(
        JACKET_MNT_ADDRESS
      )) as any;
      // user
      log("BC Address:", JACKET_MNT_ADDRESS);
      log("BC Contract:", JacketMNTContract);
      //Get 3D Model

      //Graduation check
      // let message=await JacketMNTContract.getMessage();
      // log("BC Message",message)

      // const { mana } = await l2.createComponents()
      // const balanceWei = await mana.balance('0x21387C745c98f092C376151197E68e56E33de81e')
      // log("bal",balanceWei)
    } catch (error) {
      log("BC error ---> " + error.toString());
    }
  });
}
