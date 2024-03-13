 import React from 'react'
 import {FaShoppingCart} from "react-icons/fa"
 import ezomy from "../assets/ezomy.jpg"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
 const Navbar = () => {
  const {cart} = useSelector((state)=>state)
   return (
     <div>
       <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto -z-10'>
        <NavLink to="/">
            <img src={ezomy} width="150" height="150" className='ml-5'/> 
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 gap-5'>
            <NavLink to="/">
                <p className='font-bold'>Home</p>
            </NavLink>
            <NavLink to="/cart" className="relative">
                <FaShoppingCart className='font-bold text-xl'/>
                {cart.length > 0 &&
                    <span className='absolute text-xs -top-2 -right-2 animate-bounce rounded-full bg-green-500 px-[0.2rem]'>{cart.length}</span>
                }
                
            </NavLink>
        </div>
       </nav>
     </div>
   )
 }
 
 export default Navbar
 