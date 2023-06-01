/// --- Set up a system ---

import {buildWall, spawnCube, spawnLabelledCube} from "./functions/scene-utils"
import {getUserAccount,} from "@decentraland/EthereumController";
import {globalCanvas} from "./canvas";
import {MyCube} from "./components/MyCube/MyCube";
import { gestioneEsami } from "./functions/blockchain/functions";


/**
 *  Can be removed, let object rotate but in this use case maybe it is not useful
 **/
class RotatorSystem {
    // this group will contain every entity that has a Transform component
    group = engine.getComponentGroup(Transform)

    update(dt: number) {
        // iterate over the entities of the group
        for (const entity of this.group.entities) {
            // get the Transform component of the entity
            const transform = entity.getComponent(Transform)

            // mutate the rotation
            transform.rotate(Vector3.Up(), dt * 10)
        }
    }
}

/** Commented because not needed now, think to remove */
// Add a new instance of the system to the engine
//engine.addSystem(new RotatorSystem())

/// --- Spawn a cube ---

const cube = spawnCube(8, 1, 8)
const cubeProva = spawnLabelledCube(2, 1, 8, 'Cubo di prova')


const myBox = new MyCube()
cube.addComponent(
    // Interaction with the cube, for each click
    // the cube get strecthed and cube get spawned randomicly
    new OnPointerDown(() => {
        cube.getComponent(Transform).scale.z *= 1.1
        cube.getComponent(Transform).scale.x *= 0.9

        spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
    })
)

//----- Hat management wall -----
let mainWall = buildWall(
    new Vector3(15, 10, 1),
    new Vector3(10, 0, 15),
    // "#003C71",
    "#CCBBCC",
    "Smart Hat",

    // new Transform({
    //     position: new Vector3(8, 6, 15),
    // })
);

mainWall.addComponent(
    new OnPointerDown(() => {
            log("Trying to do things with ethereum")
            
            executeTask(async () => {
                try {
                    gestioneEsami()
                    //log("User address:",address)
                } catch (error: any) {
                    log(error.toString())
                }
            })
        }
    )
)

// Prove con le aree
const modArea = new Entity()
modArea.addComponent(
    new AvatarModifierArea({
        area: {box: new Vector3(16, 4, 16)},
        modifiers: [AvatarModifiers.HIDE_AVATARS],
    })
)
modArea.addComponent(
    new Transform({
        position: new Vector3(8, 0, 8),
    })
)
engine.addEntity(modArea)


const myEntity = new Entity()
myEntity.addComponent(new BoxShape())

myEntity.addComponent(
    new OnPointerDown((e) => {
        log("myEntity was clicked", e)
    })
)


// Create a textShape component, setting the canvas as parent
const message = new UIText(globalCanvas)
message.value = "Smart HAT interface"
message.fontSize = 15
message.width = 120
message.height = 30
message.vAlign = "bottom"
message.positionX = -80