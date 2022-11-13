import Link from 'next/link';
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
 
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Welcome,","<My name is Miguel/>", "This is my portfolio"],
        loop: true,
        delaySpeed: 2000,

    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <div className='z-20'>
            <h1 className='text-4xl lg:text-6xl font-semibold px-10 mb-3'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <h2 className='text-sm lg:text-lg uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
            <div className='pt-5'>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>

                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>

                </Link>

                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
            </div>
        </div>    
    </div>
  )
}