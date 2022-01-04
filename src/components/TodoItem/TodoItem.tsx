import React from 'react';
import { TodoItemType } from '../../types';
import './TodoItem.css';

type TodoItemProps = {
	info: TodoItemType;
	onComplete: (id: number) => void;
};

function TodoItem({ info, onComplete }: TodoItemProps) {
	return (
		<div className="todo-item">
			<li className={info.isCompleted ? 'line-through' : ''}>{info.title}</li>
			<button onClick={() => onComplete(info.id)}>Complete</button>
		</div>
	);
}

export default TodoItem;
