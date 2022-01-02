/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import TodoList from '../TodoList/TodoList';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>// TODO APP</h1>
			</header>
			<main>
				<TodoList />
			</main>
		</div>
	);
}

export default App;
