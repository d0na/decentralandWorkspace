import RequestManager, {ContractFactory,HTTPProvider} from "eth-connect";
import { getProvider } from "@decentraland/web3-provider"
import HELLO_WORLD_ABI from "./contracts/ABI/HELLO_WORLD_ABI";
import { HELLO_WORLD_ADDRESS } from "./contracts/addresses";

export function testHalloWorld() {
    log("Trying to do things with ethereum")
    executeTask(async () => {
        try {
            // create an instance of the web3 provider to interface with Metamask

            //const provider = await getProvider()
            // Create the object that will handle the sending and receiving of RPC messages
            const provider = 'https://rpc-mumbai.maticvigil.com'
            log("provider:",provider)

             const providerInstance = new HTTPProvider(provider)
            // const providerInstance = await getProvider()

            const requestManager = new RequestManager(providerInstance)
            // Create a factory object based on the abi
            const HelloWorldFactory = new ContractFactory(requestManager, HELLO_WORLD_ABI)
            // Use the factory object to instance a `contract` object, referencing a specific contract
            const HelloWorldContract = (await HelloWorldFactory.at(
                HELLO_WORLD_ADDRESS
            )) as any
            // user
            log("BC Address:", HELLO_WORLD_ADDRESS)
            log("BC Contract:", HelloWorldContract)
            //Get 3D Model

            //Graduation check
            let message=await HelloWorldContract.getMessage();
            log("BC Message",message)
        } catch (error: any) {
            log("BC error ---> "+error.toString())
        }
    })
}

export function aaa() {

    executeTask(async () => {
        const { mana } = await l2.createComponents()
        const balanceWei = await mana.balance('0x21387C745c98f092C376151197E68e56E33de81e')
        log(balanceWei)
    })
}