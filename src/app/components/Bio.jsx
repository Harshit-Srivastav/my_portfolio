'use client'
import Link from 'next/link'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  weight: ['400', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  })
   
 const roboto_mono = Roboto_Mono({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  })


const Bio = () => {
  return (
    <div>
   <style jsx>{`
        html, body {
          font-family: ${roboto_mono.style.fontFamily};
        }
      `}</style>
   <div>
  <div class="flex justify-center mt-2">
  <div class="w-4/5">
  <p class="text-[2rem] font-mono">
      My name is Harshit Srivastava. I am Web Developer and Open Source Enthusiast. I’m currently working on my portfolio.
       
      <br/>
      <em className="text-[1.2rem]">I’m currently available for <span className="text-emerald-600">FTE & consulting engagements.</span></em>
    </p>
  </div>
</div>
</div>
    </div>
  )
}

export default Bio
