import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Todos List</h1>
            {props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={props.onDelete}></TodoItem>
            })
            }
        </div>
    )
}

