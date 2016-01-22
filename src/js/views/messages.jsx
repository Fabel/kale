var React = require('react');
var MessagesStorage = require('../storages/messages');
var Wish = require('../wish');

var Messages = React.createClass({
    getInitialState() {
        return {
            messages: []
        };
    },

    componentDidMount() {
        MessagesStorage.get(messages=>{
            this.setState({
                messages: messages
            });
            messages.on('add', ()=>{
                this.forceUpdate();
            });
        });
    },

    componentWillUnmount() {
        MessagesStorage.off('change');
    },

    _renderItem(item, i){
      return(
          <li key={i}>
            {item.get('msg')}
          </li>);
    },

    _keydown(e){
        if(e.keyCode == 13){
            this._submit(e.target.value);
            e.target.value = '';
        }
    },

    _submit(msg){
        // if(msg){
            Wish.emit('NewMessage', {msg: msg});
        // }
    },

    render() {
        return (
            <div className="content">
                <ul>
                {this.state.messages.map(this._renderItem)}
                </ul>
                <input onKeyDown={this._keydown}/>
            </div>
        );
    }
});

module.exports = Messages;
