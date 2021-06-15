module.exports = {
    networks: {
      development: {
        host: "ganache-cli", 
        port: 8545,
        network_id: "57771", 
      },
    },
    compilers: {
      solc: {
        version: "^0.8.0"
      }
    }
  };