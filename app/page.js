"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    setmaintask([...maintask,{title, desc}]);
    console.log(maintask)
    settitle("");
    setdesc("") ;
}

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i,1);
    setmaintask(copyTask);
}

  let renderTask =  <h2> No Task Available</h2>

  if(maintask.length>0){
    renderTask = maintask.map((t,i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className=' text-xl font-semibold'>{t.title}</h5>
            <h6 className=' text-lg font-medium'>{t.desc}</h6>
          </div>
          <button 
          onClick={() => {
            deleteHandler(i)
          }}
          className='bg-red-900 text-white px-4 py-2  font-semibold 
          rounded '>Delete</button>
        </li>
      );
    });
  }
  
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold 
      text-centre ">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Title here'
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />
        <input 
        type="text" 
        className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        /> 
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-300 text-2xl'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default page