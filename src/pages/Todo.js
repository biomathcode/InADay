import React from 'react';
import CreateTodo from '../components/CreateTodo';
import {Toaster} from 'react-hot-toast'
import TodoList from '../components/TodoList';

function Todo() {
    return(
        <div>
            <Toaster/>
            <CreateTodo/>
            <h2>Todo</h2>
            
            <TodoList/>
        </div>

    )
}

export default Todo;