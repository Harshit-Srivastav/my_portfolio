import React from 'react'

const TechStack = () => {
  return (
 <div className="font-mono p-2">  
    <div className="flex justify-center m-3" >
      <div className="w-3/5">
      <h2 className="text-center text-[2rem] p-2 m-2">Tech, I am Working</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  <div className="p-4 bg-blue-600 shadow-md rounded-xl">
    <h2 className="text-white-500 text-xl font-bold mb-4">Languages</h2>
    <p className="text-white-400">Python, JavaScript, TypeScript, PHP</p>
  </div>


  <div className="p-4 bg-blue-600 shadow-md rounded-xl">
    <h2 className="text-white-500 text-xl font-bold mb-4">Backend</h2>
    <p className="text-white-400">Node.js, Django</p>
  </div>


  <div className="p-4 bg-blue-600 shadow-md rounded-xl">
    <h2 className="text-white-500 text-xl font-bold mb-4">Frontend</h2>
    <p className="text-white-400">Next.js, React.js, TailwindCSS, BootStrap</p>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default TechStack
