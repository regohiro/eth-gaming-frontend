import { ethers } from 'ethers'
import { GameItem__factory } from '../../abis/types'
import { fromBN } from '../../utils/bigNumber'

const itemAddr = '0xb5f5E338c61C6502e59fa2E302f7392672A9a40b'

export async function getUserItems() {
  //@ts-ignore
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  await provider.send('eth_requestAccounts', [])
  const account = await provider.getSigner().getAddress()
  const gameItem = GameItem__factory.connect(itemAddr, provider)

  const itemsBalance = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    const itembalance = await gameItem.balanceOf(account, i+1);
    itemsBalance[i] = fromBN(itembalance);
  }

  const coinGenerationIntervalMultiplier = Math.pow(0.9, itemsBalance[0]);
  const playerSpeedMultiplier = Math.pow(1.1, itemsBalance[1]);
  const gameSecondMultiplier = Math.pow(1.1, itemsBalance[1]);

  return {
    coinGenerationIntervalMultiplier, playerSpeedMultiplier, gameSecondMultiplier
  }

}