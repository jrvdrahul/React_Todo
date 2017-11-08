import React, { Component } from 'react';
import _ from 'lodash';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	constructor(){
		super();
		this.state={
			todos:[]
		}
	}
	
	addTodo(event){
		event.preventDefault();
		
		let name=this.refs.name.value;
		let completed=this.refs.completed.value;
		
		if(!name){
			console.log('error');
			alert('enter a value');
			return 'abcd';
		}
		
		
		let todo={
			name,
			completed
		};
		console.log(todo);
		
		let todos=this.state.todos;
		todos.push(todo);
		
		this.refs.todoForm.reset();
		
		this.setState({
			todos
		});
	}
	
	editTodo(){
		
	}
	
	deleteTodo(name){
		console.log(name);
		_.remove(this.state.todos, todo => todo.name === name);
			this.setState({ state:this.state.todos });
		
		
	}
	
	
	
	
  render() {
	  let todos=this.state.todos;
    return (
      <div className="App">
        <h1>TODO APP</h1>
		
		<form ref="todoForm">
			<input type="text" ref="name" />
			<input type="text" ref="completed" />
			<button onClick={this.addTodo.bind(this)}> Add </button>
		</form>
		{todos.map((todo, index) => <li key={index}>{todo.name}{todo.completed}
		<button onClick={this.deleteTodo.bind(this, todo.name)}>delete</button>
		<button onClick={this.editTodo.bind(this, index)}>Edit </button>
		</li>)}
		
		
      </div>
    );
  }
}

export default App;
