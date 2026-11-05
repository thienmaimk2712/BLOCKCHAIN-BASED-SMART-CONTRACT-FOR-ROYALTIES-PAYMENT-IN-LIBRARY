require("@nomicfoundation/hardhat-toolbox");
// Nếu chưa dùng testnet thì bạn có thể tạm ẩn dòng dotenv
// require("dotenv").config();

const ONE_THOUSAND_ETH = "1000000000000000000000"; // 1000 ETH mỗi account
const MNEMONIC = "test test test test test test test test test test test junk";

module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: MNEMONIC,
        count: 20,
        accountsBalance: ONE_THOUSAND_ETH,
      },
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
};
