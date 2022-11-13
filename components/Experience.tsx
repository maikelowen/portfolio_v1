import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';


type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    transition={{
        duration:1.5,
    }}
    whileInView={{
        opacity:1,
    }}
    className='h-screen flex relative overflow-hidden flex-col text-lft max-w-full  md:flex-row px-10 justify-evenly mx-auto items-center '
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration:1.2 }}
            whileInView={{ 
                opacity:1,
                y:0
            }}
            viewport={{ once: true}}
            className='w-15 h-15 rounded-full  object-cover object-center mt-5'
            src='./kubics.ico'
            alt="image"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Software Developer
                </h4>
                <p className='font-bold text-2xl mt-1'>Kubics</p>
                <p className='uppercase py-5 text-gray-300'>July 2022 - November 2022 </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>
                        Design and build a full stack application for a film making company
                    </li>
                    <li>
                        Write the smart contract for the NFT collection and whitelist                    </li>
                    <li>
                        API calls to different services such as email, location or DB
                    </li>
                    <li>
                        Testing complete application as well as a smart contract
                    </li>
                </ul>
            </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration:1.2 }}
            whileInView={{ 
                opacity:1,
                y:0
            }}
            viewport={{ once: true}}
            className='w-15 h-15  object-cover object-center m-5 pt-10'
            src='./freelancer-logo-old.svg'
            alt="image"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Software Developer
                </h4>
                <p className='font-bold text-2xl mt-1'>Freelancer</p>
                <p className='uppercase py-5 text-gray-300'> Jan 2022 - July 2022</p>
                <p className='text-lg mb-2'>Projects delivered:</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>
                    NFT Marketplace                 
                    </li>
                    <li>
                    NFT Collection
                    </li>
                    <li>
                    NFT Minting DAPP
                    </li>
                    <li>
                    Crypto Exchange
                    </li>
                </ul>
            </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration:1.2 }}
            whileInView={{ 
                opacity:1,
                y:0
            }}
            viewport={{ once: true}}
            className='w-15 h-12  object-cover object-center m-10'
            src='./mafeel.png'
            alt="image"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                IT Project Manager
                </h4>
                <p className='font-bold text-2xl mt-1'>Marfeel</p>
                <p className='uppercase py-5 text-gray-300'>Sept 2019 - August 2022</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>
                        Leading a team of developers to build different PWA applications
                    </li>
                    <li>
                        Managing the onboarding of new clients
                    </li>
                    <li>
                        Defining project's scope and assigning task within the team
                    </li>
                    <li>
                        Dealing with client and other stakeholders
                    </li>
                </ul>
            </div>
        </article>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
            initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration:1.2 }}
            whileInView={{ 
                opacity:1,
                y:0
            }}
            viewport={{ once: true}}
            className='w-15 h-15 object-cover object-center '
            src='./optima.png'
            alt="image"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    IT Project Manager
                </h4>
                <p className='font-bold text-2xl'>Optima</p>
                <p className='uppercase py-5 text-gray-300'>NOV 2018 - AUG 2019</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>
                    Leading a team of developers to build online gaming platforms
                    </li>
                    <li>
                    Responsible for the complete development process
                    </li>
                    <li>
                    Managing multiple third party’s API integrations
                    </li>
                    <li>
                    Deal with clients and providers to ensure the success of the projects
                    </li>
                </ul>
            </div>
        </article>


        </div>
    </motion.div>
  )
}