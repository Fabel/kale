module.exports = {
    Application: require('./dispatchers/application.jsx'),
    MessagesList: require('./dispatchers/message').List,
    NewMessage: require('./dispatchers/message').NewMessage,
    ErrorEmpty: require('./dispatchers/message').ErrorEmpty,
}
