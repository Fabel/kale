var _ = require('underscore');
var Backbone = require('backbone');
var Wish = require('../wish');

var Messages = {
    collection: new Backbone.Collection,
    loaded: false,

    watchers: [],

    init(){
        return this;
    },

    get(cb){
        if(this.loaded){
            cb(this.collection);
        } else {
            this.watchers.push(cb);
            Wish.emit('MessagesList');
            Wish.emit('SubscribeToMessages');
        }
    },

    set(data){
        this.collection.set(data);
        this.loaded = true;
        _.each(this.watchers, cb=>cb(this.collection));
        this.watchers = [];
    },

    add(data){
        this.collection.add(data);
    }
}

_.extend(Messages, Backbone.Events);

module.exports = Messages.init();
