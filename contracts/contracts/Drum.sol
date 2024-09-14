// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Drum {
    address public immutable owner;
    uint public beat = 0;

    event DrumFired(address sender);

    constructor() {
        owner = msg.sender;
    }

    function drum() public {
        beat++;
        emit DrumFired(msg.sender);
    }
}
