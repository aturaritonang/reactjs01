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
                <TodoItem item={item} key={index}/>
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

//Create TodoItem Component
var TodoItem = CreateReactClass({
    render: function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});
//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));