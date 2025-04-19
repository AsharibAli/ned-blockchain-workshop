import hre from "hardhat";
import "@nomicfoundation/hardhat-ethers";

// This script is used to deploy the Greeter contract to the Sepolia Testnet
async function main() {
  // Print the address of the account deploying the contract
  console.log(
    "Deploying contracts with the account:",
    (await hre.ethers.getSigners())[0].address
  );

  // Get the contract factory for Greeter
  const Greeter = await hre.ethers.getContractFactory("Greeter");

  // Deploy the Greeter contract
  const greeter = await Greeter.deploy();

  // Wait until the contract is deployed
  await greeter.waitForDeployment();

  // Print the address where the contract was deployed
  console.log("Greeter deployed to:", greeter.target);
}

// Run the main function and handle errors
main()
  .then(() => process.exit(0)) // Exit successfully
  .catch((error) => {
    console.error(error); // Print any errors
    process.exit(1); // Exit with error code
  });
