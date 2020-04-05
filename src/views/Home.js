import React, { useContext } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { TodoContext } from '../context/TodoContext';

const HomeComponent = props => {
    const { todos, ...other } = props.context;

    console.log(todos);
    return (
        <div class="container is-fluid">
            <div
                class="navbar has-background-light"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    marginTop: 32,
                    marginBottom: 20
                }}
            >
                <h1 class="title">🦊 Fox Todo List 🦊</h1>
            </div>
            <TodoForm {...other} />
            {!!todos &&
                !!todos.map &&
                todos.map(todo => {
                    return <Todo todo={todo} {...other} />;
                })}
        </div>
    );
};

export default () => {
    return (
        <TodoContext.Consumer>
            {context => <HomeComponent context={context} />}
        </TodoContext.Consumer>
    );
};
