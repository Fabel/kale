
var List = {
    run(client, data){
        client.send({action: 'MessagesList', data: data});
    }
}

var NewMessage = {
    run(client, data){
        client.send({action: 'NewMessage', data: data});
    }
}

var ErrorEmpty = {
    run(client, data){
        client.send({action: 'ErrorEmpty', data: {msg: "Can't send empty message"}});
    }
}

module.exports = {
    List: List,
    NewMessage: NewMessage,
    ErrorEmpty: ErrorEmpty
}
