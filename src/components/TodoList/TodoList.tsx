import React, { useState } from 'react';
import './TodoList.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import type { TodoItem } from '../../types';

function TodoList() {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	const [lastTodoId, setLastTodoId] = useState(0);

	function addTodo(todo: TodoItem) {
		setTodos([...todos, todo]);
	}

	function createTodoItem(title: string) {
		const todo: TodoItem = {
			id: lastTodoId + 1,
			title,
			isCompleted: false,
		};
		setLastTodoId(lastTodoId + 1);

		return todo;
	}

	return (
		<div>
			<TodoHeader add={(title: string) => addTodo(createTodoItem(title))} />
			<div>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default TodoList;
