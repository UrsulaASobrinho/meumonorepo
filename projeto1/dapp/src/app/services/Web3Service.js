import Web3, { Wallet } from "web3";
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