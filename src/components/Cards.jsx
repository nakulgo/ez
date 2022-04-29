import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            
              <h2 className='text-2xl font-bold text-center py-8'>Single Family Homes</h2>
              <p className='text-center text-4xl font-bold'>from $</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Point 1</p>
                  <p className='py-2 border-b mx-8'>Point 2</p>
                  <p className='py-2 border-b mx-8'>Point 3</p>
              </div>
              <button className='bg-[#A020F0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            
              <h2 className='text-2xl font-bold text-center py-8'>Multi Family</h2>
              <p className='text-center text-4xl font-bold'>from $</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Point 1</p>
                  <p className='py-2 border-b mx-8'>Point 2</p>
                  <p className='py-2 border-b mx-8'>Point 3</p>
              </div>
              <button className='bg-[#A020F0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            
              <h2 className='text-2xl font-bold text-center py-8'>Mid-rise Family</h2>
              <p className='text-center text-4xl font-bold'>from $</p>
              <div className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'>Point 1</p>
                  <p className='py-2 border-b mx-8'>Point 2</p>
                  <p className='py-2 border-b mx-8'>Point 3</p>
              </div>
              <button className='bg-[#A020F0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;