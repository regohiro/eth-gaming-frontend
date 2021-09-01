import { Types } from 'phaser'

export default class MainScene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  knight: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  crates: Phaser.Physics.Arcade.StaticGroup
  coinTimer: Phaser.Time.TimerEvent
  score: number = 0

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    //Background image
    this.add.image(300, 150, 'background')

    //Create the knight
    this.knight = this.physics.add.sprite(100, 100, 'knight')
    this.knight.body.setSize(200, 600, true)
    this.knight.scaleX = 0.15
    this.knight.scaleY = this.knight.scaleX

    //Create the crates
    this.crates = this.physics.add.staticGroup()

    //Floor
    for (let i = 0; i < 6; i++) {
      let x = i * 80 + 40
      this.crates.create(x, 460, 'crate')
    }
    this.crates.create(740, 460, 'crate')

    //Floating
    this.crates.create(440, 360, 'crate')
    this.crates.create(480, 260, 'crate')
    this.crates.create(280, 260, 'crate')
    this.crates.create(180, 220, 'crate')
    this.crates.create(670, 370, 'crate')
    this.crates.create(600, 370, 'crate')
    this.crates.create(620, 120, 'crate')

    //Create animations
    let runningFrames: Array<Types.Animations.AnimationFrame> = []
    let idleFrames: Array<Types.Animations.AnimationFrame> = []
    for (let i = 0; i < 10; i++) {
      runningFrames.push({
        key: `run_frame_${i + 1}`
      })
      idleFrames.push({
        key: `idle_frame_${i + 1}`
      })
    }

    this.anims.create({
      key: 'knight_run',
      frames: runningFrames,
      frameRate: 10,
      repeat: 1
    })

    this.anims.create({
      key: 'knight_idle',
      frames: idleFrames,
      frameRate: 10,
      repeat: 1
    })

    //Setup collider
    this.physics.add.collider(this.crates, this.knight)

    //Setup cursor
    this.cursors = this.input.keyboard.createCursorKeys()

    //Set timer
    this.coinTimer = this.time.addEvent({
      delay: Phaser.Math.Between(1000, 3000),
      callback: this.generateCoins,
      callbackScope: this,
      repeat: -1
    })
  }

  generateCoins() {
    let coins = this.physics.add.group({
      key: 'bitcoin',
      repeat: 1,
      setXY: {
        x: Phaser.Math.Between(0, 800),
        y: -100,
        stepX: Phaser.Math.Between(30, 100)
      }
    })

    const collectCoin = (
      knight: Types.Physics.Arcade.GameObjectWithBody,
      coin: Types.Physics.Arcade.GameObjectWithBody
    ) => {
      //@ts-ignore
      coin.disableBody(true, true);
      this.score++;
      console.log(`Score: ${this.score}`);
    }

    coins.children.iterate(coin => {
      //@ts-ignore
      coin.setBounceY(Phaser.Math.FloatBetween(0.4, 1.5))
    })

    this.physics.add.collider(this.crates, coins)
    this.physics.add.overlap(this.knight, coins, collectCoin, undefined, this)
  }

  update() {
    if (this.cursors.left.isDown) {
      this.knight.setVelocityX(-200)
      this.knight.play('knight_run', true)
      this.knight.flipX = true
    } else if (this.cursors.right.isDown) {
      this.knight.setVelocityX(200)
      this.knight.play('knight_run', true)
      this.knight.flipX = false
    } else {
      this.knight.setVelocityX(0)
      this.knight.play('knight_idle', true)
    }

    if (this.cursors.space.isDown && this.knight.body.touching.down) {
      this.knight.setVelocityY(-500)
    }
  }
}
