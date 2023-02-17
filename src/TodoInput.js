import React from 'react'

export const TodoInput = ({todo, setTodo, addTodo}) => {
  return (<>
    <div className='input-wrapper'>
        <input type='text' value={todo} placeholder='Create a new todo' onChange={(e) => {
            setTodo(e.target.value);}}/>
    </div>
    <button className='add-button' onClick={{addTodo}}>Add Todo</button>
  </>);
};
