// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

interface myIERC20 {
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 value
    );
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    function totalSupply()
		external 
		view 
		returns (uint256);
    function balanceOf(address who)
		external 
		view 
		returns (uint256);
    function allowance(address owner, address spender)
		external
		view
		returns (uint256);
    function transfer(address to, uint256 value)
		external
		returns (bool);
    function approve(address spender, uint256 value)
		external
		returns (bool);
	function transferFrom(address from, address to, uint256 value)
		external
		returns (bool);
    function mintFromFaucet(address to, uint amount)
        external 
        returns (bool);
}

contract myERC20 {
    uint public _decimals;
    string public _symbol;
    string public _name;

    uint256 private _totalSupply;
    uint256 public _mintedTokens;
    address private _owner;
    address[] public airdrop;

    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private allowances;
    
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 value
    );

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    constructor (string memory name_, string memory symbol_, address owner, uint256 supply) {
        _name = name_;
        _symbol = symbol_;
        _decimals = 2;
        _totalSupply = supply;
        _owner = owner;
    }
    
    receive() external payable {
        require(msg.value > 0, "Must send some ether to mint tokens.");
        require(_mint(msg.sender, 1) == true, "Not able to mint.");
        emit Transfer(address(this), msg.sender, 1);
    }

    function totalSupply() external view returns (uint256) {
        return (_totalSupply);
    }

    function totalAvailable() external view returns (uint256) {
        return (_totalSupply - _mintedTokens);
    }

    function balanceOf(address who) external view returns (uint256) {
        return (balances[who]);
    }

    function allowance(address owner, address spender) external view returns (uint256) {
        return (allowances[owner][spender]);
    }

    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), "Sender address must be different from null.");
        require(recipient != address(0), "Recipient address must be different from null.");
        require(balances[sender] >= amount, "Insufficient funds.");
        balances[sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(sender, recipient, amount);
    }

    function transfer(address to, uint256 value) external returns (bool) {
        require(value != 0, "Value must be positive.");
        _transfer(msg.sender, to, value);
        return (true);
    }

    function approve(address spender, uint256 value) external returns (bool) {
        allowances[msg.sender][spender] += value;
        emit Approval(msg.sender, spender, value);
        return (true);
    }

  function transferFrom(address from, address to, uint256 value) external returns (bool) {
      require(allowances[from][msg.sender] >= value, "Not enough allowances for this spender.");
      _transfer(from, to, value);
      return (true);
  }

  function mintFromFaucet(address to, uint amount) external returns (bool) {
      if (balances[to] == 0) {
		airdrop.push(to);
      }
      require(_mint(to, amount) == true, "Not able to mint new tokens.");
      emit Transfer(msg.sender, to, amount);
      return (true);
  }

  function _mint(address to, uint256 amount) internal returns (bool) {
      require(_totalSupply - _mintedTokens >= amount, "Amount cannot be minted due to total supply restrictions.");
      require(msg.sender == _owner, "Not allowed");
      _mintedTokens += amount;
      balances[to] += amount;
      return (true);
  }
}
