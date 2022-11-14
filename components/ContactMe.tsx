import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}

function ContactMe({}: Props) {

const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = formData => (
    window.location.href = `mailto:mportillaferrero@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
);

  return (
    <div className='w-full h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact 
        </h3>
        <div className='flex flex-col space-y-10 relative top-20'>
            <h4 className='xs:text-1xl text-2xl font-semibold text-center'>
                Tell me more about your project. {" "}
                <span className='underline decoration-[#F7AB0A]/50'>
                    Let's talk!
                </span>
            </h4>
            <div className='space-y-5'>
                
                <div className='flex items-center space-x-5 '>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '/> 
                <p className='text-1xl'>+34650639467</p>
                </div>
                <div className='flex items-center space-x-5 '>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '/> 
                <p className='text-1xl'>mportillaferrero@gmail.com</p>
                </div>
                <div className='flex space-x-5 '>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse '/> 
                <p className='text-1xl'>Spain</p>
                </div>  

                <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-12/12 mx-auto'>
                    <div className='flex space-x-2'>
                        <input 
                        {...register('name')}
                        placeholder='Name'
                        className='contactInput w-6/12' type="text" />
                        <input 
                        {...register('email')}
                        placeholder='Email'
                        className='contactInput w-6/12' type="email"/>
                    </div>
                    <input 
                    {...register('subject')}
                    placeholder='Subject'
                    className='contactInput' type="text"/>
                    <textarea 
                    {...register('message')}
                    placeholder='Message'
                    className='contactInput'/>
                    <button 
                    type='submit'
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default ContactMe