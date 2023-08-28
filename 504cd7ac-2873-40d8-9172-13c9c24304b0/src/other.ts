import * as ui from "@dcl/ui-scene-utils";
import * as bc from "../../blockchain/getJacketMnt";

export type Props = {
  onClick?: Actions;
};

export default class Button implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity();
    button.setParent(host);

    button.addComponent(
      new GLTFShape(
        "504cd7ac-2873-40d8-9172-13c9c24304b0/models/Blue_Button.glb"
      )
    );

    button.addComponent(
      new OnPointerDown(
        () => {
          // Button pressed logic
          const pushAction = channel.createAction("push", {});
          channel.sendActions([pushAction]);
        },
        {
          button: ActionButton.POINTER,
          hoverText: "Press",
          distance: 6,
        }
      )
    );
    channel.handleAction("push", async ({ sender }) => {
      const { providerInstance, requestManager } = await executeTask(
        async () => {
          try {
            return bc.getBlockchainManager();
          } catch (error) {
            log("Blockchain error ---> " + error.toString());
          }
        }
      );

      const JacketMNTContract = await executeTask(async () => {
        try {
          return await bc.getJacketMncContract(requestManager);
        } catch (error) {
          log("Blockchain error ---> " + error.toString());
        }
      });

      const model = await executeTask(async () => {
        try {
          const jacketAssetContract = await bc.getJacketAssetContract(
            requestManager
          );
          return await jacketAssetContract.get3DModel();
        } catch (error) {
          log("JacektMnt error ---> " + error.toString());
        }
      });

      if (sender === channel.id) {
        channel.sendActions([
          {
            entityName: "toolbox",
            actionId: "print",
            values: {
              message: "JacketModel " + model + "\n",
              duration: 5,
              multiplayer: true,
            },
          },
        ]);
      }
    });
  }
}
