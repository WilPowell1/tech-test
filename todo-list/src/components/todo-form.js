import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInputChange = (event) => {
        setTodo({ ...todo, task: event.target.value });
    }

    const handleSubmit = (event) => {
        event.prevent.default();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}/>
            <button
                type="submit"/>submit
        </form>
    )
}

export default TodoForm;