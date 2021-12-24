require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remind hole just kite obscure stock'; 
let testAccounts = [
"0x213be840b33bf9efe5a5655a1146fd0034285dca4542ba70c717d7740acc3e97",
"0xa30ed32264edeacc08899ef80c10afb45b2533d4109f0209a7a47c125c6c62a8",
"0xe152c68a87a5c4b114d1c6e914c9af47a80e26ee141db92bac2bf1295e0c26f5",
"0xf825a96bcc98bb872d7d7ee85e33e8412e6ed46200f824c537d5e0ede5633927",
"0x3b77aec0f4a5336612353ca217ccc7829a125e462d06d94bace0da64a6691f63",
"0x3dbb9ceb134a77be2cc135e27469d173c1d3b7ee1cd6f2ca82f1c69ec81b19aa",
"0xf08dbe41435d9057dc825240ef1ef927b97bc85c71d6251a4766a8d832383f26",
"0x362c1e55affde08767b5e2e5795678b01d4de0c3b400303396d1bb232ad00276",
"0x6756d434c3e8c87fb8e71bf17f4560dbd8ac6ca7b9cd798f85aed28c04f8180e",
"0x7cb983f897a8a4a0797d58767c69eda9b638bcfbc1c5b1497c4003e10e342f51"
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

