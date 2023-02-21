import {Bars3Icon} from '@heroicons/react/24/solid'
import {BsHeartFill} from 'react-icons/bs'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'
//import NavLinks from './NavLinks'
//import SearchBox from './SearchBox'

const Header = () => {
  return (
    <header>
         <div className=' grid-cols-3 p-10 items-center flex justify-between'>
          <Link href={'/photos/left'}>
          <BsFillArrowLeftCircleFill className='h-10 w-10 cursor-pointer transition-all duration-250 hover:scale-110 text-rose-600'/>
          </Link>
           
            <Link href={'/'}>
              <div className='flex flex-row    items-end'>
                <h1 className='font-serif text-4xl text-center '>
                    ბებო{' '}
                      გილოცავ {' '}
                     დაბადების დღეს {' '}
                </h1>   
                
                    <BsHeartFill className='h-11 w-11 text-red-600 text-end  mx-5'/>
                    
                </div>
            </Link>
            <div className=''>
              {/*DarkModeButton*/}
              <Link href={'/photos/right'}>
                 <BsFillArrowRightCircleFill  className='h-10 w-10 cursor-pointer transition-all duration-250 
                 hover:scale-110 text-rose-600'/>
              </Link>
            </div>
         </div>
         {/*NavLinlks*/}
         
         {/*SearchBox*/}
      
    </header>
  )
}

export default Header