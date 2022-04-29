import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#ffffff] font-bold p-1'>
          Invest in your future
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
         Real estate investment opportunities for your budget made possible 
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Using the latest tech -
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['NFT','Web3','Blockchain']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Completely transparent use of funds, made possible with the blockchain</p>
        <button className='bg-[#A020F0] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;