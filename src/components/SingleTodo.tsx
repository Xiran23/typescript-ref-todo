import React, { useState,useRef,useEffect } from 'react'
import { Todo } from "../model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./style.css"

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Correct type for setTodos
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // Toggle isDone status
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo) // Corrected isDone logic
    );
  }

  // Handle todo deletion
  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  // Handle todo editing
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo)
    );
    setEdit(false); // Exit edit mode after saving
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
    

  }, [edit]);


  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (
          <input
            value={editTodo}
            ref={inputRef}
            onChange={(e) => setEditTodo(e.target.value)} // Update editTodo on change
          />
        ) : (
          todo.isDone ? (
            <s className="todos_single--text">{todo.todo}</s>
          ) : (
            <span className="todos_single--text">{todo.todo}</span>
          )
        )
      }

      <span className="icon" onClick={() => {
        if (!edit && !todo.isDone) {
          setEdit(!edit); // Toggle edit mode only if the todo is not done
        }
      }}>
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </form>
  );
}

export default SingleTodo;
