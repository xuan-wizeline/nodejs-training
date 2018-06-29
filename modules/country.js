const EventEmitter = require('events');
var sleep = require('sleep');
var jsonFile = require('jsonfile')

class CountryReader extends EventEmitter {
    constructor(filePath) {
        super();
        this.filePath = filePath;    
    }

    readContent() {
        console.log(this.filePath);
        var jsonData = jsonFile.readFileSync(this.filePath);
        
        for (var i = 0; i < jsonData.length; ++i) {
            var data = {
                country: jsonData[i].country,
                city: jsonData[i].city,
                index: i
            };
            
            this.emit('countrydata', data);
            sleep.sleep(1);
        } 
    }
}

module.exports = CountryReader