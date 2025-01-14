import React from 'react'
import "./style.css";
import  { Todo } from '../model'
import SingleTodo from './SingleTodo';
interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<string>> ;

}

const TodoList:React.FC<Props> = ({todo,todos,setTodos}) => {
   

  return (
    <div className="todo">
        
        {
        todos.map((todo)=>(
            <SingleTodo todo = {todo} key={todo.id}
                todos={todos}
                setTodos={setTodos}
            ></SingleTodo>
             
            
            
          

            
        ))}
      
    </div>
  )
}

export default TodoList
