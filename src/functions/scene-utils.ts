import * as utils from '@dcl/ecs-scene-utils'

/**
 * Function to spwan cubes
 * @param x
 * @param y
 * @param z
 */

export function spawnCube(x: number, y: number, z: number) {
    // create the entity
    const cube = new Entity()

    // add a transform to the entity
    cube.addComponent(new Transform({position: new Vector3(x, y, z)}))

    // add a shape to the entity
    cube.addComponent(new BoxShape())

    // add the entity to the engine
    engine.addEntity(cube)

    return cube

}

/**
 * Function to spawn cube with label
 * @param x
 * @param y
 * @param z
 * @param label
 */
export function spawnLabelledCube(x: number, y: number, z: number, label: string) {
    // create the entity
    const cube = spawnCube(x, y, z)
    addLabel(label, cube)
    return cube
}


// add label to cube

export function addLabel(text: string, parent: IEntity,textOffsetPosition = new Vector3(0, 1.5, 0)) {
    const label = new Entity()
    const textOffset = new Transform({
        position: textOffsetPosition
    })

    label.setParent(parent)
    label.addComponent(new Billboard())
    label.addComponent(textOffset)
    label.addComponent(new TextShape(text))
    label.getComponent(TextShape).fontSize = 3
    label.getComponent(TextShape).color = Color3.Black()


    engine.addEntity(label)
}

/**
 *
 * @param dimension
 * @param position
 * @param color
 * @param text
 */
export function buildWall(dimension: Vector3, position: Vector3, color: string, text: string) {
    const wall = new Entity();
    wall.addComponent(new BoxShape());
    wall.addComponent(new Transform({
        scale: dimension,
        position: position
    }))
    engine.addEntity(wall);

    // Wall color
    let wallColor = new Material();
    wallColor.albedoColor = Color3.FromHexString(color);
    wall.addComponent(wallColor);

    const t = textShapeBuilder(new Transform({
        position: new Vector3(1, 2, 15),
    }),text, '#112233')

    utils.addLabel(text, wall)
    return wall;
}

/**
 *
 * @param transform
 * @param text
 * @param color
 * @param size
 */
export function textShapeBuilder(transform: Transform,text: string, color: string = "#000000",  size?: number) {
    const textEntity = new Entity();
    const textShape = new TextShape(text);
    textShape.font = new Font(Fonts.SansSerif_SemiBold);
    textShape.fontSize = 10;
    textShape.color = Color3.FromHexString(color);
    textEntity.addComponent(textShape);
    return textEntity
}