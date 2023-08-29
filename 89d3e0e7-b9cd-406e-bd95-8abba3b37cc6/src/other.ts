import * as ui from "@dcl/ui-scene-utils";
import * as bc from "../../blockchain/getJacketMnt";
import { PUB_ONWER, PUB_USER } from "blockchain/artifacts/addresses";

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
        "89d3e0e7-b9cd-406e-bd95-8abba3b37cc6/models/Red_Button.glb"
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

      const mintResp = await executeTask(async () => {
        try {
          return await JacketMNTContract.mint(PUB_USER, {
            from: PUB_ONWER,
          })
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
              message: "Jacket MINT " + mintResp + "\n",
              duration: 5,
              multiplayer: true,
            },
          },
        ]);
      }
    });
  }
}
