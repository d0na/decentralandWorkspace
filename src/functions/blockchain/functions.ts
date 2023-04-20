import {getProvider} from "@decentraland/web3-provider";
import RequestManager, {ContractFactory} from "eth-connect";
import ABI_SMART_HAT from "../../contracts/ABI/ABI_SMART_HAT";
import {GESTIONE_ESAMI_ADDRESS} from "../../contracts/addresses";
import {getUserAccount} from "@decentraland/EthereumController";

export function gestioneEsami() {
    log("Trying to do things with ethereum")
    executeTask(async () => {
        try {
            // create an instance of the web3 provider to interface with Metamask
            const provider = await getProvider()
            // Create the object that will handle the sending and receiving of RPC messages
            const requestManager = new RequestManager(provider)
            // Create a factory object based on the abi
            const GestioneEsamiFactory = new ContractFactory(requestManager, ABI_SMART_HAT)
            // Use the factory object to instance a `contract` object, referencing a specific contract
            const GestioneEsamiContract = (await GestioneEsamiFactory.at(
                GESTIONE_ESAMI_ADDRESS
            )) as any
            // user
            const userAddress = await getUserAccount()
            //Get 3D Model
            log("User address:", userAddress)
            log("GestioneEsamiContract:", GestioneEsamiContract)

            //Graduation check
            let isGraduatedVersion=await GestioneEsamiContract.isGraduatedVersion();
            log("isGraduatedVersion",isGraduatedVersion)
        } catch (error: any) {
            log("Gestione Esami error ---> "+error.toString())
        }
    })
}



