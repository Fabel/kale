var React = require('react');
var ReactDOM = require('react-dom');
var Messages = require('../storages/messages');

var NewMessage = {

    run(data){
        Messages.add(data);
    }
}

var ErrorEmpty = {
    run(data){
        Messages.add(data);
    }
}

var List = {

    run(data){
        Messages.set(data);
    }

}

module.exports = {
    NewMessage: NewMessage,
    ErrorEmpty: ErrorEmpty,
    List: List
}

