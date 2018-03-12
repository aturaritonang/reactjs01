var React = require('react');
var CreateReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = CreateReactClass({
    render: function(){
        return(
            <div>
                <p><strong>Cheese Name: </strong>{this.props.chess.name}</p>
                <p><strong>Smell Factor: </strong>{this.props.chess.smellFactor}</p>
            </div>
        );
    }
});

var myCheese = {name: 'Camembert', smellFactor: 'Extreem pong'};
//Put component into html page
ReactDOM.render(<TodoComponent mssg="I like cheese" chess={myCheese}/>, document.getElementById('todo-wrapper'));