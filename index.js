function main() {
    checkEncryptModule("testing encrypt library");

    checkEncryptModule({
        username: "tester",
        password: "tester1234"
    });
}

function checkEncryptModule(originalContent) {
    console.log("original content: ", originalContent);
    const cryptography = require('./modules/cryptography');
    var encryptedContent = cryptography.encrypt(originalContent);
    console.log("Encrypted content: ", encryptedContent);
    var decryptedContent = cryptography.decrypt(encryptedContent);
    console.log("Decrypted content: ", decryptedContent);
    console.log("Is original content equal to decrypted content: ", originalContent == decryptedContent);
}

main();