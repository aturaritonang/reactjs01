var React = require('react');
var CreateReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = CreateReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up!', 'eat some cheese!', 'take a nap!', 'buying flowers!']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            )
        }.bind(this));
        return(
            <div id="todo-list">
                <p>Todo list:</p>
                <ul>{todos}</ul>
            </div>
        );
    },
    //Custom function
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
    
});

//Custom function

//Create TodoItem Component
var TodoItem = CreateReactClass({
    render: function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x</span>
                </div>
            </li>
        );
    },
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    }
});
//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));