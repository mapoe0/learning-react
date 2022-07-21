import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function Todo() {
    const [todos, setTodos] = useState([])
    const [loading, setloading] = useState(true)
    // useEffect avec fonction async
    useEffect(() => {
        const loadTodo = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            const data = await response.json()
            if (response.ok) {
                setTodos(data)
            } else {
                console.log(JSON.stringify(data))
            }
            setloading(false)
        }
        loadTodo()
    }, [])           
    if(loading){
        return <p>Loading.....</p>
    }
    return (
        <ul className="todo-list">
            {todos.map((todo) => {return <li key={todo.id}>{todo.title}</li>})}
        </ul>
    )
}