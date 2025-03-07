module.exports = {
  // trailingSlash: true,
  swcMinify: true,
  env: {
    ALCHEMY_API: process.env.ALCHEMY_API,
    INFURA_IPFS_ID: process.env.INFURA_IPFS_ID,
    INFURA_IPFS_SECRET: process.env.INFURA_IPFS_SECRET,
    INFURA_IPFS_DOMAIN: process.env.INFURA_IPFS_DOMAIN,
  },
};
