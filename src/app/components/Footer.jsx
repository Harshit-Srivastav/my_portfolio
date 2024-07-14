import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="3/5">
           <p className="text-[1.2rem] font-mono m-2 p-2">Developed by Harshit Srivastava</p>
           <p className="text-[2rem] font-mono m-2 p-2">Questions? <span className="text-[1.2rem] font-extralight font-mono ">Feel Free to reach out 😊</span></p>
            <a href="/resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline m-2 p-2 font-mono" download>Resume</a>
           <p className="text-[1.5rem] font-mono m-2 p-2">Made with Next.js. </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
