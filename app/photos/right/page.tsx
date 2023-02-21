import Image from 'next/image'
import React from 'react'
import img1 from '../../../assets/8.jpg'
import img2 from '../../../assets/9.jpg'
import img3 from '../../../assets/10.jpg'

const page = () => {
  return (
    <div className='flex felx-row justify-between'>
      
      <div className=' flex felx-col    justify-between '>
         <Image className='rounded-full m-5' src={img1} alt='' style={{width:500}}/>
      
     </div>
     <div className=' flex felx-col flex-1 justify-center'>
         <Image className='w-15 h-15 rounded-full m-5' src={img3} alt=''/>

     </div>
      
    </div>
  )
}

export default page