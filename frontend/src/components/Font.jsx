import React from 'react'
import Slider from "react-slick";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className='  min-h-screen py-20  dark:bg-slate-800 dark:text-white'>
    <div className='text-green-500 text-4xl font-bold text-center'>
        gfdy
    </div>
    </div>
    <Slider {...settings}>
                      
                    </Slider>
    </>
  )
}

export default Home
