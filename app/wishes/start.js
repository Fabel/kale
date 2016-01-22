var Index = require('../actions/index');

var Start = {
    perform(client){
        Index.run(client);
    }
}

module.exports = Start;
