import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');

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
            }
          ];
          const contract = new web3.eth.Contract(abi, contractAddress);
          const name = await contract.methods.getTokenName().call();
          const symbol = await contract.methods.getTokenSymbol().call();
          setTokenName(name);
          setTokenSymbol(symbol);
        } catch (error) {
          console.log(`Failed to connect to wallet: ${error}`);
        }
      } else {
        console.log("MetaMask provider is not available, please install it.");
      }
    };
    connectToWallet();
  }, []);

  return (
    <div>
      <p>Token name: {tokenName}</p>
      <p>Token symbol: {tokenSymbol}</p>
    </div>
  );
}

export default App;
