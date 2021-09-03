import 'phaser'
import { buyItem } from './interactions/marketplace'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'

const DEFAULT_WIDTH = 800
const DEFAULT_HEIGHT = 500

const config = {
  type: Phaser.AUTO,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 500 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
document.getElementById('btn1')?.addEventListener("click", async () => {
  await buyItem(1);
})
document.getElementById('btn2')?.addEventListener("click", async () => {
  await buyItem(2);
})
document.getElementById('btn3')?.addEventListener("click", async () => {
  await buyItem(3);
})