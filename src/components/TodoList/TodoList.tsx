import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<div className="todo-list-header">
				<input type="text" className="todo-input" />
				<button className="add-btn">Add</button>
			</div>
			<div>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default TodoList;
