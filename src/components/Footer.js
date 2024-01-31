import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <div className="flex text-xs flex-col mt-20  justify-start   bg-black text-white opacity-80 gap-9 ">
          <p className="mt-20 ml-64 text-white" >
            Questions? Call <Link className="underline">000-800-100-8343</Link>
          </p>
          <div className="flex flex-row ml-64 gap-56 text-white ">
            <Link className="underline">FAQ</Link>
            <Link className="underline">Help Centre</Link>
            <Link className="underline">Terms of Use</Link>
            <Link className="underline">Privacy</Link>
          </div>
          <div className="flex flex-row ml-64 gap-36 mb-20 text-white">
            <Link className="underline">Cookie Preferences</Link>
            <Link className="underline">Corporate Information</Link>
          </div>
          
    </div>
  )
}

export default Footer