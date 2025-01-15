"use client";

import { statsData } from '@/constants'
import React from 'react'
import CountUp from 'react-countup'

const Statistics = () => {
  return (
    <div className='flex items-center flex-col md:flex-row gap-2.5 md:gap-5'>
      {statsData?.map((item,index)=>(
        <div key={index} className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start'>
            <CountUp end={item?.num} duration={5} delay={2} className='text-4xl lg:text-6xl font-extrabold' />
            <p className="max-w-[100px] leading-snug text-white/80 text-sm">{item?.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics
