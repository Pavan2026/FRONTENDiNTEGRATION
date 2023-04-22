import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [contractInstance, setContractInstance] = useState(null);
  const [newTokenName, setNewTokenName] = useState('');
  const [newTokenSymbol, setNewTokenSymbol] = useState('');

  useEffect(() => {
    const connectToWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
          const abi = [
            {
              "inputs": [],
              "name": "TokenName",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "TokenSymbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTokenName",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getTokenSymbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_newTokenName",
                  "type": "string"
                }
              ],
              "name": "setTokenName",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_newTokenSymbol",
                  "type": "string"
                }
              ],
              "name": "setTokenSymbol",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ];
          const contract = new web3.eth.Contract(abi, contractAddress);
          setContractInstance(contract);
        } catch (error) {
          console.log(`Failed to connect to wallet: ${error}`);
        }
      } else {
        console.log("MetaMask provider is not available, please install it.");
      }
    };
    connectToWallet();
  }, []);

  const handleTokenNameChange = (event) => {
    const name = event.target.value;
    setNewTokenName(name);
  };

  const handleTokenSymbolChange = (event) => {
    const symbol = event.target.value;
    setNewTokenSymbol(symbol);
  };

  const handleTokenNameSubmit = async () => {
    await contractInstance.methods.setTokenName(newTokenName).send({ from: window.ethereum.selectedAddress });
    setTokenName(newTokenName);
    setNewTokenName('');
  };

  const handleTokenSymbolSubmit = async () => {
    await contractInstance.methods.setTokenSymbol(newTokenSymbol).send({ from: window.ethereum.selectedAddress });
    setTokenSymbol(newTokenSymbol);
    setNewTokenSymbol('');
  };

  const handleGetTokenSymbol = async () => {
    const symbol = await contractInstance.methods.getTokenSymbol().call();
    setTokenSymbol(symbol);
    };

    const handleGetTokenName = async () => {
      const name = await contractInstance.methods.getTokenName().call();
      setTokenName(name);
      };
      

  return (
    <div>
      <p>Token name: {tokenName}</p>
      <input type="text" value={newTokenName} onChange={handleTokenNameChange} />
      <button onClick={handleTokenNameSubmit}>Set Name</button>
      <p>Token symbol: {tokenSymbol}</p>
      <input type="text" value={newTokenSymbol} onChange={handleTokenSymbolChange} />
      <button onClick={handleTokenSymbolSubmit}>Set Symbol</button>
      <button onClick={handleGetTokenSymbol}>Get Symbol</button>
      <button onClick={handleGetTokenName}>Get Name</button>
    </div>
  );
}

export default App;
