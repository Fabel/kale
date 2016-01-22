var Wishes = require('./wishes');

var id = 1;

var Client = function(connection){
  this.id = id++;
  this.connection = connection
  this.oncloseCallbacks = []
  this.wishList = [];

  connection.on('message', message => {
    try{
        var data;
        if(message.type === 'utf8') {
            data = JSON.parse(message.utf8Data);
        }
        this.handleWish(data);
    }catch(e){
      connection.sendUTF(JSON.stringify({error: e.stack}))
      console.log(e.stack)
    }
  });

  connection.on('close', (reasonCode, description) => {
    this.disconnect(this);
  });
}

Client.prototype = {
    handleWish(data){
        var wish = Wishes[data.wish];
        wish.perform(this, data.data);
    },

    disconnect(){
        this.runCloseCallbacks();
        this.connection.close();
    },

    action(action, data){
        action.run(this, data);
    },

    send(data){
        this.connection.sendUTF(JSON.stringify(data))
    },

    runCloseCallbacks(){
        for(var i=0;i<this.oncloseCallbacks.length;i++){
            this.oncloseCallbacks[i].call(this)
        }
    },

    onclose(callback){
        this.oncloseCallbacks.push(callback)
    },
}

module.exports = Client;
