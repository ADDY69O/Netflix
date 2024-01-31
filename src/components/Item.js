import React  from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
const Item = (props) => {

   
    
  return (
    <div className='relative w-64 h-80 mt-4 mb-4 mx-2  group transition-transform transform-gpu duration-300 ease-in-out hover:scale-110'>
      <img
  className='w-full h-full object-cover rounded-md'
  src={`https://image.tmdb.org/t/p/w500${props.item.backdrop_path}`}
  alt={props.item.original_title}
/>
      <div className='absolute inset-0  flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <div className='flex flex-row'>
      <FaPlayCircle size={40} />
      <IoIosAddCircleOutline size={40} />
      <AiFillLike  size={40}/>
        </div>
        <h1>{props.item.original_title}</h1>
      </div>
    </div>
  );
};

export default Item;
