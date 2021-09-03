import { ethers } from 'ethers'
import { Marketplace__factory } from '../../abis/types/'
import { toBN } from '../../utils/bigNumber'

const marketplaceAddr = '0xa63d1C569987Baa36907884AdddB16dA922Fa192'

export async function buyItem(id: number) {
  //@ts-ignore
  const { ethereum } = window
  const provider = new ethers.providers.Web3Provider(ethereum)
  await provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()

  const marketplace = Marketplace__factory.connect(marketplaceAddr, signer)

  let value = toBN(10).pow(14)
  switch (id) {
    case 1:
      value = value.mul(1)
      break
    case 2:
      value = value.mul(2)
      break
    case 3:
      value = value.mul(3)
      break
    default:
      value = value.mul(5)
  }

  const tx = await marketplace.buyItem(id, { value })
  await tx.wait()
}
