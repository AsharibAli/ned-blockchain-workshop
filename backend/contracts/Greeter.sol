// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19; // Solidity version

// Start of the Greeter contract
contract Greeter {
    string message = "Hello, World!"; // Store a message, default is "Hello, World!"

    function read() public view returns (string memory) {
        // Function to read the message
        return message; // Return the current message
    }

    function write(string memory newMessage) public {
        // Function to update the message
        message = newMessage; // Set the message to the new value
    }
} // End of contract
