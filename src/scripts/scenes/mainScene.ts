export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    console.log("game is setting up");
    var knight = this.physics.add.sprite(100, 100, "knight");
    knight.scaleX = 0.2;
    knight.scaleY = knight.scaleX;
  }

  update() {
    
  }
}
