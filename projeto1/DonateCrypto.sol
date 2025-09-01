// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


struct Campaign {
 address  author;
 string   title;
 string   description;
 string   videoUrl;
 string   imageUrl;
 uint256  balance;
 bool     active;
}

contract DonateCrypto{

    uint256 public fee = 100;  //taxa da plataforma  *wei* é a menor parte indivisível da moeda nativa do Ethereum, Ether
    uint256 public nextId =0;
    mapping ( uint256 => Campaign ) public campaings;  //id==>campaing

    //calldata -> gravar temporariamente na memoria
    function addCampaign(
        string calldata  title,
        string  calldata description,
        string  calldata videoUrl,
        string  calldata  imageUrl
    )  public {
        Campaign memory newCampaign;
        newCampaign.title = title;
        newCampaign.description = description;
        newCampaign.imageUrl = imageUrl;
        newCampaign.videoUrl = videoUrl;
        newCampaign.active = true;
        newCampaign.author = msg.sender;

        nextId++;
        campaings[nextId] = newCampaign;

    }

    function donate(uint256 id) public payable{

        require(msg.value >0, "You must send a donation value >0");
        require(campaings[id].active == true, "Cannot donate to tiis donate");

        campaings[id].balance += msg.value;
    }

    function withdraw(uint256 id) public{
        Campaign memory campaign = campaings[id];
        require(campaign.author == msg.sender, "You do not permission");
        require(campaign.active == true, "This campaign is closed");
        require(campaign.balance > fee, "This campaign does not have enough balance");

    
        address payable recipient = payable(campaign.author); 
        recipient.call{value: campaign.balance - fee}("");

        campaings[id].active = false;
    }



}