// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./EthMintTicket.sol";

contract EthSaleTicket {
   
    EthMintTicket public mintTicketAddress;

    constructor (address _mintTicketAddress) {
        mintTicketAddress = EthMintTicket(_mintTicketAddress);
    }

    mapping(uint256 => uint256) public ticketPrices;
    
    uint256[] public onSaleTicketArray;

    function setForSaleTicket(uint256 _tokenId, uint256 _price) public {
       
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);
        require(ticketOwner == msg.sender, "Caller is not ticket owner.");
        require(ticketPrices[_tokenId] == 0, "This ticket is already on sale.");
        require(_price > 0, "Price is zero or lower.");

        ticketPrices[_tokenId] = _price;
        onSaleTicketArray.push(_tokenId);
    }

    function purchaseTicket(uint256 _tokenId) public payable {
        uint256 price = ticketPrices[_tokenId];
        address ticketOwner = mintTicketAddress.ownerOf(_tokenId);

        require(price > 0, "Ticket not sale.");
        require(price <= msg.value, "Caller sent lower than price.");
        require(ticketOwner != msg.sender, "Caller is ticket owner.");
        
        payable(ticketOwner).transfer(msg.value);
        mintTicketAddress.safeTransferFrom(ticketOwner, msg.sender, _tokenId);
        ticketPrices[_tokenId] = 0;

        for (uint256 i = 0; i < onSaleTicketArray.length; i++) {
            if (ticketPrices[onSaleTicketArray[i]] == 0) {
                onSaleTicketArray[i] = onSaleTicketArray[onSaleTicketArray.length - 1];  // 맨 뒤 index를 방금 제거한 토큰의 자리로 옮김
                onSaleTicketArray.pop();
            }
        }
    }

    // 해당 콘서트 티켓 중 판매 등록된 토큰 아이디 등록 순으로 반환
    function getSaleList() public view returns (uint256[] memory) {  
         
        return onSaleTicketArray;
    }

    // 해당 콘서트 티켓 중 판매 등록된 수 반환
    function getOnSaleTicketArrayLength() view public returns (uint256) {
        return onSaleTicketArray.length;
    }

    function getTicketPrice(uint256 _tokenId) view public returns(uint256) {
        return ticketPrices[_tokenId];
    }
}
