import * as ui from "@dcl/ui-scene-utils";

export type Props = {
  onClick?: Actions
}

export default class Button implements IScript<Props> {
  clip = new AudioClip('504cd7ac-2873-40d8-9172-13c9c24304b0/sounds/click.mp3')

  init() {}

  play(entity: Entity) {
    const source = new AudioSource(this.clip)
    entity.addComponentOrReplace(source)
    source.playing = true

    const animator = entity.getComponent(Animator)
    const clip = animator.getClip('trigger')
    clip.stop()
    clip.play()
  }

  spawn(host: Entity, props: Props, channel: IChannel) {
    const button = new Entity()
    button.setParent(host)

    button.addComponent(new GLTFShape('504cd7ac-2873-40d8-9172-13c9c24304b0/models/Blue_Button.glb'))

    const animator = new Animator()
    const clip = new AnimationState('trigger', { looping: false })
    animator.addClip(clip)
    button.addComponent(animator)

    button.addComponent(
      new OnPointerDown(
        () => {
          const pushAction = channel.createAction('push', {})
          channel.sendActions([pushAction])


          /** Radio Button
           * https://github.com/decentraland-scenes/Smart-wearable-radio/blob/main/src/game.ts
           * */
          const colorUI = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE, null, null)

          colorUI.addText('Select your favorite tailor :', 0, 170, Color4.White(), 25)

          colorUI.addText('Choose your preference', 0, 150, Color4.Gray(), 20)
// colorUI.addSwitch(
//     'Radio On',
//     -170,
//     -130,
//     () => {
//     },
//     () => {
//     },
//     ui.SwitchStyles.SQUAREGREEN
// )

          const option1 = colorUI.addCheckbox(
              'PUB ',
              -130,
              100,
              () => {
                option2.uncheck()
                // station3.uncheck()
                // station4.uncheck()
                // playRadio(true, radios.Rave.value)
              },
              () => {
                // playRadio(false)
              }
          )

          const option2 = colorUI.addCheckbox(
              'GUCCI (PUB affiliated)',
              -130,
              70,
              () => {
                option1.uncheck()
                //
                // station4.uncheck()
                // playRadio(true, radios.Delta.value)
              },
              () => {
                // playRadio(false)
              }
          )

          Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, (e) => {
            if (colorUI) {
              if (!colorUI.background.visible) {
                colorUI.show()
              } else {
                colorUI.hide()
              }
            }
          })

        },
        {
          button: ActionButton.POINTER,
          hoverText: 'Press',
          distance: 6,
        }
      )
    )

    channel.handleAction('push', ({ sender }) => {
      this.play(button)

      if (sender === channel.id) {
        channel.sendActions(props.onClick)
      }
    })
  }
}
