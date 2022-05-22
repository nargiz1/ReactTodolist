import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import styles from './index.module.css'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) =>{
        const newTodos=[todo, ...todos];
        setTodos(newTodos);
    }

    const updateTodo = (todoId, newValue) =>{
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(todo=> todo.id!==id);
        setTodos(removeArr);
    }

    const completeTodo = (id) =>{
        let updatedTodos = todos.map(todo=> {
            if(todo.id===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const handleCheckboxChange = (id) =>{
        let updatedTodos = todos.map(todo=> {
            if(todo.id===id){
                todo.isChecked = !todo.isChecked;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    
    const deleteAll = () => {
        const newTodos = [];
        setTodos(newTodos);
    }
    const todoDone = (id) =>{
        let updatedTodos = todos.map(todo=> {
            if(todo.id===id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    const deleteSelected = () => {
        let newTodos = [...todos];
        newTodos = newTodos.filter((item)=> item.isChecked===false);
        setTodos(newTodos);
    }
    const selectAll = () =>{
        let updatedTodos = todos.map(todo=> {
            if(todo.isChecked===false){
                todo.isChecked = true;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <div className={styles.formWrapper}>
            <TodoForm  onSubmit={addTodo}/>
            {todos.every((item)=> item.isChecked===true) && todos.length!=0 && (
                <button onClick={deleteAll} className={styles.deleteButton}>Delete all</button>
            )}
            {todos.some((item)=> item.isChecked===true) && todos.some((item)=> item.isChecked!==true) && (
            <button onClick={deleteSelected} className={styles.deleteButton}>Delete Selected</button>
            )}
            <button onClick={selectAll}>Select all</button>
        </div>
      <Todo 
      todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updateTodo={updateTodo} 
      handleCheckboxChange={handleCheckboxChange} 
      todoDone={todoDone}
      />
    </div>
  )
}