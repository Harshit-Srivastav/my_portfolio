'use client'
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import { TwitterIcon } from './TwitterIcon'; // Ensure you have the TwitterIcon component or inline SVG
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import GithubImage from '../../../public/images/github.png'
import GithubImage from '@/../../public/images/github.png'
import Image from 'next/image';
import Projects from './Projects';
import ContactForm from './Contacts';

const roboto = Roboto({
  weight: ['400', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


const Header = () => {
  return (
    <div className="">
      <style jsx>{`
        html, body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between p-4 items-center text-white mt-3">
      <div className="lg:w-auto">
      <Link href="/" className="font-light font-mono text-[2rem] text-center lg:text-left ">Harshit Srivastava</Link>
      </div>
        <div className="hidden lg:flex space-x-4 font-mono text-[1.2rem]">
          <Link href="#my_projects">Lookbook</Link>
          {/* <Link href="/about">Blog</Link> */}
          <Link href="#my_contacts">Contact</Link>
          {/* <Link href="/contact">Login</Link> */}
          {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="w-6 h-6 text-blue-500" />
          </a> */}
          <Link href="https://github.com/Harshit-Srivastav/" passHref>
          
              {/* Option 1: Using SVG */}
              <Image src={GithubImage} alt="GitHub" width={24} height={24} />
              {/* Option 2: Using Font Awesome */}
              {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
  
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
