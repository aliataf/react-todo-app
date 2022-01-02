import React, { useRef } from 'react';
import './TodoHeader.css';

type TodoHeaderProps = {
	add: Function;
};

function TodoHeader({ add }: TodoHeaderProps) {
	const inputEl = useRef(document.createElement('input'));

	function onButtonClick() {
		console.log('onButtonClick');
		const title = inputEl.current.value;
		add(title);
		inputEl.current.value = '';
		inputEl.current.focus();
	}

	return (
		<div>
			<div className="todo-list-header">
				<input type="text" className="todo-input" ref={inputEl} />
				<button className="add-btn" onClick={onButtonClick}>
					Add
				</button>
			</div>
		</div>
	);
}

export default TodoHeader;
