import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HomeContent() {
  const headingVariant = {
    initial: {
      opacity: 0.1,
      x: '-100vw'
    },
    animate: {
      opacity: [0.3, 0.9, 1],
      x: 0,
      transition: {
        delay: 1,
      },
      
    },
    hover: {
      scale: 1.1
    },
    drag: {
      color: 'gray'
    },
    tap: {
      scale: 1.15
    }
  }

  const textVariant = {
    intital: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 2
      }
    },
    
  }

  return (
    <div className='p-5 h-screen flex justify-center items-center flex-col'>
      <motion.div 
        className='p-0 m-0 text-9xl'
        variants={headingVariant}
        initial='initial'
        animate='animate'
        whileHover='hover'
        whileDrag='drag'
        whileTap='tap'
        drag
        dragConstraints={{
          "left": 50,
          "right": 50,
          "top": 10,
          "bottom": 10
        }}
    
      >
          UKIYO-E
      </motion.div>
      <div 
        className='mt-10 p-5 text-center'
        >
        <motion.p 
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition= {{
              delay: 2
            }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </motion.p>
        <Link to='/products'>
          <motion.button
          className='mt-10 mb-0 p-3 bg-black text-white rounded-lg'
            initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 2.5
                }
              }}

              whileHover={{
                scale: 1.1,
                backgroundColor: 'gray',
                borderRadius: '20px'
              }}
          >
            View Our Products
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
