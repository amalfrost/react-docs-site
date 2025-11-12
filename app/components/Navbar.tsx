import React from 'react'
import { SiReactivex } from "react-icons/si";
import { Link } from 'react-router';


const Navbar = () => {
  return (
    <nav className='bg-gray-700 w-full h-12 flex justify-between items-center p-2 pr-2.5 ' >
<SiReactivex className="text-2xl text-red-800 animate-spin-slow" />


<ul className='flex  justify-between items-center gap-6 ' >
    <Link to='/home'>Home</Link>
    <Link to='/docs'>Docs</Link>
    <Link to='/examples'>Examples</Link>
</ul>
    </nav>
  )
}

export default Navbar