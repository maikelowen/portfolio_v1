import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3]
  return (
    <div className='relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden tex-left md:flex-row justify-evenly'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='relative mt-20 w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 z-20'>
                {/* Projects */}
                <div className='flex flex-col items-center justify-start flex-shrink-0 w-screen h-screen p-4 space-y-5 snap-center md:p-44'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 rounded-lg'
                    src='../DreamHub.gif' 
                    alt=''
                    />
                    <div className='max-w-6xl space-y-10 md:px-10'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 1:
                            </span>
                            {" "} DreamHub
                        </h4>
                        <p className='px-6 text-lg text-justify md:text-left'>
                            NFT Marketplace. Web app built to create, buy and sell NFTs from different collections under Polygon blockchain.
                        </p>
                    </div>
                </div>
                
                {/* Projects */}

                <div className='flex flex-col items-center justify-start flex-shrink-0 w-screen h-screen p-4 space-y-5 snap-center md:p-44'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 rounded-lg'
                    src='../kubics.gif'
                    alt=''
                    />
                    <div className='max-w-6xl px-6 space-y-10 md:px-10'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 2:
                            </span>
                            {" "} Kubics
                        </h4>
                        <p className='text-lg text-justify md:text-left'>
                            NFT full stack application. Connected to a Mongo DB in the cloud for internal managment, and to a Smart Contract under Ethereum blockchain to generate and mint the NFT collection. 
                        </p>
                    </div>
                </div>
                            
                {/* Projects */}

                <div className='flex flex-col items-center justify-start flex-shrink-0 w-screen h-screen p-4 space-y-5 snap-center md:p-44'>
                    <motion.img
                    initial={{
                        y:-300,
                        opacity:0,
                    }}
                    transition={{ duration:1.2}}
                    whileInView={{ opacity:1, y:0}}
                    viewport={{once: true}}
                    className='mt-24 rounded-lg'
                    src='../KryptoDeskFoto.jpeg'
                    alt=''
                    />
                    <div className='max-w-6xl px-6 space-y-10 md:px-10'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className=' underline decoration-[#F7AB0A]/50'>
                                Case of Study 3:
                            </span>
                            {" "} KryptoDesk
                        </h4>
                        <p className='text-lg text-justify md:text-left'>
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