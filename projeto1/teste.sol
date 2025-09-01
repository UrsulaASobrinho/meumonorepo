// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

struct Campaign {
    address author; // << AQUI ESTÁ A CORREÇÃO
    string title;
    string description;
    string videoUrl;
    string imageUrl;
    uint256 balance;
    bool active;
}

contract DonateCrypto{

    uint256 public fee = 100; //taxa da plataforma *wei*
    uint256 public nextId = 0;
    mapping (uint256 => Campaign) public campaings;

    function addCampaign(
        string calldata title,
        string calldata description,
        string calldata videoUrl,
        string calldata imageUrl
    ) public {
        nextId++;
        campaings[nextId] = Campaign({
            title: title,
            description: description,
            videoUrl: videoUrl,
            imageUrl: imageUrl,
            active: true,
            author: msg.sender, // << AQUI ESTÁ A CORREÇÃO
            balance: 0
        });
    }

    function donate(uint256 id) public payable{
        require(msg.value > 0, "You must send a donation value > 0");
        require(campaings[id].active == true, "Cannot donate to this campaign");

        campaings[id].balance += msg.value;
    }

    function withdraw(uint256 id) public {
        require(campaings[id].author == msg.sender, "You do not have permission"); // << AQUI ESTÁ A CORREÇÃO
        require(campaings[id].active == true, "This campaign is closed");
        require(campaings[id].balance > fee, "This campaign does not have enough balance");

        // Checks-Effects-Interactions Pattern
        uint256 amountToWithdraw = campaings[id].balance - fee;
        campaings[id].balance = 0; // Zera o saldo
        campaings[id].active = false; // Fecha a campanha

        // Interação segura
        (bool success, ) = payable(msg.sender).call{value: amountToWithdraw}("");
        require(success, "Failed to send Ether");
    }

}