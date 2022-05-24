import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className='text-3xl text-white p-5 bg-black text-center'>
        <motion.p whileHover={{color: 'gray', scale: 1.1}} className='cursor-pointer'>Footer</motion.p>
    </div>
  )
}
