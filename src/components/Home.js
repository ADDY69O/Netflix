    import React from 'react'
    import netFlix_Tv from "../assets/netFlix_Tv.png"
    import netFlix_Phone from "../assets/Netflix_Phone.jpg"
    import Netflix_ipad from "../assets/Netflix_ipad.png"
    import netFlix_Phone_strange from "../assets/Netflix_Phone_logo.png"
    import Netflix_Children from "../assets/Netflix_Children.png"
    import Netflix_download_icon from "../assets/Netflix_download_icon.gif"


    import videoTv from "../assets/video-tv-in.m4v"
    import videoTvLoad from "../assets/Netflix_video_load.m4v"
import { Link } from 'react-router-dom'
    const Home = () => {
    return (
        <div className='bg-black text-white flex flex-col justify-center items-center text-center   '>


            <div className='flex flex-row gap-1 mt-20 mb-40 '>
                <div className='flex flex-col justify-center text-wrap items-center '>
                    <h1 className='text-4xl font-bold'>Enjoy on your TV</h1>
                    <h3 className='text-xl font-bold'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
                <div className='relative'>
                    <img src={netFlix_Tv} className='absolute ' alt="" />
                    <video src={videoTv} className=' p-2  ' loop  autoPlay muted   ></video>
                
                </div>
            </div>
         
            <div className='flex flex-row gap-1 mt-20 mb-40 '>
                <div className='relative'  >
                    <img src={netFlix_Phone} className=' ' alt="" />
                    <div className=' absolute top-80 right-40 flex flex-row bg-black text-white h-28  p-2 border-2 border-white w-max'>

                    <img src={netFlix_Phone_strange} className=' '  autoPlay muted   />
                    <div className=' p-2'>
                        <p className='text-xl font-bold'>Strange Things</p>
                        <p className=' font-bold text-blue-700'>Downloading...</p>
                    </div>

                    <img src={Netflix_download_icon}/>
                    </div>
                    </div>
                <div className='flex flex-col justify-center text-wrap items-center '>
                    <h1 className='text-4xl font-bold'>Download your shows to watch offline</h1>
                    <h3 className='text-xl font-bold'>Save your favourites easily and always have something to watch.</h3>
                </div>
                
            
            </div>
           
            <div className='flex flex-row gap-1 mt-20 mb-40 '>
                <div className='flex flex-col justify-center text-wrap items-center '>
                    <h1 className='text-4xl font-bold'>Watch everywhere</h1>
                    <h3 className='text-xl font-bold'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
                <div className='relative'>
                    <img src={Netflix_ipad} className='absolute overflow-hidden  ' alt="" />

                    <video src={videoTvLoad} className='ml-20 mt-8 p-2  overflow-hidden w-4/5  ' loop  autoPlay muted   ></video>
                
                </div>
            </div>



            <div className='flex flex-row gap-1 mt-20 mb-40 m-40 '>
                <div className=''  >
                    <img src={Netflix_Children} className=' ' alt="" />
                   
                    </div>
                <div className='flex flex-col justify-center '>
                    <h1 className='text-4xl font-bold'>Create profiles for kids</h1>
                    <h3 className='text-xl font-bold'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </div>
                
            
            </div>

            
            <div className="flex text-xs flex-col mt-20  justify-start   bg-black text-white opacity-80 gap-9 ">
          <p className="mt-20  text-white" >
            Questions? Call <Link className="underline">000-800-100-8343</Link>
          </p>
          <div className="flex flex-row  gap-56 text-white ">
            <Link className="underline">FAQ</Link>
            <Link className="underline">Help Centre</Link>
            <Link className="underline">Terms of Use</Link>
            <Link className="underline">Privacy</Link>
          </div>
          <div className="flex flex-row  gap-36 mb-20 text-white">
            <Link className="underline">Cookie Preferences</Link>
            <Link className="underline">Corporate Information</Link>
          </div>
          
    </div>
        
        
        
        </div>
    )
    }

    export default Home