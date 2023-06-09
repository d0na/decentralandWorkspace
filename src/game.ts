import {createChannel} from '../node_modules/decentraland-builder-scripts/channel'
import {createInventory} from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script2 from "../a867ec81-3de5-4b2d-913b-203c0ce19b8d/src/item"
import Script3 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script4 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script6 from "../68986c60-c95c-41ab-adf0-d0e02f5b5440/src/item"
import Script7 from "../683aa047-8043-40f8-8d31-beb7ab1b138c/src/item"
import Script8 from "../89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/src/item"
import Script9 from "../76d3a347-02b1-4c74-bbf3-7787ede6a3b1/src/item"
import Script10 from "../504cd7ac-2873-40d8-9172-13c9c24304b0/src/item"
import * as ui from '@dcl/ui-scene-utils'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bermudaGrass.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
    position: new Vector3(8, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform2)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform3 = new Transform({
    position: new Vector3(11, 2, 6.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
messageBubble.addComponentOrReplace(transform3)

const galleryInfoPeach = new Entity('galleryInfoPeach')
engine.addEntity(galleryInfoPeach)
galleryInfoPeach.setParent(_scene)
const transform4 = new Transform({
    position: new Vector3(7, 0, 7),
    rotation: new Quaternion(-3.647312859448703e-15, 1, -1.1920926823449918e-7, 2.9802322387695312e-8),
    scale: new Vector3(1, 1, 1)
})
galleryInfoPeach.addComponentOrReplace(transform4)

const floorMetal = new Entity('floorMetal')
engine.addEntity(floorMetal)
floorMetal.setParent(_scene)
const transform5 = new Transform({
    position: new Vector3(8, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
floorMetal.addComponentOrReplace(transform5)
const gltfShape2 = new GLTFShape("0114c027-7a1b-41dc-9d6c-e3178542d6b9/MetalFloor.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
floorMetal.addComponentOrReplace(gltfShape2)

const floorMetal2 = new Entity('floorMetal2')
engine.addEntity(floorMetal2)
floorMetal2.setParent(_scene)
const transform6 = new Transform({
    position: new Vector3(12, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
floorMetal2.addComponentOrReplace(transform6)
floorMetal2.addComponentOrReplace(gltfShape2)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform7 = new Transform({
    position: new Vector3(11, 0, 4),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
triggerArea.addComponentOrReplace(transform7)

const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform8 = new Transform({
    position: new Vector3(5, 0, 7.5),
    rotation: new Quaternion(-5.837282663256806e-15, 1, -1.1920928244535389e-7, 0),
    scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform8)

const armchairRed = new Entity('armchairRed')
engine.addEntity(armchairRed)
armchairRed.setParent(_scene)
const transform9 = new Transform({
    position: new Vector3(8.5, 0, 4.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
armchairRed.addComponentOrReplace(transform9)
const gltfShape3 = new GLTFShape("dc2d6a5f-0dc7-4300-8015-46993a3c425d/RedArmchair.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
armchairRed.addComponentOrReplace(gltfShape3)

const sidewalkTile = new Entity('sidewalkTile')
engine.addEntity(sidewalkTile)
sidewalkTile.setParent(_scene)
const transform10 = new Transform({
    position: new Vector3(11, 0, 4),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
sidewalkTile.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("9e52d29e-d70c-4dc2-9cff-80cfc2771b58/FloorBlock_01/FloorBlock_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
sidewalkTile.addComponentOrReplace(gltfShape4)

const mediumOrnamentedStoneRail = new Entity('mediumOrnamentedStoneRail')
engine.addEntity(mediumOrnamentedStoneRail)
mediumOrnamentedStoneRail.setParent(_scene)
const transform11 = new Transform({
    position: new Vector3(8.5, 0, 8),
    rotation: new Quaternion(-9.055502184153637e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(1.0000020265579224, 1, 1.5150048732757568)
})
mediumOrnamentedStoneRail.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("e4586159-443d-44f0-a26d-f5b90a148cb2/FenceStoneMedium_01/FenceStoneMedium_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
mediumOrnamentedStoneRail.addComponentOrReplace(gltfShape5)

const largeOrnamentedStoneRail = new Entity('largeOrnamentedStoneRail')
engine.addEntity(largeOrnamentedStoneRail)
largeOrnamentedStoneRail.setParent(_scene)
const transform12 = new Transform({
    position: new Vector3(12, 0, 8),
    rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
largeOrnamentedStoneRail.addComponentOrReplace(transform12)
const gltfShape6 = new GLTFShape("e7f7a10a-995d-48a7-bc32-68a357f7dfe9/FenceStoneLarge_01/FenceStoneLarge_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
largeOrnamentedStoneRail.addComponentOrReplace(gltfShape6)

const largeOrnamentedStoneRail2 = new Entity('largeOrnamentedStoneRail2')
engine.addEntity(largeOrnamentedStoneRail2)
largeOrnamentedStoneRail2.setParent(_scene)
const transform13 = new Transform({
    position: new Vector3(12, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 0.5)
})
largeOrnamentedStoneRail2.addComponentOrReplace(transform13)
largeOrnamentedStoneRail2.addComponentOrReplace(gltfShape6)

const largeOrnamentedStoneRail3 = new Entity('largeOrnamentedStoneRail3')
engine.addEntity(largeOrnamentedStoneRail3)
largeOrnamentedStoneRail3.setParent(_scene)
const transform14 = new Transform({
    position: new Vector3(4, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
largeOrnamentedStoneRail3.addComponentOrReplace(transform14)
largeOrnamentedStoneRail3.addComponentOrReplace(gltfShape6)

const largeOrnamentedStoneRail4 = new Entity('largeOrnamentedStoneRail4')
engine.addEntity(largeOrnamentedStoneRail4)
largeOrnamentedStoneRail4.setParent(_scene)
const transform15 = new Transform({
    position: new Vector3(9, 0, 3),
    rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
    scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
largeOrnamentedStoneRail4.addComponentOrReplace(transform15)
largeOrnamentedStoneRail4.addComponentOrReplace(gltfShape6)

const woodTile = new Entity('woodTile')
engine.addEntity(woodTile)
woodTile.setParent(_scene)
const transform16 = new Transform({
    position: new Vector3(11, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
woodTile.addComponentOrReplace(transform16)
const gltfShape7 = new GLTFShape("df6bc5c0-5989-4251-8d1f-38edcf9c9beb/FloorBlock_03/FloorBlock_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
woodTile.addComponentOrReplace(gltfShape7)

const woodTile2 = new Entity('woodTile2')
engine.addEntity(woodTile2)
woodTile2.setParent(_scene)
const transform17 = new Transform({
    position: new Vector3(9, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
woodTile2.addComponentOrReplace(transform17)
woodTile2.addComponentOrReplace(gltfShape7)

const woodTile3 = new Entity('woodTile3')
engine.addEntity(woodTile3)
woodTile3.setParent(_scene)
const transform18 = new Transform({
    position: new Vector3(7, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
woodTile3.addComponentOrReplace(transform18)
woodTile3.addComponentOrReplace(gltfShape7)

const woodTile4 = new Entity('woodTile4')
engine.addEntity(woodTile4)
woodTile4.setParent(_scene)
const transform19 = new Transform({
    position: new Vector3(5, 0, 7),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
woodTile4.addComponentOrReplace(transform19)
woodTile4.addComponentOrReplace(gltfShape7)


const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform21 = new Transform({
    position: new Vector3(10, 2, 7),
    rotation: new Quaternion(-5.9889282423531646e-15, -1, 1.1920926823449918e-7, 0),
    scale: new Vector3(2.5, 2.5, 1)
})
nftPictureFrame2.addComponentOrReplace(transform21)


const concreteWallShort = new Entity('concreteWallShort')
engine.addEntity(concreteWallShort)
concreteWallShort.setParent(_scene)
const transform23 = new Transform({
    position: new Vector3(11.007197380065918, 0, 7.249127388000488),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 0.5625)
})
concreteWallShort.addComponentOrReplace(transform23)
const gltfShape8 = new GLTFShape("5daddffb-273d-44c7-acd2-26d262efb82b/Concrete_Wall_Short.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
concreteWallShort.addComponentOrReplace(gltfShape8)

const indicatorArrow = new Entity('indicatorArrow')
engine.addEntity(indicatorArrow)
indicatorArrow.setParent(_scene)
const transform24 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
indicatorArrow.addComponentOrReplace(transform24)

const indicatorArrow2 = new Entity('indicatorArrow2')
engine.addEntity(indicatorArrow2)
indicatorArrow2.setParent(_scene)
const transform25 = new Transform({
    position: new Vector3(8, 0, 6.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
indicatorArrow2.addComponentOrReplace(transform25)

const toolbox = new Entity('toolbox')
engine.addEntity(toolbox)
toolbox.setParent(_scene)
const transform26 = new Transform({
    position: new Vector3(5, 0, 4.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
toolbox.addComponentOrReplace(transform26)

const redButton = new Entity('redButton')
engine.addEntity(redButton)
redButton.setParent(_scene)
const transform27 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
})
redButton.addComponentOrReplace(transform27)


const redButton2 = new Entity('redButton2')
engine.addEntity(redButton2)
redButton2.setParent(_scene)
const transform28 = new Transform({
    position: new Vector3(9.2, 1.5, 6.8),
    rotation: new Quaternion(-5.837282663256806e-15, 1, -1, 0),
    scale: new Vector3(1, 1, 1)
})
redButton2.addComponentOrReplace(transform28)


/**
 * Add a Jacket asset on the scene
 */
const jacketEntity = new Entity("jacketEntity");
const gltfShapeJacket = new GLTFShape(
    "assets/Track_Jacket_HODL_VUITTON/male/TSUB.glb"
);
gltfShapeJacket.visible = false;
jacketEntity.addComponentOrReplace(gltfShapeJacket);
jacketEntity.addComponent(
    new Transform({
        position: new Vector3(8, 1, 7),
        rotation: new Quaternion(
            -5.9889282423531646e-15,
            -1,
            1.1920926823449918e-7,
            0
        ),
    })
);
jacketEntity.setParent(_scene);


const greenButton = new Entity('greenButton')
engine.addEntity(greenButton)
greenButton.setParent(_scene)
const transform29 = new Transform({
    position: new Vector3(9.7, 1.5, 6.8),
    rotation: new Quaternion(-5.837282663256806e-15, 1, -1, 0),
    scale: new Vector3(1, 1, 1)
})
greenButton.addComponentOrReplace(transform29)

const blueButton = new Entity('blueButton')
engine.addEntity(blueButton)
blueButton.setParent(_scene)
const transform30 = new Transform({
    position: new Vector3(10.2, 1.5, 6.8),
    rotation: new Quaternion(-5.837282663256806e-15, 1, -1, 0),
    scale: new Vector3(1, 1, 1)
})
blueButton.addComponentOrReplace(transform30)





const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = {inventory}








const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
script1.init()
script2.init()
script3.init()
script4.init()
script5.init()
script6.init()
script7.init()
script8.init()
script9.init()
script10.init()
script1.spawn(messageBubble, {
    "text": "Welcome to \nthe PUB Shop.",
    "fontSize": 20
}, createChannel(channelId, messageBubble, channelBus))
script2.spawn(galleryInfoPeach, {
    "text": "PUBShop wear your suit\n\nPress:\n\n -red: show/hide jacket\n -green: change color\n - blue: other",
    "fontSize": 5,
    "font": "SF",
    "color": "#000000"
}, createChannel(channelId, galleryInfoPeach, channelBus))
script3.spawn(triggerArea, {
    "enabled": true,
    "onEnter": [{"entityName": "messageBubble", "actionId": "open", "values": {}}],
    "onLeave": [{"entityName": "messageBubble", "actionId": "close", "values": {}}]
}, createChannel(channelId, triggerArea, channelBus))
script4.spawn(radio, {
    "startOn": false,
    "volume": 1,
    "onClickText": "Radio On/Off",
    "onClick": [{"entityName": "radio", "actionId": "toggle", "values": {}}]
}, createChannel(channelId, radio, channelBus))
script5.spawn(nftPictureFrame2, {
    "id": "558536",
    "contract": "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
    "style": "Classic",
    "color": "#FFFFFF",
    "ui": true,
    "uiText": "click to open"
}, createChannel(channelId, nftPictureFrame2, channelBus))
script6.spawn(indicatorArrow, {"active": true}, createChannel(channelId, indicatorArrow, channelBus))
script6.spawn(indicatorArrow2, {"active": false}, createChannel(channelId, indicatorArrow2, channelBus))
script7.spawn(toolbox, {}, createChannel(channelId, toolbox, channelBus))
script8.spawn(redButton2, {
    "onClick": [{
        "entityName": "toolbox",
        "actionId": "print",
        "values": {"message": "Show/hide jacket", "duration": 5, "multiplayer": true}
    }], jacket: gltfShapeJacket
}, createChannel(channelId, redButton2, channelBus))
script9.spawn(greenButton, {
    "onClick": [{
        "entityName": "toolbox",
        "actionId": "print",
        "values": {"message": "changeColor", "duration": 5, "multiplayer": true}
    }]
}, createChannel(channelId, greenButton, channelBus))
script10.spawn(blueButton, {
    "onClick": [{
        "entityName": "toolbox",
        "actionId": "print",
        "values": {"message": "changeOther", "duration": 5, "multiplayer": true}
    }]
}, createChannel(channelId, blueButton, channelBus))