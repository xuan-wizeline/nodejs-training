const cryptography = require('./modules/cryptography');
const CountryReader = require('./modules/country');


function main() {
    // checkEncryptModule("testing encrypt library");

    // checkEncryptModule({
    //     username: "tester",
    //     password: "tester1234"
    // });

    var countryReader = new CountryReader("country-by-capital-city.json");

    countryReader.on("countrydata", function(data) {
        console.log('Country: ', data.country);
        console.log('Capital City: ', data.city);
        console.log('Country index: ', data.index);
    });

    countryReader.readContent();
}

function checkEncryptModule(originalContent) {
    console.log("original content: ", originalContent);
    var encryptedContent = cryptography.encrypt(originalContent);
    console.log("Encrypted content: ", encryptedContent);
    var decryptedContent = cryptography.decrypt(encryptedContent);
    console.log("Decrypted content: ", decryptedContent);
    console.log("Is original content equal to decrypted content: ", originalContent == decryptedContent);
}

main();