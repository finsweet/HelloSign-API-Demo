module.exports = {

    mongodb:{
        host: 'mongodb://'+process.env.MONGO_USER+':'+process.env.MONGO_PASS+'@'+process.env.MONGO_HOST || 'mongodb://localhost/hellosign'
    },

    hellosignKey: process.env.HELLO_KEY || '40b740615f6f87a49c72f6beefd4c880d476ee1c58994955a42bf33ad596e3b2',
    hellosignID: process.env.HELLO_ID || '94cd46c0b0f52e25225f4406bdaa2b07'
};