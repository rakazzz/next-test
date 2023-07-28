import BottomNav from './components/bottomNav'
import MobileNav from './components/navBar'
import Image from 'next/image'
import SlideContent from './components/homeContent'
// import Link from 'next/link'
// import {HiMenuAlt3} from 'react-icons/hi'


export default async function Home() {
  
  return (
    <main className="">
      
      
      <MobileNav/>
      <div className='bg-yellow-400 min-h-screen max-w-6xl mx-auto rounded-t-3xl pt-3 pb-3'>
        <div className=' justify-center p-4 mt-5 mx-4 rounded-lg drop-shadow-lg'>
          <div className='sm:flex sm:flex-row sm:max-w-md'>
            <img className='rounded-md shadow-xl object-center mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Adnan_Purichta_Ichsan%2C_Bupati_Gowa_%28Periode_II%29.png" alt="" />
            <p className='pt-4 text-white text-3xl font-extrabold'>Website Desa Tamannyeleng</p>            
            <p className='pt-4 text-white text-md font-medium'>
              Desa Tamannyeleng merupakan desa yang terletak di Kecamatan Barombong Kabupaten Gowa dengan jumlah penduduk sekitar 5000 jiwa</p>            
          </div>



        </div>           
        <div className='bg-white p-4 mt-5'>
          <p className='text-2xl font-extrabold pb-3'>Profil Desa</p>
          <img
          className='w-100 h-100'
          alt='foto kantor'
          src='https://asset-2.tstatic.net/tangerang/foto/bank/images/Kantor-Lurah-Lengkong-Gudang.jpg'
          />
          asa
        </div>
        <div className='bg-gray-400 mt-3'>
          <p className='mx-5 pt-3 font-bold'>Konten atau produk</p>
          <SlideContent />
          {/* <div className='flex flex-row overflow-x-auto  justify-between mx-5 gap-3 pb-3'>
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
          </div>           */}
        </div>
      </div> 
      {/* <BottomNav></BottomNav>     */}

    </main>
  )
}
