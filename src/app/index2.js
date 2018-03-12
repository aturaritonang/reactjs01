var React = require('react');
var CreateReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = CreateReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap'],
            age: 30
        }
    },
    render: function(){
        var ager = setTimeout(function(){
            this.setState({
                age: 35
            });
        }.bind(this), 5000);
        return(
            <div id="todo-list">
                <p>Todo list:</p>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
});

var myCheese = {name: 'Camembert', smellFactor: 'Extreem pong'};
//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));