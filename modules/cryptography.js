const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

function encrypt(original) {
    return cryptr.encrypt(original);
}

function decrypt(encryptedContent) {
    return cryptr.decrypt(encryptedContent);
}

module.exports = {
    encrypt,
    decrypt
}