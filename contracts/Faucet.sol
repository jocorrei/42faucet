//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./myERC20.sol";

contract Faucet {

    address payable public owner;
	address private token;
    
    constructor(address payable _owner) {
        owner = _owner;
    }

    function rug() public payable{
        require(msg.sender==owner);
        owner.transfer(address(this).balance);
    }

    function transfer(address payable _to) public payable{
        _to.transfer(100000000000000000); //0.1 ether
		myIERC20(token).mintFromFaucet(msg.sender, 1);
    }

    function getbalance() public view returns(uint) {
        return address(this).balance;
    }

	function setToken(address _token) external {
        token = _token;
    }

    receive() external payable{
    }
}
