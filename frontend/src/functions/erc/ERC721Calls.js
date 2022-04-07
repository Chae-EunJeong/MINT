import { typography } from '@mui/system'
import { MINT_ABI, SALE_ABI } from './index'

export async function getBalance(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.balanceOf(sender)
  try {
    const response = await transactionInstance.call()
    return response
  } catch (err) {
    console.log(err)
    return 0
  }
}

export async function getTicketList(web3, contractAddress, sender) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getTicketList(sender)
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    return []
  }
}

export async function getTicketPrice(web3, contractAddress) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getTicketPrice()
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    return false
  }
}
export async function getSaleList(web3, contractAddress) {
  const contractInstance = new web3.eth.Contract(SALE_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.getSaleList()
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    return false
  }
}

export async function tokenURI(web3, contractAddress, tokenId) {
  const contractInstance = new web3.eth.Contract(MINT_ABI, contractAddress)
  const transactionInstance = contractInstance.methods.tokenURI(tokenId)
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    return false
  }
}

export async function MintTicketAddress(web3, saleContractAddress) {
  const contractInstance = new web3.eth.Contract(SALE_ABI, saleContractAddress)
  const transactionInstance = contractInstance.methods.getLinkedContract()
  try {
    const response = await transactionInstance.call()
    return response
  } catch {
    return false
  }
}
