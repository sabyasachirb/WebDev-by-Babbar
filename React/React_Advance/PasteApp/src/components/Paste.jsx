import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setsearchTerm] = useState("");

  const filterData = (pastes || []).filter((paste) => {
    if (typeof paste.title !== "string") return false;

    return paste.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='flex flex-col gap-4 mx-10 w-3xl'>
      <input
        className="bg-black p-2 rounded "
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-4 border w-3xl h-60">
        {
          filterData.length > 0 && 
          filterData.map(
            (paste) =>{
              return (
                <div className="">
                  <div>
                    {paste.title}
                  </div>
                  <div>
                    {paste.content}
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
};

export default Paste;
