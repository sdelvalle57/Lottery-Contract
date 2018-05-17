const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = "D26D6AFD5A2A4862CC8FB02523BDDE5CCF1427159519D9FC9187BE7D960BECCB".toLowerCase(); // private keys

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/qAudSy87uo2SByV57ETq")
      },
      network_id: '4',
      gas: 6000000,
    }
  }
}