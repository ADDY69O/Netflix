import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HeroNavbar from './HeroNavbar';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import '../App.css'

import Item from './Item';
import VideoHome from './VideoHome';

const Hero = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [singleM, setsingleM] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);


  const fetchMoviesByGenre = async (genre, setMovies) => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=af7d55b5492d71d9a20a7900b3225780&with_genres=${genre}`);
      setMovies(data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const data = await axios.get(`https://api.themoviedb.org/3/movie/572802/videos?api_key=af7d55b5492d71d9a20a7900b3225780`);
      console.log(data);
      setsingleM(data.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const videoObject = {
    id: "65b730280fb17f017b34308f",
    iso_639_1: "en",
    iso_3166_1: "US",
    key: "41NUykFTZpQ",
    name: "Escape from Deserter World",
    official: true,
    published_at: "2024-01-27T15:00:05.000Z",
    site: "YouTube",
    size: 1080,
    type: "Behind the Scenes",
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % horrorMovies.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + horrorMovies.length) % horrorMovies.length
    );
  };


  useEffect(() => {
    fetchMoviesByGenre(28, setActionMovies); // Genre ID for Action
    fetchMoviesByGenre(27, setHorrorMovies); // Genre ID for Horror
    fetchMoviesByGenre(35, setComedyMovies); // Genre ID for Comedy
    fetchMoviesByGenre(16, setTrendingMovies); // Genre ID for Animation
    fetchMoviesByGenre(18, setPopularMovies); // Genre ID for Drama
    fetchVideo();
  }, []);

  return (
    <div className='bg-black text-white '>

      <HeroNavbar />
      <div className=" relative mb-20  h-1/3">
    <div className=' absolute bottom-40 left-20 flex flex-col gap-4 w-1/3 '>

  <h1 className=' text-4xl font-bold  text-wrap'>{videoObject.name}</h1>
  <p className='text-xl font-semibold text-wrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius amet quibusdam porro, quo officiis, similique nulla earum ea veritatis eligendi mollitia debitis possimus tempora nemo consectetur sequi recusandae maxime rerum.</p>
      <div className='flex flex-row gap-5 '>
        <button className=' text-black bg-white w-28 h-20 font-bold text-xl flex items-center rounded-lg '> <FaPlay size={40} className='ml-2 mr-2' /> Play</button>
        <button className='text-white bg-gray-600 w-40 h-20 font-bold text-xl flex items-center rounded-lg'> <IoIosInformationCircleOutline size={40} className='ml-2 mr-2' />  More Info</button>
      </div>
    </div>


  <iframe
    className="w-full h-1/3 aspect-video "
    src={`https://www.youtube.com/embed/${videoObject.key}?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=0`}
    title="YouTube video player"
    allow="autoplay; "
    controls="0"
    allowFullScreen
  ></iframe>
</div>





     

        <h2 className='text-2xl mt-20 font-bold text-white'>Action Movies</h2>
        {actionMovies && (
  <div id='action' className='flex flex-row  mb-20  overflow-x-scroll  overflow-y-hidden no-scrollbar  '>
    <div className='flex'>
    {actionMovies.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    </div>
  </div>  
)}



<h2 className='text-2xl mt-20 font-bold text-white'>Horror Movies</h2>
        {horrorMovies && (
  <div id='action'  className='flex flex-row  mb-20  overflow-x-scroll  overflow-y-hidden  '>
    <div className='flex'>
    {horrorMovies.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    </div>
  </div>  
)}
<h2 className='text-2xl mt-20 font-bold text-white'>Comedy Movies</h2>
        {comedyMovies && (
  <div id='action'  className='flex flex-row  mb-20  overflow-x-scroll  overflow-y-hidden  '>
    <div className='flex'>
    {comedyMovies.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    </div>
  </div>  
)}
<h2 className='text-2xl mt-20 font-bold text-white'>Trending Movies</h2>
        {trendingMovies && (
  <div id='action'  className='flex flex-row  mb-20  overflow-x-scroll  overflow-y-hidden  '>
    <div className='flex'>
    {trendingMovies.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    </div>
  </div>  
)}
<h2 className='text-2xl mt-20 font-bold text-white'>Popular Movies</h2>
        {popularMovies && (
  <div id='action'  className='flex flex-row    overflow-x-scroll  overflow-y-hidden  '>
    <div className='flex'>
    {popularMovies.map((item) => (
      <Item key={item.id} item={item} />
    ))}
    </div>
  </div>  
)}

      
    </div>
  );
};

export default Hero;
