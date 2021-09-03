import { getUserItems } from "../interactions/item";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image("knight", "../../assets/knight.png");
    this.load.image("crate", "../../assets/crate.png");
    this.load.image("background", "../../assets/background.png")

    for(let i = 1; i <= 10; i++){
      this.load.image(`run_frame_${i}`, `../../assets/knight/run/Run (${i}).png`)
      this.load.image(`idle_frame_${i}`, `../../assets/knight/idle/Idle (${i}).png`)
    }

    this.load.image("bitcoin", "../../assets/bitcoin.png");
  }

  create() {
    getUserItems()
    this.scene.start('MainScene')
  }
}