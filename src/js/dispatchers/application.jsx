var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('../views/index.jsx');

var ApplicationDispatcher = {

    run(){
        ReactDOM.render(<Index />, document.getElementById('main'));
    }

}

module.exports = ApplicationDispatcher;
