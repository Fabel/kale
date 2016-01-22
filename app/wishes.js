module.exports = {
    Start: require('./wishes/start'),
    SubscribeToMessages: require('./wishes/messages').Subscribe,
    NewMessage: require('./wishes/messages').NewMessage,
    MessagesList: require('./wishes/messages').MessagesList
}
