import * as bc from "../../blockchain/getJacketMnt";

export type Props = {
  onClick?: Actions;
  jacket?: GLTFShape;
};

export default class Jacket implements IScript<Props> {
  clip = new AudioClip("jacket/sounds/click.mp3");

  init() {}

  play(entity: Entity) {
    const source = new AudioSource(this.clip);
    entity.addComponentOrReplace(source);
    source.playing = true;

    const animator = entity.getComponent(Animator);
    const clip = animator.getClip("trigger");
    clip.stop();
    clip.play();
  }

  async spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity();
    button.setParent(host);

    function updateJacket(values) {
      let jacketAsset;
      log("Function Update jacket", values);

      switch (values) {
        case "greenJacket": {
          jacketAsset = "armored_jacket-green";
          break;
        }
        case "redJacket": {
          jacketAsset = "armored_jacket-red";
          break;
        }
        default:
          jacketAsset = "armored_jacket-grey";
      }
      button.removeComponent(GLTFShape);
      log("Update jacket with", jacketAsset);

      button.addComponent(
        new GLTFShape("jacket/models/" + jacketAsset + ".glb")
      );
    }

    async function getJacketModel3d() {
      const { providerInstance, requestManager } = await executeTask(
        async () => {
          try {
            return bc.getBlockchainManager();
          } catch (error) {
            log("Blockchain error ---> " + error.toString());
          }
        }
      );

      const model = await executeTask(async () => {
        try {
          const jacketAssetContract = await bc.getJacketAssetContract(
            requestManager
          );
          const a = await jacketAssetContract.getModel3d();
          log("Retrieved model3d: " + a);
          return a;
        } catch (error) {
          log("JacektMnt error ---> " + error.toString());
        }
      });
      return model;
    }

    const jacketGltfShape = new GLTFShape(
      //https://sketchfab.com/3d-models/hooded-jacket-562280813fa74612a89369d4b791e011
      "jacket/models/armored_jacket-grey.glb",
      // "jacket/models/TSUB-red.glb",
      // "jacket/models/xmash/M_uBody_gacCoat.glb"
      // "jacket/models/xmash/F_uBody_gacCoat.glb"
      // "jacket/models/Track_Jacket_HODL_VUITTON/male/TSUB.glb"
      // '89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/models/Red_Button.glb'
    );
    //   jacketGltfShape.withCollisions = true;
    jacketGltfShape.isPointerBlocker = false;

    jacketGltfShape.visible = true;
    button.addComponent(jacketGltfShape);

    // const model = await getJacketModel3d();
    // updateJacket(model);

    channel.handleAction("update", async ({ sender }) => {
      const model = await getJacketModel3d();
      updateJacket(model);
      if (sender === channel.id) {
        channel.sendActions(props.onClick);
      }
    });
  }
}
