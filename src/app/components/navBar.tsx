// 'use client'

import Link from 'next/link'
import Image from 'next/image'
import {HiMenuAlt3} from 'react-icons/hi'
// import { useState } from 'react'


export default function MobileNav() {
    // let [view, setView] = useState(false)

    // function openView() {
    //     setView(true)
    // }

    // function closeView() {
    //     setView(false)
    // }
    return (
      // <div>
        
      // </div>
        <header className=''>
        
        <nav className='bg-white h-20 mx-auto  max-w-full flex flex-row rounded-b-lg items-center justify-between p-3 lg:px-8'>
        <div className='flex flex-row content-center justify-center mx-auto sm:mx-0'>
          <div>
            <Image className='m-2' 
            width={50} 
            height={50} 
            src='/logo_gowa.png' 
            alt='pic'/>
          </div>
          <p className='my-auto font-bold'>DESA TAMANNYELENG</p>
        </div>
        <div className='flex content-center gap-5'>
          <h2 className='text-black hover:text-red-400 hidden sm:block'>
            Web Title
          </h2>
          <Link className='text-black hover:text-red-700 hidden sm:block' href='/store'>
            Ga'de
          </Link>
            <Link className='text-black hover:text-red-700 hidden sm:block' href='/administrasi'> 
              Administrasi 
            </Link>
            {/* Mobile Menu dropdown */}
            <div className='flex content-center my-auto'>
              {/* <button>
                 <HiMenuAlt3  className='h-6 w-6 block sm:hidden'/>
              </button> */}

            </div>
        </div>

        </nav>
        <div>
                
                <div className='w-full bg-white fixed bottom-0  mb-3 sm:hidden '>
                 <ul className='flex flex-row gap-3 justify-center'>
                    <Link href='/' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>Home</li>
                    </Link>
                    <Link href='/store' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>Ga'de</li>
                    </Link>
                    <Link href='/administrasi' passHref>
                        <li className='bg-gray-300 p-2 rounded-lg text-sm'>administrasi</li>
                    </Link>
                 </ul>
            
                </div>

                 
                
              </div>
              
              
      </header>
    )
}