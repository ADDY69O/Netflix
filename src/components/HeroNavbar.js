import React from 'react'
import Netflix_Logo from "../assets/Netflix_Logo.png"
import Avatar from "../assets/avatar.png"
import { Link } from 'react-router-dom'

import { IoIosNotifications,IoIosSearch } from "react-icons/io";

const HeroNavbar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-black text-white'>

        <div className='flex flex-row justify-between items-center gap-4'>
          <Link to="/">
        <img src={Netflix_Logo} alt="" className='w-32' />
          </Link>
        <Link>Home</Link>
        <Link>TV Shows</Link>
        <Link>Movies</Link>
        <Link>New & Popular</Link>
        <Link>My List</Link>

        </div>

        <div className='flex flex-row justify-between items-center gap-4'>
        <IoIosSearch size="24" />
        {/* <input type="text" placeholder="Search for a show, movie or person"/> */}
        <IoIosNotifications size="24" />

        <div className='bg-black text-white flex flex-row items-center gap-2'>
            <label htmlFor="info"></label>
            <img src={Avatar} className='w-8' alt="" />  
            <select name="info" id="info" className='bg-gray-600 text-white'>
            <option value="User">User Info</option>
            <option value="About">About</option>
             </select>          
        </div>


        </div>


    </div>
  )
}

export default HeroNavbar