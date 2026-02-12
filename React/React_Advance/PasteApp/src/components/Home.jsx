import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setsearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    function createpaste(){
        const paste = {
            title : title,
            content : value,
            _id : pasteId || Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        if(pasteId)
        {
            //update
            dispatch(updateToPastes(paste));
        }
        else
        {
            //create
            dispatch(addToPastes(paste));
        }
        //after creationg / updation
        setTitle(''),
        setValue(''),
        setsearchParams({})
    }
    



  return (
    <div className='flex flex-col gap-4 mx-10'>
      <div className="flex flex-row gap-4">
        <input
          className="p-2 rounded bg-black w-3xl text-xs"
          type="text"
          placeholder="Enter title here"
          id="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createpaste} className="bg-indigo-600 p-2 rounded text-gray-200 hover:bg-indigo-800 cursor-pointer">
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      <div>
        <textarea 
        className='bg-black w-4xl p-4 rounded-l'
        placeholder='Enter Content Here'
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        rows={16}
        />
      </div>
    </div>
  );
}

export default Home
