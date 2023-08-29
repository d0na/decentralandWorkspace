import * as ui from "@dcl/ui-scene-utils";
import * as bc from "../../blockchain/getJacketMnt";
import { PUB_USER } from "blockchain/artifacts/addresses";

export type Props = {
  onClick?: Actions;
  pippo?: (a) => void;
};

export default class Button implements IScript<Props> {
  clip = new AudioClip("76d3a347-02b1-4c74-bbf3-7787ede6a3b1/sounds/click.mp3");

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

    button.addComponent(
      new GLTFShape(
        "76d3a347-02b1-4c74-bbf3-7787ede6a3b1/models/Green_Button.glb"
      )
    );

    const animator = new Animator();
    const clip = new AnimationState("trigger", { looping: false });
    animator.addClip(clip);
    button.addComponent(animator);

    button.addComponent(
      //       new OnPointerDown(
      //         () => {
      //           const pushAction = channel.createAction('push', {})
      //           channel.sendActions([pushAction])

      //             /** Radio Button
      //              * https://github.com/decentraland-scenes/Smart-wearable-radio/blob/main/src/game.ts
      //              * */
      //             const colorUI = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, null, null)

      //             colorUI.addText('Select the color for the jacket :', 0, 170, Color4.White(), 25)

      //             colorUI.addText('Choose your preference', 0, 150, Color4.Gray(), 20)
      // // colorUI.addSwitch(
      // //     'Radio On',
      // //     -170,
      // //     -130,
      // //     () => {
      // //     },
      // //     () => {
      // //     },
      // //     ui.SwitchStyles.SQUAREGREEN
      // // )

      //             const option1 = colorUI.addCheckbox(
      //                 'Green',
      //                 -130,
      //                 100,
      //                 () => {
      //                     option2.uncheck()
      //                     // station3.uncheck()
      //                     // station4.uncheck()
      //                     // playRadio(true, radios.Rave.value)
      //                 },
      //                 () => {
      //                     // playRadio(false)
      //                 }
      //             )

      //             const option2 = colorUI.addCheckbox(
      //                 'Blue',
      //                 -130,
      //                 70,
      //                 () => {
      //                     option1.uncheck()
      //                     //
      //                     // station4.uncheck()
      //                     // playRadio(true, radios.Delta.value)
      //                 },
      //                 () => {
      //                     // playRadio(false)
      //                 }
      //             )

      //           Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, (e) => {
      //             if (colorUI) {
      //               if (!colorUI.background.visible) {
      //                 colorUI.show()
      //               } else {
      //                 colorUI.hide()
      //               }
      //             }
      //           })

      //             /**
      //              *  Codice per inserire un input
      //               */

      //           // const canvas = new UICanvas()
      //           //
      //           // const textInput = new UIInputText(canvas)
      //           // textInput.width = "80%"
      //           // textInput.height = "25px"
      //           // textInput.vAlign = "bottom"
      //           // textInput.hAlign = "center"
      //           // textInput.fontSize = 10
      //           // textInput.placeholder = "Write your color here:"
      //           // textInput.positionY = "200px"
      //           // textInput.isPointerBlocker = true
      //           //
      //           // textInput.onTextSubmit = new OnTextSubmit((x) => {
      //           //   const text = new UIText(textInput)
      //           //   text.value = "Chosen color is: " + x.text
      //           //   text.width = "100%"
      //           //   text.height = "20px"
      //           //   text.vAlign = "top"
      //           //   text.hAlign = "left"
      //           // })

      //             /** fine */
      //         },
      //         {
      //           button: ActionButton.POINTER,
      //           hoverText: 'Press',
      //           distance: 6,
      //         }
      //       )
      //     )

      new OnPointerDown(
        async () => {
          const pushAction = channel.createAction("push", {});
          channel.sendActions([pushAction]);
          const { providerInstance, requestManager } = await executeTask(
            async () => {
              try {
                return bc.getBlockchainManager();
              } catch (error) {
                log("Blockchain error ---> " + error.toString());
              }
            }
          );
          const colorUI = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, null, null)
          colorUI.addText('Change the color for the jacket', 0, 170, Color4.White(), 25)
          colorUI.addText('This is Mario\'s tailoring, choose a color', 0, 150, Color4.Gray(), 20)

          colorUI.addButton(
            'Yellow',
            -100,
            -0,
            async () => {
              const changeColor = await executeTask(async () => {
                try {
                  const jacketAssetContract = await bc.getJacketAssetContract(
                    requestManager
                  );
                  return await jacketAssetContract.changeColor("yellow", "mario",{from: PUB_USER});
                } catch (error) {
                  log("JacektMnt error ---> " + error.toString());
                }
              });
              
              log('Yellow')
              colorUI.hide()
            },
            ui.ButtonStyles.ROUNDWHITE
          )
          
          colorUI.addButton(
            'Green',
            -100,
            -50,
            async () => {
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
              colorUI.hide()
            },
            ui.ButtonStyles.ROUNDWHITE
          )

          colorUI.addButton(
            'Red',
            -100,
            -100,
            async () => {
              const changeColor = await executeTask(async () => {
                try {
                  const jacketAssetContract = await bc.getJacketAssetContract(
                    requestManager
                  );
                  return await jacketAssetContract.changeColor("red", "mario",{from: PUB_USER});
                } catch (error) {
                  log("JacektMnt error ---> " + error.toString());
                }
              });
              colorUI.hide()
            },
            ui.ButtonStyles.ROUNDWHITE
          )
          /** fine */
        },
        {
          button: ActionButton.POINTER,
          hoverText: "Press",
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
  }
}
