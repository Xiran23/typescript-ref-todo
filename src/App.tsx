import React ,{useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import  { Todo } from './model'
import TodoList from './components/TodoList';
 
const App : React.FC = ()=>{
  const [todo ,setTodo] = useState<string>("")

  const [todos ,setTodos] = useState<Todo[]>([])


  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()
    // if(todo){
    //   setTodos(...todos,{id:Date.now(),todo,isDone:false})
    //   console.log(todos)
    //   setTodo("")
      
    // }

    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo(""); // Clear input after adding
    }
  };
  console.log(todos)
  return (
    <div className= "App">
      <span className="heading">Typescipt-taskmate</span>

      <InputFeild todo={todo} setTodo = {setTodo} handleAdd={handleAdd}></InputFeild>
     <TodoList todos={todos} todo={todo} setTodos={setTodos}></TodoList>

    </div>
  )
}

export default App;
