var Dispatchers = require('./dispatchers');

var Socket = {

    init(){
        this.connection = new WebSocket('ws://localhost:8081/');

        this.connection.addEventListener('open', ()=>{
            this.send({wish: 'Start', data: {date: new Date}})
        })

        this.connection.addEventListener('message', (msg)=>{
            try{
                var data = JSON.parse(msg.data);
                var dispatcher = Dispatchers[data.action];

                if(!dispatcher){
                    console.error(`Undefined dispatcher for action '${data.action}'`);
                    return;
                }

                dispatcher.run(data.data);
            } catch(e){
                console.error(e.stack)
                //handle error
            }
        });

        this.connection.addEventListener('close', ()=>{
          // errorInApp("Server closed connection")
        })
    },

    send(data){
        this.connection.send(JSON.stringify(data))
    }
};

module.exports = Socket;
