var _ = require('underscore');
var Backbone = require('backbone');
var Actions = require('../actions/messages');

var Message = Backbone.Model.extend({

});

var Messages = Backbone.Collection.extend({
    model: Message,

    subscribers: {},

    initialize(){
        this.on('add', this._notify);
    },

    subscribe(client){
        this.subscribers[client.id] = client;

        client.onclose(()=>{
            delete this.subscribers[client.id];
        });
    },

    list(client){
        client.action(Actions.List, this.toJSON());
    },

    _notify(model){
        _.each(this.subscribers, client => {
            client.action(Actions.NewMessage, model);
        })
    }
});

module.exports = new Messages();
