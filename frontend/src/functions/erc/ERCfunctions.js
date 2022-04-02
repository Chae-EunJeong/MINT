import { web3 } from './index'

import * as ERC721Transactions from './ERC721Transactions.js'
import * as ERC721Calls from './ERC721Calls.js'
import * as ERC20Transactions from './ERC20Transactions.js'
import * as ERC20Calls from './ERC20Calls.js'

//////////////////////////////////////// ERC721Transactions.js 참고/////////////////////////////////////////////////
// 컨트랙트 배포
export const deployTicketContract = price => ERC721Transactions.deployTicketContract(web3, price)
export const deploySaleContract = mintTicketAddress => ERC721Transactions.deploySaleContract(web3, mintTicketAddress)

// sender에게 tokenURI를 가지는 NFT 티켓 발권
export const mintTicket = (contractAddress, sender, senderPK, tokenURI) =>
  ERC721Transactions.buyTicket(web3, contractAddress, sender, senderPK, tokenURI)

// from으로부터 to로 [tokenID] NFT 티켓 전송
export const transferTicket = (contractAddress, from, to, tokenId) =>
  ERC721Transactions.safeTransferFrom(web3, contractAddress, from, to, tokenId)

export const setSaleTicket = (ticketContractAddress, saleContractAddress) =>
  ERC721Transactions.setSaleTicket(web3, ticketContractAddress, saleContractAddress)
//////////////////////////////////////// ERC721Calls.js 참고///////////////////////////////////////////////////////
// sender의 티켓 수량 파악
export const getTicketAmount = (contractAddress, sender) => ERC721Calls.getBalance(web3, contractAddress, sender)

// sender의 티켓 목록 파악
export const getTicketList = (contractAddress, sender) => ERC721Calls.getTicketList(web3, contractAddress, sender)

//////////////////////////////////////// ERC20Transactions.js 참고/////////////////////////////////////////////////
// from으로부터 to로 [amount] SSF 전송
export const transferSSF = (from, fromPK, to, amount) => ERC20Transactions.transfer(web3, from, fromPK, to, amount)

// operator가 from으로부터 to로 [amount] SSF 전송
export const transferFromSSF = (operatorPK, from, to, amount) =>
  ERC20Transactions.transfer(web3, operatorPK, from, to, amount)

//////////////////////////////////////// ERC20Calls.js 참고///////////////////////////////////////////////////////
//owner가 spender에게 [amount]만큼의 SSF 권한 부여
// export const approveSSF = (ownerPK, spender, amount) => ERC20Calls.approve(web3, ownerPK, spender, amount)

//spender에게 owner의 토큰 중 얼만큼의 권한이 있는지 확인
export const allowanceSSF = (owner, spender) => ERC20Calls.allowance(web3, owner, spender)
