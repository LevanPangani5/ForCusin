import Image from 'next/image'
import React from 'react'
import img1 from '../../../assets/5.jpg'
import img2 from '../../../assets/6.jpg'
import img3 from '../../../assets/7.jpg'

const page = () => {
  return (
    <div className='flex felx-row justify-between  column-4 w-full'>
      
    <div className=' flex felx-col     justify-center items-center'>
      
     <Image className=' rounded-xl m-5' src={img2} alt=''style={{height:300,width:500}}/>
   </div>
   <div className=' flex felx-col flex-1 justify-center '>
       <Image className=' rounded-full m-5' src={img3} alt='' style={{height:450,width:350}}/>

   </div>
    
  </div>
  )
}

export default page