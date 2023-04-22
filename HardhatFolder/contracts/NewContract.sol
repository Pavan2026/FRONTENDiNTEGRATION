// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NewContract {

string public TokenName = "Solana";
string public TokenSymbol = "SOL";

function setTokenName(string memory _newTokenName) public {
TokenName = _newTokenName;
}

function setTokenSymbol(string memory _newTokenSymbol) public {
TokenSymbol = _newTokenSymbol;
}

function getTokenName() public view returns (string memory) {
return TokenName;
}

function getTokenSymbol() public view returns (string memory) {
return TokenSymbol;
}
}

