import React from 'react'
import tshirt1 from '../static/images/luffy.jpg'
import tshirt2 from '../static/images/nezuko.png'
import tshirt3 from '../static/images/sukuna.png'
import tshirt4 from '../static/images/toga.png'
import tshirt5 from '../static/images/zoro.png'
import tshirt6 from '../static/images/yuji.png'
import { motion } from 'framer-motion'

const products = [{
    'id':1,
    'name': 'Luffy Tshirt',
    'fabric': 'Cotton',
    'price': 799,
    'image': tshirt1 
  },
  {
    'id':2,
    'name': 'Nezuko Tshirt',
    'fabric': 'Cotton',
    'price': 999,
    'image': tshirt2  
  },
  {
    'id':3,
    'name': 'Sukuna Tshirt',
    'fabric': 'Nylon',
    'price': 1699,
    'image': tshirt3  
  },
  {
    'id':4,
    'name': 'Toga Tshirt',
    'fabric': 'Cotton',
    'price': 2799,
    'image': tshirt4  
  },
  {
    'id':5,
    'name': 'Zoro Tshirt',
    'fabric': 'Silk',
    'price': 3299,
    'image': tshirt5  
  },
  {
    'id':6,
    'name': 'Yuji Tshirt',
    'fabric': 'Cotton',
    'price': 1799,
    'image': tshirt6  
  },

]

const hover = {
  scale: 1.1, 
  fontWeight: 600
}

export default function ProductsContent() {
  
  return (
    <div className='p-5 flex flex-col'>
        <h1 className='font-bold border-b-2 p-3'>Tshirts</h1>
        <div className='grid grid-cols-4 gap-6 mt-3 p-3'>
            {products.map(product => {
              return  <motion.div 
                        className='border-black border-2 rounded-lg p-2 text-center text-xl flex flex-col justify-center cursor-pointer' 
                        key={product.id}
                        whileHover={{
                          scale: 1.05,
                          borderRadius: '20px',
                        }}
                        whileTap={{
                          scale: 1.1
                        }}
                        drag='x'
                        dragConstraints={{
                          left: 100,
                          right: 100
                        }}
                      >
                        <img src={product.image} className='h-full w-full mb-2'></img>          
                        <motion.p whileHover={hover} className='font-semibold'>{product.name}</motion.p>
                        <motion.p whileHover={hover}>{product.fabric}</motion.p>
                        <motion.p whileHover={hover}>Rs. {product.price}</motion.p>
                      </motion.div>
                })}
        </div>
    </div>
  )
}
