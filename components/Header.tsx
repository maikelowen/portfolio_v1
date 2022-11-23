import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';



type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon 
                className='opacity-40 hover:opacity-100'
                url="https://github.com/maikelowen"
                fgColor="white"
                bgColor="transparent"
            />
            <SocialIcon 
                className='opacity-40 hover:opacity-100'
                url="https://www.linkedin.com/in/miguelportillaferrero/"
                fgColor="white"
                bgColor="transparent"
            />
        </motion.div>
        <Link href="#contact"> 
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-white cursor-pointer'>
                <p className='uppercase md:inline-flex text-sm text-white opacity-40 hover:opacity-100' >Get in touch!</p>
            </motion.div>  
        </Link>
    </header>
  )
}