import React, {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css'

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  const handleChange =(e) =>{
    setInput(e.target.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  })
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(input===''){
      alert("empty text");
      return;
    }
    props.onSubmit({
      id: uuidv4(),
      text: input,
      isDone: false,
      isChecked: false
    });
    setInput('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='add todo' value={input} name='text' className={styles.textInput} onChange={handleChange} ref={inputRef}/>
        <button className={styles.submitButton}>Submit</button>
    </form>
  )
}
