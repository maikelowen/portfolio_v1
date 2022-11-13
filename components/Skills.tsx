import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {
  directionLeft?: boolean; 
}


function Skills({directionLeft}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }} 
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over the skill to see the level
        </h3>
        <div className='grid grid-cols-4 gap-5 pt-[10%]'>
          {/* JavaScript */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="js.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          75%
                      </p>
                  </div>
              </div>
            </div>
          {/* React */}
          <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="React.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          60%
                      </p>
                  </div>
              </div>
            </div>
          {/* Next */}
          <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="nextjs.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          80%
                      </p>
                  </div>
              </div>
            </div>
             {/* Tailwindcss */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="tailwindcss.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          60%
                      </p>
                  </div>
              </div>
            </div>
          {/* Solidity */}
          <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="solidity.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          80%
                      </p>
                  </div>
              </div>
            </div>

            {/* hardhat */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="hardhat.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          75%
                      </p>
                  </div>
              </div>
            </div>

          {/* Java */}
          <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="java.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          70%
                      </p>
                  </div>
              </div>
            </div>
          {/* Android Studio */}
          <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="androidstudio.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          50%
                      </p>
                  </div>
              </div>
            </div>
            {/* Node js */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="nodejs-logo.svg"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          65%
                      </p>
                  </div>
              </div>
            </div>
            {/* My SQL */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="mysql-logo.svg"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          50%
                      </p>
                  </div>
              </div>
            </div>
            {/* Mongo  */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="mongo.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          60%
                      </p>
                  </div>
              </div>
            </div>
            {/* Sanity */}
            <div className='group relative flex cursor-pointer'>
              <motion.img
              initial={{
                  x: directionLeft ? -100 : 100,
                  opacity:0
              }}
              transition={{ duration: 1}}
              whileInView={{ opacity: 1, x:0}}
              src="sanity.png"
              className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out '
              />
              <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
                  <div className='flex items-center justify-center h-full'>
                      <p className='text-3xl font-bold text-black opacity-100'>
                          50%
                      </p>
                  </div>
              </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills