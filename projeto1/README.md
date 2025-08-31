# DonateCrypto

Este projeto é um contrato inteligente Solidity para uma plataforma de doações descentralizada, chamada **DonateCrypto**. Ele permite que qualquer pessoa crie campanhas de arrecadação de fundos e receba doações diretamente em criptomoedas.

> **Desenvolvido como projeto do curso** de desenvolvimento de contratos inteligentes em Solidity.



# BACKEND Smart Contract 

## Funcionalidades

- **Criar campanhas**: Qualquer usuário pode criar uma campanha de doação com título, descrição, vídeo e imagem.
- **Doar para campanhas**: Usuários podem doar qualquer valor em Ether para campanhas ativas.
- **Saque pelo autor**: O autor da campanha pode sacar o valor arrecadado (menos a taxa da plataforma), encerrando a campanha.

## Estrutura do Contrato

- `Campaign`: Estrutura que representa uma campanha, contendo autor, título, descrição, vídeo, imagem, saldo e status de atividade.
- `Donaterypto`: Contrato principal que gerencia campanhas e doações.

## Principais funções

- `addCampaign(string title, string description, string videoUrl, string imageUrl)`: Cria uma nova campanha.
- `donate(uint256 id)`: Permite doações para uma campanha ativa.
- `withdraw(uint256 id)`: Permite que o autor saque o saldo da campanha, descontando a taxa da plataforma.

## Taxa da Plataforma

- A taxa (`fee`) é definida em Wei e descontada do saldo ao realizar o saque.

## Exemplo de Uso

1. **Criar campanha**
    ```solidity
    addCampaign("Ajude a ONG X", "Campanha para alimentar crianças", "https://youtube.com/video", "https://img.com/banner.jpg");
    ```

2. **Doar**
    ```solidity
    donate(1); // Envie ETH junto com a chamada
    ```

3. **Sacar**
    ```solidity
    withdraw(1); // Apenas o autor pode sacar se houver saldo suficiente
    ```

## Requisitos

- Solidity ^0.8.30
- Uma carteira Ethereum (MetaMask, etc.) para interagir com o contrato.

## Observações

- O contrato não possui mecanismos avançados de segurança (como proteção contra reentrância).
- O valor mínimo para saque é maior que a taxa (`fee`).
- Ao sacar, a campanha é automaticamente encerrada.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).



# FRONTEND  dapp 

## Estrutura

```
/app
├── page.js       // página inicial
└── create
    └── page.js   // página para cadastro da campanha
└── services
    └── Web3Service.js   // função de login com a MetMask
    └── ABI.js   // especificação 
```
## Modelagem do FronfEnd 

- Next.js
- Bootstrap


---

*Desenvolvido por UrsulaASobrinho — Projeto do curso de desenvolvimento de contratos inteligentes em Solidity*