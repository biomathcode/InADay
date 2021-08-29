import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { ToDoContext } from '../context/todoContext';

function TodoList() {
    const { todos, setTodo } = useContext(ToDoContext)

    const deleteTodo = (e, id) => {
        console.log(e, id)
        try {
            setTodo(todos.filter(todo => {
                return todo.id !== id
            }))
            toast.success("task deleted")

        } catch (err) {
            console.log(err)
        }
    }
    return (
        todos && (
            <div className="divide-y divide-gray-100 flex-col">
                {todos.map((todo) => (
                    <div key={todo.id} className="flex min-w-half m-4 flex-row justify-around " >
                        <div className="flex flex-col mr-5">
                            <div className="p-3 ">
                                {todo.title}
                            </div>
                            <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300">
                                <div className="text-xs font-normal leading-none md:inline-block block flex-initial">
                                    {todo.category}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="px-4 block md:inline-block text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                onClick={(e) => deleteTodo(e, todo.id)}
                            >
                                delete
                            </button>

                        </div>


                    </div>
                ))}
            </div>
        )

    )
}

export default TodoList;