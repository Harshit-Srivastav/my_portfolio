import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className="font-mono" id="my_projects">
    <h1 className="text-[2rem] p-4 text-center">Projects</h1>
    <h4 className="text-center text-[1.3rem]">Projects that I have worked recently </h4>
    <div className="flex justify-center">
        <div className="w-4/5">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 m-2 ">
                <div>
                    <h2 className="text-[1.5rem]">Blog Application</h2>
                    <p className="text-[1.1rem] leading-loose tracking-tight">It is a application project of Blog Application which supports user authentication, allow individuals to create accounts and securely login to contribute their unique content.It follows a responsive UI for both bloggers and readers alike.
                    </p>
                    <Link href="#" className="text-purple-500">Github - [Django, Python, SQL, Bootstrap]</Link>
                </div>
                <div>
                    <h2 className="text-[1.5rem]">Expense Tracker
                    </h2>
                    <p className="text-[1.1rem] leading-loose tracking-tight">It is a application project of Expense tracker for keeping track of income and expenses. It uses functional components with hooks and context API.
                    </p>
                    <Link href="#" className="text-purple-500">Github - [Next.js, React.js, TailwindCSS, CSS]</Link>
                </div>
                <div>
                    <h2 className="text-[1.5rem]">Chat Application</h2>
                    <p className="text-[1.1rem] leading-loose tracking-tight">
                    Its a application project of real time chat
                    application in Node.js.The chat-app uses
                    socket.io library so that users can join a
                    room, send messages and geolocation
                    information to individuals in that specific room.
                    </p>
                    <Link href="#" className="text-purple-500">Github - [Node.js, Socket.io, Express.js, JavaScript, HTML, CSS]</Link>
                </div>
                <div>
                    <h2 className="text-[1.5rem]">Ecommerce App</h2>
                    <p className="text-[1.1rem] leading-loose"> Its a application project of ecommerce
                    application .The ecommerce app has features robust authentication and comprehensive ecommerce functionalities such as authentication and seamless shopping experience.
                    </p>
                    <Link href="#" className="text-purple-500">Github - [Node.js, React.js, MongoDB, TailwindCSS]</Link>
                </div>
            </div>
        </div>
    </div>
    
</div>

  )
}

export default Projects
