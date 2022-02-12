import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css';
import Faucet from './artifacts/contracts/Faucet.sol/Faucet.json'
import NavBar from './components/NavBar';
import Balance from './components/Balance';
import Transfer from './components/Transfer';
import Footer from './components/Footer';

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

function App() {
  
  const [account, setAccount] = useState('')
  const [connected, setConnection] = useState(false)
  const [newAddress, setNewAddress] = useState('')
  const [contractBalance, setContractBalance] = useState('')
  
  console.log(newAddress);

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
      const contract = new ethers.Contract(contractAddress, Faucet.abi, signer)
      try {
        await contract.transfer(newAddress)
        setNewAddress('')
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
        const convertedBalance = parseInt(balance, 16)
        const ethBalance = convertedBalance/1000000000000000000
        ethBalance.toString()
        console.log(ethBalance, typeof ethBalance);
        setContractBalance(ethBalance)
      } catch (error) {
        console.log(error);
      }
    }
  }

useEffect(() => {
  fetchBalance()
}, [])

  return (
    <div className="App">
        <NavBar connected={connected} onClick={requestAccount} address={account}/>
        <Balance balance={contractBalance}/>
        <Transfer connected={connected} onClick={handleTransfer} newAddress={newAddress} setNewAddress={setNewAddress}/>
        <Footer />
    </div>
  );
}

export default App;
