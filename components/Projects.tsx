import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col tex-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 z-20'>
                {/* Projects */}

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 h-[100%] rounded-lg'
                    src='../DreamHub.gif' 
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 1:
                            </span>
                            {" "} DreamHub
                        </h4>
                        <p className='text-lg md:text-left text-justify'>
                            NFT Marketplace. Web app built to create, buy and sell NFTs from different collections under Polygon blockchain.
                        </p>
                    </div>
                </div>
                
                {/* Projects */}

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 h-[100%] rounded-lg'
                    src='../kubics.gif'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 2:
                            </span>
                            {" "} Kubics
                        </h4>
                        <p className='text-lg md:text-left text-justify'>
                            NFT full stack application. Connected to a Mongo DB in the cloud for internal managment, and to a Smart Contract under Ethereum blockchain to generate and mint the NFT collection. 
                        </p>
                    </div>
                </div>
                            
                {/* Projects */}

                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 h-[100%] rounded-lg'
                    src='../KryptoDeskFoto.jpeg'
                    alt=''
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 3:
                            </span>
                            {" "} KryptoDesk
                        </h4>
                        <p className='text-lg md:text-left text-justify'>
                            Crypto Exchange web app. Built to send and receive crypto payments in different blockchains among an organization                        </p>
                    </div>
                </div>
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
        </div>
    </div>
  )
}

export default Projects