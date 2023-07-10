require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/se957KFuYD_eFI6O7RbL3KWKAvbxV-Vo";
const NEXT_PUBLIC_PRIVATE_KEY = "db254ed36acec1c52ab206e6bc9db3da73261191e9735b24e7344d827fa0b7a6";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
 // defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/se957KFuYD_eFI6O7RbL3KWKAvbxV-Vo",
      accounts: [`0x${"db254ed36acec1c52ab206e6bc9db3da73261191e9735b24e7344d827fa0b7a6"}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
