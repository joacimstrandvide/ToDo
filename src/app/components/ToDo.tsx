'use client'

import React, { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

interface TodoItem {
    text: string
    completed: boolean
}

const Todo: React.FC = () => {
    const [data, setData] = useState<{ todo: TodoItem[] }>({ todo: [] })

    // Effect to initialize state from localStorage
    useEffect(() => {
        const savedData = localStorage.getItem('todoList')
        if (savedData) {
            setData(JSON.parse(savedData))
        }
    }, []) // Run only once on mount

    // Sync with localStorage on data change
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(data))
    }, [data])

    // Handler to add a new item
    const addItem = (value: string) => {
        if (!value.trim()) return // Avoid empty inputs
        setData((prevData) => ({
            todo: [...prevData.todo, { text: value, completed: false }]
        }))
    }

    // Handler to remove an item by index
    const removeItem = (index: number) => {
        setData((prevData) => ({
            todo: prevData.todo.filter((_, i) => i !== index)
        }))
    }

    // Handler to toggle completion status by index
    const toggleComplete = (index: number) => {
        setData((prevData) => ({
            todo: prevData.todo.map((item, i) =>
                i === index ? { ...item, completed: !item.completed } : item
            )
        }))
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            {/* Input Component */}
            <TodoInput onAdd={addItem} />
            {/* Todo List Component */}
            <TodoList
                items={data.todo}
                onRemove={removeItem}
                onToggleComplete={toggleComplete}
            />
        </div>
    )
}

export default Todo
