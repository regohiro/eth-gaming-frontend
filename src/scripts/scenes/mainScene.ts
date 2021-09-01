export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    console.log('game is setting up')

    //Create the knight
    var knight = this.physics.add.sprite(100, 100, 'knight')
    knight.body.setSize(450, 600, true)
    knight.scaleX = 0.2
    knight.scaleY = knight.scaleX

    //Create the crates
    var crates = this.physics.add.staticGroup()
    for (let i = 0; i < 8; i++) {
      let x = i * 80 + 40;
      crates.create(x, 460, 'crate')
    }
    this.physics.add.collider(crates, knight);
  }

  update() {}
}
