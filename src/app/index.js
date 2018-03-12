var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var CreateReactClass = require('create-react-class');
//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = CreateReactClass({
    render: function(){
        return(
            <Router>
                <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                <hr />
                <Route exact path="/" component={TodoComponent} />
                <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
});

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
                <AddItem onAdd={this.onAdd}/>
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
    },
    //Custom function
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    },
    //Lifecycle function
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
        //any grabbing external data
    },
    componentWillUpdate: function(){
        console.log('componentWillUpdate');
    },
    componentDidUpdate:  function(){
        console.log('componentDidUpdate');
    }
});

//Put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));