var React = require('react');
var CreateReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = CreateReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up!', 'eat some cheese!', 'take a nap!', 'buying flowers']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return (
                <li>{item}</li>
            )
        });
        return(
            <div id="todo-list">
                <p>Todo list:</p>
                <ul>{todos}</ul>
            </div>
        );
    }
});

var myCheese = {name: 'Camembert', smellFactor: 'Extreem pong'};
//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));