import * as ui from "@dcl/ui-scene-utils";
import * as bc from "../../blockchain/getJacketMnt";
import { PUB_USER } from "blockchain/artifacts/addresses";

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
        "76d3a347-02b1-4c74-bbf3-7787ede6a3b1/models/Green_Button.glb"
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

      const changeColor = await executeTask(async () => {
        try {
          const jacketAssetContract = await bc.getJacketAssetContract(
            requestManager
          );
          return await jacketAssetContract.changeColor("green", "mario",{from: PUB_USER});
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
              message: "JacketModel " + changeColor + "\n",
              duration: 5,
              multiplayer: true,
            },
          },
        ]);
      }
    });
  }
}
