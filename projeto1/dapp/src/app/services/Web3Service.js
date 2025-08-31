import Web3 from "web3";
import ABI from "./ABI";
import { contract } from "web3/lib/commonjs/eth.exports";

const CONTRACT_ADDRESS = "";

export async function doLogin(){
  
    if(!window.ethereum) throw new Error("MetaMask não encontrada!");
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts(); //quando faz essa chamada a carteira salta e pedi confirmação
   
    //se nao tem cartera ou array de carteira vazio
    if(!accounts || !accounts.length) throw new Error("Carteira não autorizada!");
    
    //armazenar no navegador wallet uma variavel e o valor
    localStorage.setItem("wallet", accounts[0]);
    return accounts[0];

}

//esta funcao só configura a comunicação com o contrato
function getContract(){
    const web3 = new Web3(window.ethereum);
    const from = localStorage.getItem("wallet"); //pegar quem esta fazendo a chamada
    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {from});

}

export async function addCampaign(campaign) {
    const Contract = getContract();
    
    //chamada da funcao do smartcontract
    //addCampaign -> nome do metodo dentro do smatcontract 
    // (campos/variaveis)
    //.send envio para a blockchain
    return contract.methods.addCampaign(campaign.title, campaign.description, campaign.videoUrl, campaign.imageUrl).send();

}