"use client";

import React, { KeyboardEvent } from 'react';

interface TodoInputProps {
  onAdd: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  // Function to handle the add button click or Enter key press
  const handleAddItem = () => {
    const inputElement = document.getElementById('item') as HTMLInputElement;
    if (inputElement?.value) {
      onAdd(inputElement.value);
      inputElement.value = ''; // Clear input after adding
    }
  };

  // Handle "Enter" key press for adding item
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddItem();
  };

  return (
    <header className="flex justify-center space-x-2 my-4 mx-4">
      <input
        type="text"
        id="item"
        placeholder="Enter your reminders..."
        onKeyDown={handleKeyDown}
        className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
      />
      <button
        onClick={handleAddItem}
        className="px-6 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
