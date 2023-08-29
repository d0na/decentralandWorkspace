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

  spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity();
    button.setParent(host);

    const jacketGltfShape = new GLTFShape(
      //https://sketchfab.com/3d-models/hooded-jacket-562280813fa74612a89369d4b791e011
      "jacket/models/armored_jacket-grey.glb"
      // "jacket/models/Track_Jacket_HODL_VUITTON/male/TSUB.glb"
      // '89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/models/Red_Button.glb'
    );
    //   jacketGltfShape.withCollisions = true;
    jacketGltfShape.isPointerBlocker = false;

    jacketGltfShape.visible = true;
    button.addComponent(jacketGltfShape);

    const animator = new Animator();
    const clip = new AnimationState("trigger", { looping: false });
    animator.addClip(clip);
    button.addComponent(animator);

    button.addComponent(
      new OnPointerDown(
        () => {
          log("Clicked red button!", props.jacket);
          // jacketGltfShape.visible = !jacketGltfShape.visible

          const pushAction = channel.createAction("push", {});
          channel.sendActions([pushAction]);
        },
        {
          button: ActionButton.POINTER,
          hoverText: "Get Werable",
          distance: 6,
        }
      )
    );

    channel.handleAction("push", ({ sender }) => {
      this.play(button);

      if (sender === channel.id) {
        channel.sendActions(props.onClick);
      }
    });

    channel.handleAction("update", ({ sender, values }) => {
      log("Update jacket", values);
      let jacketAsset;

      switch (values["asset"]) {
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

      if (sender === channel.id) {
        const jacketGltfShape = new GLTFShape(
          "jacket/models/armored_jacket-red.glb"
        );

        channel.sendActions(props.onClick);
      }
    });
  }
}
