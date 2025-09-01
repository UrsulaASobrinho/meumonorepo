import Web3 from "web3";
import ABI from "./ABI";
//import { contract } from "web3/lib/commonjs/eth.exports";
//import { contract } from "web3/lib/commonjs/eth.exports";


const CONTRACT_ADDRESS = "0x2793c2ee8f5f57b9016885933fe401d39d49094d";

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
    const contract = getContract();
    
    //chamada da funcao do smartcontract
    //addCampaign -> nome do metodo dentro do smatcontract 
    // (campos/variaveis)
    //.send envio para a blockchain
   
    //return contract.methods.addCampaign(campaign.title, campaign.description, campaign.videoUrl, campaign.imageUrl).send();
    return contract.methods.addCampaign(campaign.title, campaign.description, campaign.videoUrl, campaign.imageUrl).send();
}

//funcao para pegar o ultimo Id da ampanha cadastrada
export async function getLastCampaignId(params) {
    const contract = getContract();
   
    //pega o nome da variavel publica no smatcontract
    //.call faz a chamada para obter a inofrmação
    return contract.methods.nextId().call();
    
}

export async function getCampaign(id){
    const contract = getContract();
    return contract.methods.campaings(id).call();
}