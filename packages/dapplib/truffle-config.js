require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remind concert harvest nasty flock tiger'; 
let testAccounts = [
"0x8e9eae19025c1900715562f06654bf74e8f29d9b0175bca812b57ddf1168fc0d",
"0x283b2abfacd2bed37595a28d4d2b4cfc7f4d2a63d64c9e1c085dde3a06014c24",
"0x3453aaad89c0773a7a30658148a1712f53eb4b5b4898d71883b9877e963ebe39",
"0x8811b8188a73215ebb3a88686fa19b8503751bf0e4529be37cfb2a6e40c3f1f3",
"0x9ee944a6980791110b7f0ce80cb81b6694d72c9bc837ef90ba8224520dee05ce",
"0x6eb225c99fe7c4b9f4a08f8594b77e8452f2d3da297ecc6ceef19fb870096434",
"0x2b4cbb7ed2bcad6bd775077e773a250ebb0b23a9e621408ffb7a53b1c2da8caa",
"0x99f17a4806fad3c6aa4af53996622f5176fce4670ed5bf5ebb749a59a4e9479b",
"0x3a825acf0d420e9d1a1d4c3541e61e6be1751f51389559af7db417d6b25d9b3d",
"0xc5de65c7a96a27ceb9718ee64bc7e625253f657e8640fea81b0366955446b62e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

