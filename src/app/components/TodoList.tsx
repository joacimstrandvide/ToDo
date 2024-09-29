'use client'

import React from 'react'

interface TodoItem {
    text: string
    completed: boolean
}

interface TodoListProps {
    items: TodoItem[]
    onRemove: (index: number) => void
    onToggleComplete: (index: number) => void
}

const TodoList: React.FC<TodoListProps> = ({
    items,
    onRemove,
    onToggleComplete
}) => {
    return (
        <section className="container mx-auto p-4 max-w-2xl">
            <h3 className="text-xl text-center font-semibold text-gray-700 mb-4">
                Your Tasks
            </h3>
            <ul className="space-y-4">
                {items.length === 0 ? (
                    <li className="text-center text-gray-500">
                        Nothing yet! Add some tasks to get started.
                    </li>
                ) : (
                    items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <span
                                className={`flex-1 text-lg font-medium ${
                                    item.completed
                                        ? 'line-through text-gray-400'
                                        : ''
                                }`}
                            >
                                {item.text}
                            </span>
                            <div className="space-x-2 flex">
                                {/* Remove Button */}
                                <button
                                    className="px-4 py-2 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out"
                                    onClick={() => onRemove(index)}
                                >
                                    Remove
                                </button>
                                {/* Complete Button */}
                                <button
                                    className={`px-4 py-2 rounded-lg shadow-md transition-all duration-200 ease-in-out ${
                                        item.completed
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                    onClick={() => onToggleComplete(index)}
                                >
                                    {item.completed ? 'Completed' : 'Complete'}
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </section>
    )
}

export default TodoList
