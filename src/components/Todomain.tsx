import { useState } from "react";
export default function Todomain() {
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
  );
}
