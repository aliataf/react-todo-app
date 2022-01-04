import React, { useState } from 'react';
import './TodoList.css';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoItem from '../TodoItem/TodoItem';
import type { TodoItemType } from '../../types';

function TodoList() {
	const [todos, setTodos] = useState<TodoItemType[]>([]);
	const [lastTodoId, setLastTodoId] = useState(0);

	function addTodo(todo: TodoItemType) {
		setTodos([...todos, todo]);
	}

	function createTodoItem(title: string) {
		const todo: TodoItemType = {
			id: lastTodoId + 1,
			title,
			isCompleted: false,
		};
		setLastTodoId(lastTodoId + 1);

		return todo;
	}

	function completeTodo(id: number) {
		const todo = todos.find((todo) => todo.id === id);
		if (todo) {
			todo.isCompleted = !todo.isCompleted;
			setTodos([...todos]);
		}
	}

	return (
		<div>
			<TodoHeader add={(title: string) => addTodo(createTodoItem(title))} />
			<div>
				<ul className="todo-items">
					{todos.map((todo) => (
						<TodoItem key={todo.id} info={todo} onComplete={completeTodo} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default TodoList;
