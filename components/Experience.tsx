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
    className='relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-lft md:flex-row justify-evenly '
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        <div className='mt-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40'>
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
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
            className='object-cover object-center mt-5 rounded-full w-15 h-15'
            src='./kubics.ico'
            alt="image"
            />
            <div className='px-20 md:px-10'>
                <h4 className='text-2xl font-light md:text-4xl'>
                    Software Developer
                </h4>
                <p className='mt-1 text-2xl font-bold'>Kubics</p>
                <p className='py-5 text-gray-300 uppercase'>July 2022 - November 2022 </p>
                <ul className='ml-5 space-y-4 text-sm list-disc md:text-lg'>
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
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
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
            className='object-cover object-center pt-10 m-5 w-15 h-15'
            src='./freelancer-logo-old.svg'
            alt="image"
            />
            <div className='px-20 md:px-10'>
             <h4 className='text-2xl font-light md:text-4xl'>
                    Software Developer
                </h4>
                <p className='mt-1 text-2xl font-bold'>Freelancer</p>
                <p className='py-5 text-gray-300 uppercase'> Jan 2022 - July 2022</p>
                <p className='mb-2 text-lg'>Projects delivered:</p>
                <ul className='ml-5 space-y-4 text-sm list-disc md:text-lg'>
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
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-0 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
/*             initial={{
                y:-100,
                opacity:0,
            }}
            transition={{ duration:1.2 }}
            whileInView={{ 
                opacity:1,
                y:0
            }}
            viewport={{ once: true}} */
            className='object-cover object-center m-10 w-15 h-15'
            src='./mafeel_v1.png'
            alt="image"
            />
            <div className='px-20 md:px-10'>
             <h4 className='text-2xl font-light md:text-4xl'>
                IT Project Manager
                </h4>
                <p className='mt-1 text-2xl font-bold'>Marfeel</p>
                <p className='py-5 text-gray-300 uppercase'>Sept 2019 - August 2022</p>
                <ul className='ml-5 space-y-4 text-sm list-disc md:text-lg'>
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
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] md:p-0 px-20 pt-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
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
            className='object-cover object-center w-15 h-15 '
            src='./optima.png'
            alt="image"
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light md:text-4xl'>
                    IT Project Manager
                </h4>
                <p className='text-2xl font-bold'>Optima</p>
                <p className='py-5 text-gray-300 uppercase'>NOV 2018 - AUG 2019</p>
                <ul className='ml-5 space-y-4 text-sm list-disc md:text-lg'>
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