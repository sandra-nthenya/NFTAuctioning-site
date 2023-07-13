# NFT MarketPlace

An auctioning website allowing for users to upload their NFTs and to auction them to be purchased by use of cryptocurrency
All data is stored within the smart contract, to allow for easy monitoring

# Launching Project

Clone the project - git clone https://github.com/Kodhe-coder/NFTAuctioning-site

Open the folder with any editor but ideally use of VS Code is recommended.

In terminal: npm init

# Install hardhat

->Module which helps in initiallizing dummy ethereum contracts
npm install --save-dev hardhat

# Install web3

npm install web3

# Install openzeppelin

->A library for secure smart contract development
npm i @openzeppelin/contracts

# Install ipfs client

->This is where the nfts will be uploaded
npm i ipfs-http-client
sign up at infura.io - create a project - put it under IPFS - at the API Key screen, enable dedicated gateways and create a subdomain
@NFTMarketpLaceContext.js line 8 - 14, ensure you place your project id and subdomain where necessary
@next.config.js ensure you change the domains to match the one you created at infura.io

# Install axios

->Allows us to use api requests
npm i axios

# Initializing the HardHat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

"npx hardhat node" and "npx hardhat run scripts/deploy.js --network localhost" should run on separate terminals
After deploying "npx hardhat node"
--> Connect metamask with the localhost url birthed after running command
-->Import an account in metamask using the private keys of the ethereum accounts created by hardhat

# To Initialize Project

```shell1 shell2              shell3
npm run dev         npx hardhat node     npx hardhat run scripts/deploy.js
```
