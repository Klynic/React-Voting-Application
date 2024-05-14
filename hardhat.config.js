/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.24",
   networks : {
     amoy : {
       url : "https://rpc-amoy.polygon.technology",
       accounts : ["7dd13974f71cae062e7df7c572ec3a8edd438d662fb35e8c50a22b5f255291c7"]
     },
   },
   etherscan: {
     apiKey : "W9MY8C3XPI5SGNXC1JR3K7NEKM34VJGERD",
   },
 };
 