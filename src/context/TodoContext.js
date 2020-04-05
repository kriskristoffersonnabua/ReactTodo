import React, { useState, useEffect } from 'react';

export const TodoContext = React.createContext();

class TodoProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    createTodo = data => {
        let newTodos = this.state.todos;
        newTodos.push(data);
        this.setState({ todos: newTodos });
    };

    deleteTodo = todo_id => {
        console.log(
            this.state.todos.filter(todo => {
                console.log(todo, todo_id);
                return todo.id != todo_id;
            })
        );
        this.setState({
            todos: this.state.todos.filter(todo => todo.id != todo_id)
        });
    };

    render() {
        return (
            <TodoContext.Provider
                value={{
                    todos: this.state.todos,
                    createTodo: this.createTodo,
                    deleteTodo: this.deleteTodo
                }}
            >
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoProvider;
