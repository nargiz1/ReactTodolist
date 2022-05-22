import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
import styles from './index.module.css'

function Todo({ todos, completeTodo, removeTodo, updateTodo, handleCheckboxChange, todoDone }) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        isDone: false,
        isChecked: false
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return todos.map((todo, index) => (
            <div className={styles.todoItemWrapper}>
                {todo.id===edit.id ? (
                    <TodoForm edit={edit} onSubmit={submitUpdate} />
                ) : (
                <div className={todo.isDone ? styles.completed : ''} key={index}>
                    <input type='checkbox' checked={todo.isChecked} onChange={() => handleCheckboxChange(todo.id)} />
                    <span>{todo.id}</span>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
                    <div className='icons'>
                        <AiFillDelete
                            onClick={() => removeTodo(todo.id)}
                            className='delete-icon'
                        />
                        <TiEdit
                            onClick={() => setEdit({ id: todo.id, value: todo.text, isDone: false, isChecked: false })}
                            className='edit-icon'
                        />
                        <button onClick={() => todoDone(todo.id)}>
                            {todo.isDone===true && ('Move to in progress')}
                            {todo.isDone===false && ('Done')}
                        </button>
                    </div>
                </div>
                )}
                
            </div>
            
        ))
    }

    return todos.map((todo, index) => (
        <div className={styles.todoItemWrapper}>
            <div className={todo.isDone ? styles.completed : ''} key={index}>
                <input type='checkbox' checked={todo.isChecked} onChange={() => handleCheckboxChange(todo.id)} />
                <span>{todo.id}</span>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
                <div className='icons'>
                    <AiFillDelete
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: todo.id, value: todo.text, isDone: false, isChecked: false })}
                        className='edit-icon'
                    />
                    <button onClick={() => todoDone(todo.id)}>
                        {todo.isDone===true && ('Move to in progress')}
                        {todo.isDone===false && ('Done')}
                    </button>
                </div>
            </div>
        </div>
        
    ))
}

export default Todo
