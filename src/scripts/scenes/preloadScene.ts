export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image("knight", "../../assets/knight.png");
  }

  create() {
    this.scene.start('MainScene')
  }
}
