import { Types } from 'phaser'
import { mintAfterGame } from '../interactions/token'
import { buyItem } from '../interactions/marketplace'

export default class MainScene extends Phaser.Scene {
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  knight: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
  crates: Phaser.Physics.Arcade.StaticGroup
  coinTimer: Phaser.Time.TimerEvent
  score: number = 0
  scoreText: Phaser.GameObjects.Text
  secondsLeft: number = 120
  timeLeftTimer: Phaser.Time.TimerEvent
  timeLeftText: Phaser.GameObjects.Text
  gameOver: boolean = false
  coinsSent: boolean = false

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

    //Set text
    this.scoreText = this.add.text(16, 16, `Bitcoin Bag: ${this.score}`, { fontSize: '32px', color: '#000' })
    this.timeLeftText = this.add.text(16, 66, `${this.secondsLeft} seconds left`, { fontSize: '32px', color: '#f00' })

    //Set timer
    this.coinTimer = this.time.addEvent({
      delay: Phaser.Math.Between(1000, 3000),
      callback: this.generateCoins,
      callbackScope: this,
      repeat: -1
    })

    this.timeLeftTimer = this.time.addEvent({
      delay: 1000,
      callback: this.updateTimeLeft,
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
      coin.disableBody(true, true)
      this.score++
      this.scoreText.setText('Bitcoin Bag: ' + this.score)
    }

    coins.children.iterate(coin => {
      //@ts-ignore
      coin.setBounceY(Phaser.Math.FloatBetween(0.4, 1.5))
    })

    this.physics.add.collider(this.crates, coins)
    this.physics.add.overlap(this.knight, coins, collectCoin, undefined, this)
  }

  updateTimeLeft() {
    if (this.gameOver && !this.coinsSent) {
      mintAfterGame(this.score)
      this.coinsSent = true
    }else{
      this.secondsLeft -= 1
      this.timeLeftText.setText(this.secondsLeft + ' seconds left')
  
      if (this.secondsLeft <= 0) {
        this.physics.pause()
        this.timeLeftText.setText('0 seconds left')
        this.gameOver = true
      }
    }
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
