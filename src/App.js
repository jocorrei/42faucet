import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Faucet from './artifacts/contracts/Faucet.sol/Faucet.json'
import Connected from './components/Connected';

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {
  
  const [account, setAccount] = useState('')
  const [connected, setConnection] = useState(false)
  
  const requestAccount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections  
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const signerAccount = await signer.getAddress()
    setAccount(signerAccount)
    setConnection(true)
    console.log("Account:", signerAccount);

  }

  const handleTransfer = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner();
      const signerAccount = await signer.getAddress()
      const contract = new ethers.Contract(contractAddress, Faucet.abi, signer)
      try {
        await contract.transfer(signerAccount)
      } catch (error) {
        console.log(error);
      }
    }
  }

  const fetchBalance = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(contractAddress, Faucet.abi, provider)
      try {
        console.log(contract);
        const data = await contract.getbalance()
        const balance = data._hex
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <button onClick={fetchBalance}> fetch balance </button>
          <button onClick={handleTransfer}>Transfer</button>
          <Connected adress={account} onClick={requestAccount}></Connected>
        </div>
      </header>
    </div>
  );
}

export default App;
