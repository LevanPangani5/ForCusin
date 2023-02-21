import Image from 'next/image'
import React from 'react'

import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

const page = () => {
  return (
    <div className='flex felx-row justify-between items-center'>
      
    <div className=' flex felx-col   justify-center '>
       <Image className=' rounded-full m-5' src={img2} alt='' style={{height:450,width:450}}/>
    
   </div>
   <div className=' flex felx-col justify-center '>
       <Image className=' rounded-full m-5' src={img3} alt='' style={{height:400,width:400}}/>

   </div>
    
  </div>
  )
}

export default page