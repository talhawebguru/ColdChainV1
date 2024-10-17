import React from 'react'
import Image from 'next/image'
import ProfilePic from "@/public/images/profile.svg"
const ProfileCard = () => {
  return (
    <>
    <div className='py-10 px-6 bg-white rounded shadow flex flex-col items-center h-[77vh]'>
        <div className='w-24 rounded-full'>
            <Image src={ProfilePic} alt='Profile Pic' className='w-full' />
        </div>
        <h1 className="text-center text-[#212529] text-[22px] font-medium font-['Poppins'] mt-4">Jordan Blake</h1>
        <div className='mt-10 flex flex-col gap-5 w-full'>
                <div className='flex justify-between w-full gap-10  pb-4 border-b border-[#eddfff] '>
                    <h2 className="text-[#7f7f7f] text-base font-normal font-['Inter']">User Name</h2>
                    <p className="text-[#212529] text-base font-medium font-['Inter']">jordan125</p>
                </div>
                <div className='flex justify-between w-full gap-10  pb-4 border-b border-[#eddfff] '>
                    <h2 className="text-[#7f7f7f] text-base font-normal font-['Inter']">Email</h2>
                    <p className="text-[#212529] text-base font-medium font-['Inter']">jordan125@gmail.com</p>
                </div>
                <div className='flex justify-between w-full gap-10  pb-4 border-b border-[#eddfff] '>
                    <h2 className="text-[#7f7f7f] text-base font-normal font-['Inter']">Phone.no</h2>
                    <p className="text-[#212529] text-base font-medium font-['Inter']">+123456789</p>
                </div>
                <div className='flex justify-between w-full gap-10  pb-4 border-b border-[#eddfff] '>
                    <h2 className="text-[#7f7f7f] text-base font-normal font-['Inter']">Address</h2>
                    <p className="text-[#212529] text-base font-medium font-['Inter']">Street 09, South hall Service road, NY</p>
                </div>
            
        </div>

    </div>
    </>
  )
}

export default ProfileCard