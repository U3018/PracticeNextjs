"use client";

import { useState } from "react";
import Link from "next/link";

export default function TodoApp() {
  type Todo = {
    text: string;
    completed: boolean;
  };
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="bg-background text-foreground px-6 py-14">
      <h1>Todo App</h1>
      <p>Welcome to the Todo App</p>
      <main>
        <div className="flex items-center gap-2 mb-4 mt-4">
        <input
          type="text"
          value={text}
          onChange={changeText}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
        <button
          onClick={() => {
            setTodos([
              ...todos,
              {
                text: text,
                completed: false,
              },
            ]);
            setText("");
          }}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
        </div>
      </main>
      <ul className="border border-black rounded-md p-4">
        <p className="font-bold mb-2">Todos</p>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center gap-2
           rounded-md py-2 px-4 mb-2 bg-gray-100">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                setTodos(
                  todos.map((item, i) =>
                    i === index ? { ...item, completed: !item.completed } : item,
                  ),
                );
              }}
            />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
          </li>
        ))}
      </ul>
      <div>
          <button
            onClick={() => {
              setTodos(todos.filter((todo) => !todo.completed));
            }}
            className="mt-4 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
            clear checked
          </button>
        </div>
      <Link href="/" className=" text-blue-500 hover:text-blue-700 hover:underline mt-5 block">
        Go back to Home
      </Link>
    </div>
  );
}
