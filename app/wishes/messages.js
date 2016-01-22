var Messages = require('../collections/messages');
var Actions = require('../actions/messages');

module.exports = {

    Subscribe: {
        perform(client){
            Messages.subscribe(client);
        }
    },

    MessagesList: {
        perform(client){
            Messages.list(client);
        }
    },

    NewMessage: {
        perform(client, data){
            if(data.msg){
                Messages.add(data);
            } else {
                client.action(Actions.ErrorEmpty);
            }
        }
    }


}
