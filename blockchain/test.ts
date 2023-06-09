import RequestManager, {ContractFactory,HTTPProvider} from "eth-connect";
import { getProvider } from "@decentraland/web3-provider"
import * as l2 from '@dcl/l2-scene-utils'
import HELLO_WORLD_ABI from "./contracts/ABI/HELLO_WORLD_ABI";
import {
    HELLO_WORLD_GOERLI_ADDRESS,
    HELLO_WORLD_POLYGON_ADDRESS,
    HELLO_WORLD_SEPOLIA_ADDRESS
} from "./contracts/addresses";

export function testHalloWorld() {
    log("Trying to do things with ethereum")
    executeTask(async () => {
        try {
            // create an instance of the web3 provider to interface with Metamask
            const providerInstance = await getProvider()

            const requestManager = new RequestManager(providerInstance)


            // Create a factory object based on the abi
            const HelloWorldFactory = new ContractFactory(requestManager, HELLO_WORLD_ABI)

            log("requestManager :",requestManager)
            log("HelloWorldFactory:",HelloWorldFactory)

            // Use the factory object to instance a `contract` object, referencing a specific contract
            const HelloWorldContract = (await HelloWorldFactory.at(
                HELLO_WORLD_SEPOLIA_ADDRESS
            )) as any
            // user
            log("BC Address:", HELLO_WORLD_SEPOLIA_ADDRESS)
            log("BC Contract:", HelloWorldContract)
            //Get 3D Model

            //Graduation check
            let message=await HelloWorldContract.getMessage();
            log("BC Message",message)

            const { mana } = await l2.createComponents()
            const balanceWei = await mana.balance('0x21387C745c98f092C376151197E68e56E33de81e')
            log("bal",balanceWei)

        } catch (error: any) {
            log("BC error ---> "+error.toString())
        }
    })
}

