import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default props => {
    const [isEdit, setIsEditForm] = useState(false);
    const [description, setDescription] = useState('');
    const { createTodo } = props;

    const create_todo = () => {
        createTodo({
            id: Math.floor(Math.random() * 1000 + 1),
            description
        });
    };

    const handleInputChange = evt => setDescription(evt.currentTarget.value);
    return (
        <div class="box">
            <div class="field">
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        value={description}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <button class="button is-small is-primary" onClick={create_todo}>
                Add Todo
            </button>
            {isEdit && (
                <button class="button is-small is-danger">Delete</button>
            )}
        </div>
    );
};
