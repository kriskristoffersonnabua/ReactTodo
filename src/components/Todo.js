import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './TodoForm';
import { TodoContext } from '../context/TodoContext';

export default props => {
    const { deleteTodo, updateTodo, todo } = props;

    const delete_todo = () => {
        deleteTodo(todo.id);
    };

    return (
        <div class="box">
            <div class="level has-background-light" style={{ padding: 20 }}>
                <blockqoute class="level-left has-text-dark">
                    {todo.description}
                </blockqoute>
                <span class="level-right">{todo.updated_at}</span>
            </div>
            <button class="button is-danger is-small" onClick={delete_todo}>
                Delete
            </button>
        </div>
    );
};
