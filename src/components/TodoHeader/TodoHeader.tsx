import React, { KeyboardEvent, useRef } from 'react';
import './TodoHeader.css';

type TodoHeaderProps = {
	add: Function;
};

function TodoHeader({ add }: TodoHeaderProps) {
	const inputEl = useRef(document.createElement('input'));

	function onButtonClick() {
		if (inputEl.current.value !== '') {
			const title = inputEl.current.value;
			add(title);
			inputEl.current.value = '';
			inputEl.current.focus();
		}
	}

	function onInputKeyUp(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			onButtonClick();
		}
	}

	return (
		<div>
			<div className="todo-list-header">
				<input type="text" className="todo-input" ref={inputEl} onKeyUp={onInputKeyUp} />
				<button className="add-btn" onClick={onButtonClick}>
					Add
				</button>
			</div>
		</div>
	);
}

export default TodoHeader;
