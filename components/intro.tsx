'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

export default function intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <motion.div className='relative'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type:"tween",
                duration: 0.2,
            }}
            >
                <Image className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' src="/1666192017788.jpeg" width="192" height="192" quality="95" priority={true} alt="Xolani Nkabinde"/>
                <span className="absolute text-4xl"></span>
            </motion.div>
        </div>
    </section>
  )
}
