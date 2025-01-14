import React ,{useState} from 'react'
import {Todo} from "../model"
import {AiFillEdit ,AiFillDelete } from "react-icons/ai"
import {MdDone} from "react-icons/md"
import "./style.css"
 
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<string>> ;

}


const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
    const [edit ,setEdit ] = useState<boolean>(todo.todo)

        const handleDone = (id:number)=>{
        setTodos(
            todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.idDone}:
            todo
        )
        
        )
    }


    const handleDelete = (id:number)=>{
        setTodos(
            todos.filter((todo)=>todo.id!==id)
        
        
        )
    }


  return (

 
    <form className="todos__single">
        {
            edit?(
                <input/>

            ):(

                            
                                todo.isDone ? (
                                    <span className="todos_single--text">{todo.todo}</span>
                    
                                ):(
                    
                                    <s className="todos_single--text">{todo.todo}</s>
                                )
            )
        }
        <span className="icon" onClick ={
            ()=>{

                if(!edit && !todo.isDone ){
                    setEdit(!edit);
            }

            }}
        > <AiFillEdit/></span>
        <span className="icon" onClick ={()=>handleDelete(todo.id)}>  <AiFillDelete/></span>
        <span className="icon" onClick ={()=>handleDone(todo.id)}> <MdDone/></span>
      
    </form>
  )
}

export default SingleTodo
