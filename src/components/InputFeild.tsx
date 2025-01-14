import React ,{useRef} from 'react'
import "./style.css";
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>> ;
  handleAdd:(e:React.FormEvent)=>void;

}
// const InputFeild = ({todo,setTodo}:Props) => {
  const InputFeild:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
      const inputref = useRef<HTMLInputElement>(null) 


  return (
    <form className="input"  onSubmit ={(e)=>{

      handleAdd(e)
      inputref.current?.blur()
    }
    }>
        <input
          ref={inputref}
        type="text" placeholder="Enter task" className="input__box" value={todo} onChange={(e)=>setTodo(e.target.value)}>
        </input>
        <button className="input_submit" type="submit">GO</button>

      
    </form>
  )
}

export default InputFeild
