import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { UserPen } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 md:left-60 left-0 right-0 z-50 bg-[linear-gradient(to_right,var(--color-primary-1),var(--color-primary-2))]">
        <div className='flex justify-between items-center py-0 px-2'>
            <div className='p-2'>
                <button className='hover:cursor-pointer hover:scale-105'>
                    <FiSearch size={30}/>
                </button>
            </div>
            <div className='flex gap-5'>
                <div className='p-2'>
                    <button className='hover:cursor-pointer hover:scale-105'>
                       <FaRegBell size={30}/>
                    </button>
                </div>
                <div className='flex items-center gap-1'>
                    <button className='hover:cursor-pointer hover:scale-105'>
                       <UserPen size={30}/>
                    </button>
                    <button className='hover:cursor-pointer hover:scale-105'>
                       <ChevronDown size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar