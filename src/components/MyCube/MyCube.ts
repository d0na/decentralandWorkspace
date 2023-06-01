import * as utils from "@dcl/ecs-scene-utils";
import {gestioneEsami} from "../../functions/blockchain/functions";

const handleEvent = () =>{
    gestioneEsami
}
export class MyCube extends Entity {
    constructor() {
        super();
        // add form
        this.addComponent(new BoxShape())

        // add Dimension/Position
        this.addComponent(new Transform({
                position: new Vector3(1, 1, 1),
                scale: new Vector3(1, 1, 1)
            }
        ))

        //add string
        utils.addLabel('My Cube', this)

        // add color
        let wallColor = new Material();
        wallColor.albedoColor = Color4.Red();
        this.addComponent(wallColor);

        this.addComponent(new OnClick(handleEvent))

        engine.addEntity(this)
    }
}