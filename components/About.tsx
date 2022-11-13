import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <div className='h-screen flex flex-col relative text-center max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.div
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1,
        }}
        whileInView={{
            x: 0,
            opacity:1,
        }}
        viewport={{once: true}}
        >
        <img 
        src='https://www.kubicsnft.com/team/Miguel.jpeg' 
        alt="image" 
        className='flex-shrink-0 h-56 w-56 rounded-full object-cover mt-20' />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>A little bit of{" "} 
            <span className='underline decoration-[#F7AB0A]'> background</span>   
            </h4>
            <p className='text-sm text-justify max-w-lg'>
            I love building! Three years ago, I decided to shift my career from Project Manager to Software Developer. Since then, I love what I do and I enjoy every moment of it. Even though initially I decided to study software development only to understand more about the process of development, now I only wish to continue building new components and facing new chalenges. As a personal hobbies, I have recently built a camper van to travell around the world. Now, my next step is to build my own house.            </p>
        </div>
    </div>
  )
}