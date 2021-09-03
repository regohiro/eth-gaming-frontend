import { ethers } from 'ethers'
import { GameToken__factory } from '../../abis/types'

const tokenAddr = '0xd93Bc3E68b80B09D943282Ef9EaDdB4a31D2580B'

export async function mintAfterGame(amount: number) {
  //@ts-ignore
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  const token = GameToken__factory.connect(tokenAddr, signer)
  const tx = await token.mint(await signer.getAddress(), amount)
  await tx.wait()
}