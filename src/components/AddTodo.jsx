import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';



function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const {editText, editID} = useSelector((state)=>state);

    const addTodoHandler = (e) => {
        e.preventDefault();

        if (editID) {
            dispatch(updateTodo({id: editID , text: input}));
        } else {
            dispatch(addTodo(input));
        }
        setInput('');
    }

    useEffect(()=>{
        setInput(editText || '')
    },[editText]);

  return (
    <>
        <form  className="flex" onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setInput(e.target.value)}
                value={input}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                {!editID ? 'Add' : 'Update'}
            </button>
        </form>
    </>
  )
}

export default AddTodo