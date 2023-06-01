import {getProvider} from "@decentraland/web3-provider";
import RequestManager, {ContractFactory,HTTPProvider} from "eth-connect";
import ABI_SMART_HAT from "../../contracts/ABI/ABI_SMART_HAT";
import {GESTIONE_ESAMI_ADDRESS} from "../../contracts/addresses";
import {getUserAccount} from "@decentraland/EthereumController";
import ABI_GESTIONE_ESAMI from "src/contracts/ABI/ABI_GESTIONE_ESAMI";

export function gestioneEsami() {
    log("Trying to do things with ethereum")
    executeTask(async () => {
        try {
            // create an instance of the web3 provider to interface with Metamask

            //const provider = await getProvider()
            // Create the object that will handle the sending and receiving of RPC messages
            const provider = 'https://sepolia.infura.io/v3/'
            log("provider:",provider)

            const providerInstance = new HTTPProvider(provider)
            const requestManager = new RequestManager(providerInstance)
            // Create a factory object based on the abi
            const GestioneEsamiFactory = new ContractFactory(requestManager, ABI_GESTIONE_ESAMI)
            // Use the factory object to instance a `contract` object, referencing a specific contract
            const GestioneEsamiContract = (await GestioneEsamiFactory.at(
                GESTIONE_ESAMI_ADDRESS
            )) as any
            // user
            const userAddress = await getUserAccount()
            log("GestioneEsamiAddress:", GESTIONE_ESAMI_ADDRESS)
            log("GestioneEsamiContract:", GestioneEsamiContract)
            //Get 3D Model
            log("User address:", userAddress)
            

            //Graduation check
            let isGraduatedVersion=await GestioneEsamiContract.isGraduatedVersion();
            log("isGraduatedVersion",isGraduatedVersion)
        } catch (error: any) {
            log("Gestione Esami error ---> "+error.toString())
        }
    })
}



