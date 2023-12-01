import React from 'react'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className="edit-button" onClick={() => editTodo(task.id)}>Atualizar</button>
        <button className="delete-button" onClick={() => deleteTodo(task.id)}>Excluir</button>
        </div>
    </div>
  )
}