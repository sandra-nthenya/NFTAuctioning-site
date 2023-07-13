# Summary

The auctioning website provides a platform for users to effortlessly upload their unique and valuable Non-Fungible Tokens (NFTs), which are digital assets with exclusive properties. These NFTs can then be put up for auction, enabling potential buyers to acquire them using cryptocurrencies as a medium of exchange. The underlying infrastructure of the website operates on a smart contract, which securely stores and manages all the relevant data. This intelligent contract not only ensures the integrity and transparency of the auctioning process but also facilitates seamless monitoring and oversight. This pioneering project is designed to embrace the decentralized nature of blockchain technology, offering a mode of auctioning that is independent of any central authority. By adopting a decentralized approach, the platform enables users to engage in the auctioning of their digital products in a manner that aligns with the emerging trends and advancements within the blockchain realm.

# Launching Project

-Clone the project 
Windows 7+ - git clone https://github.com/Kodhe-coder/NFTAuctioning-site
Linux - sudo git clone https://github.com/Kodhe-coder/NFTAuctioning-site
Mac - git clone https://github.com/Kodhe-coder/NFTAuctioning-site

Open the folder with any editor but ideally use of VS Code is recommended.

In terminal: 
```shell
npm init
```

# Install hardhat

->Module which helps in initiallizing dummy ethereum contracts
```shell
npm install --save-dev hardhat
```
# Install web3
```shell
npm install web3
```
# Install openzeppelin

->A library for secure smart contract development
```shell
npm i @openzeppelin/contracts
```

# Install ipfs client

->This is where the nfts will be uploaded
```shell
npm i ipfs-http-client
```
sign up at infura.io - create a project - put it under IPFS - at the API Key screen, enable dedicated gateways and create a subdomain
@NFTMarketpLaceContext.js line 8 - 14, ensure you place your project id and subdomain where necessary
@next.config.js ensure you change the domains to match the one you created at infura.io

# Install axios

->Allows us to use api requests
```shell
npm i axios
```

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

```shell1              shell2              shell3
npm run dev         npx hardhat node     npx hardhat run scripts/deploy.js
```
