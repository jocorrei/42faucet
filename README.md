# 42Chain Faucet

Dapp that sends ETH to the conected account on a ethereum testnet

# Running the Aplication

If you want to test this aplication, clone the repository and run the following:

* Make sure that you have Node.js installed on you machine
* `npm install` to install all the dependencies (hardhat, bootswatch, react-app...)
* `npx hardhat node` to run an ethereum node on your machine. It will automaticaly create 20 accounts on this local blockchain and feed these accounts with 10k ETH (keep this node runnig. To run the rest of the commands do it on another terminal)
* `npx hardhat compile` to compile the smart contract
* `npx hardhat run scripts/deploy.js --network localhost` to deploy the smart contract on your localhost network. This command will return the Contract Address after it is deployed. Copy this address and assign to the constant variable <contractAddress> on the <App.js> file.
* `npm start` to run the React Dapp

# Usage

* Set your metamask to connect to your localhost
* Import an account created when you runned `npx hardhat node`
* Connect to the Dapp using this account
* Send ETH to the contract (the contract address is the returned value on you terminal when you runned `npx hardhat run scripts/deploy.js --network localhost` )
* Copy another address created when you runned `npx hardhat node` and use the Dapp to send ETH to this address (paste this address on the input field and click on "Send")
* The account connected to the Dapp will pay for the transaction gas and the other account will receive 0.1 ETH. If you want, you can import this account on you metamask to make sure that it received the ETH.

# Upcoming updates

The idea is that people could use this Dapp to interact with a contract that sends free ETH to the address provided. The account that trigged the contract (the one that payed for the gas fees) would receive a 42Chain token minted by us. This funcionality is still not implemented, but it will as soon as possible
