import React from 'react'
import Image from 'next/image';
// import profilepic from '../../../public/images/profilepic.jpg'
import profilepic from '@/../public/images/profilepic.jpg'
const Profile = () => {
  return (
    <div>
    <div className="flex justify-center m-2 p-4">
    <div className="w-4/5">
        <div className="flex justify-center">
            <div className="w-3/5">
            <Image src={profilepic} className="max-w-full h-auto lg:block hidden"
                alt="ProfilePic"/>
            </div>
        <h2 className="text-wrap text-[1.2rem] font-mono p-4">I’m based in Lucknow, but most likely currently I am in Planet Web.</h2>
        </div>
    </div>
    </div>
    <div class="flex justify-center mt-2">
        <div class="w-4/5">
        <p class="text-[1.6rem] font-mono">
            After graduating with a degree in Computer Science, I spent time writing code and open source contributions . Over time, I became more fascinated with the Web Development and returned to it to earn an additional chunk of learning. 
        </p>
        </div>
    </div>
    </div>
  )
}

export default Profile
