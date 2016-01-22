var React = require('react');
var Messages = require('./messages.jsx');

var Index = React.createClass({

    render() {
        return (
            <div className="content">
                Message List:
                <Messages />
            </div>
        );
    }
});

module.exports = Index;
