import MobileNav from './components/navBar'
// import Image from 'next/image'
// import Link from 'next/link'
// import {HiMenuAlt3} from 'react-icons/hi'


export default function Home() {
  
  return (
    <main className="">
      
      
      <MobileNav/>
      <div className='bg-yellow-400 min-h-screen max-w-6xl mx-auto rounded-t-3xl pt-3 pb-3'>
        <div className=' sm:flex sm:flex-row sm:max-w-lg grid bg-gray-300 justify-between content-center p-4 mt-5 mx-4 rounded-lg drop-shadow-lg'>
            <img className='rounded-md shadow ' src="https://awsimages.detik.net.id/community/media/visual/2023/06/20/ultah-jokowi-hari-ini-simak-lagi-biografi-joko-widodo-lengkap-1_169.jpeg?w=1200" alt="" />
            <div className='text-black text-center text-lg'>Kata Pengantar Kades</div>
        </div> 
        <div className='bg-gray-400 mt-3'>
          <p className='mx-5 pt-3 font-bold'>Konten atau produk</p>
          <div className='flex flex-row overflow-x-auto  justify-between mx-5 gap-3 pb-3'>
            <div className='basis-1/4 flex-shrink-0 bg-white max-w-sm mt-5 rounded-md shadow-lg'>
              <img className='rounded-t-md w-full' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt=""></img>  
              <div className='text-sm'>
                <p>deskripsi</p> 
              </div>
                      
            </div>
            <div className='basis-1/4 flex-shrink-0 bg-white content-center max-w-sm mt-5 rounded-md shadow-lg'>
              <img className='rounded-t-md' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
              <p>ini</p>
            </div>
            <div className='basis-1/4 flex-shrink-0 bg-white content-center max-w-sm mt-5 rounded-md shadow-lg'>
              <img className='rounded-t-md' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
              <p>ini</p>
            </div>
            <div className='basis-1/4 flex-shrink-0 bg-white content-center max-w-sm mt-5 rounded-md shadow-lg'>
              <img className='rounded-t-md' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
              <p>ini</p>
            </div>     
          </div>          
        </div>
      </div> 
    </main>
  )
}
