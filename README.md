# FRONTENDiNTEGRATION

# Hardhat and React Project with Solidity Smart Contract

This project is a basic implementation of a Solidity smart contract using Hardhat and React. The smart contract is designed to retrieve the name and symbol of a token.

## Prerequisites

Before running this project, ensure that you have the following software installed on your computer:

- Node.js
- NPM
- Hardhat

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal and run `npm install` to install the required dependencies.

## Usage

1. Start the Hardhat network by running `npx hardhat node` in your terminal.
2. In a separate terminal window, deploy the smart contract to the Hardhat network by running `npx hardhat run scripts/deploy.js --network localhost`.
3. Once the smart contract is deployed, start the React app by running `npm start`.
4. The React app will be accessible at `http://localhost:3000/`.

## Smart Contract

The smart contract is located in `contracts/NewContract.sol`. The contract retrieves the name and symbol of a token and is licensed under the UNLICENSED SPDX License Identifier.

