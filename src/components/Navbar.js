                import React from 'react'
                import Netflix_Logo from "../assets/Netflix_Logo.png"
                import Netflix_Lang from "../assets/Netflix_lang.svg"
                import Netflix_main from "../assets/Netflix_main.jpg"
    import LandingContent from './LandingContent'
    import { Link } from 'react-router-dom'
            



                const Navbar = () => {
                return (
                    <div className='bg-Netflix_main bg-cover bg-center w-full h-max inset-0 '>
                    <div className=' bg-gradient-to-t from-black via-transparent to-black'>
                    <div className={`flex flex-row justify-around gap-24   text-white h-full mb-80 `}>
                        <img className='h-16' src={Netflix_Logo} alt="" />

                        <div className='flex flex-row gap-4 h-max mt-4'>
                            <div className='flex  flex-row border-2 border-gray-500 gap-2 '>
                            <img src={Netflix_Lang}  className='h-6 m-2 bg-white' alt="" />
                            <select  className='bg-black text-white'>
                                <option selected value="English">English</option> 
                                <option value="Hindi">हिन्दी</option> 
                            
                            </select>
                            </div>
                            <button className=' bg-red-700 rounded-lg text-xs pl-2 pr-2'><Link to ="/login">Sign in</Link></button>


                        </div>

                    </div >
                    <LandingContent/>
                    </div>
                    </div>
                )
                }

                export default Navbar