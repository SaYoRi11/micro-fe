import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  const hover={
    color: 'gray', 
    scale: 1.1
  }
  return (
    <div className='text-3xl text-white p-5 bg-black text-center flex gap-4'>
      <Link to='/'>
        <motion.p whileHover={hover} className='cursor-pointer'>Home</motion.p>
      </Link>
      <Link to='/products'>
        <motion.p whileHover={hover} className='cursor-pointer'>Products</motion.p>
        </Link>
    </div>
  )
}
