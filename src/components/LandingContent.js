import React from 'react'
import { Link } from 'react-router-dom'

const LandingContent = () => {
  return (
    <div className=' mt-20 pb-36  flex flex-col   text-white justify-center text-center items-center gap-4'>

                        <h1 className='text-6xl font-bold '>Unlimited movies, TV shows and more</h1>
                        <h3 className='text-4xl semi-bold'>Watch anywhere. Cancel anytime.</h3>
                        <p className='text-xl '>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='flex flex-row items-center text-center justify-between'>
                            <input type="email"  name="" id="" placeholder='Email address' className='pl-6 pb-6 pt-4 bg-black opacity-80 text-white  w-80 ' />
                           <Link to="/home">
                            <button className='bg-red-600 p-4 text-2xl font-semibold'>Get Started</button>
                           </Link>
                        </div>

                </div>
  )
}

export default LandingContent