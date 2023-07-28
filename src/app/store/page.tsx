import {FaHome, FaPlus} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import {prisma}  from '../../../route'


export default async function Page() {

    const post = await prisma.post.findMany({
        where: { published: true, },
    })
    return (
        <div className="min-h-screen">
            {/* navbar & search box */}
            <div className="flex flex-row m-3 items-center gap-3 justify-between">
                <input className="bg-gray-100 rounded-md w-30 sm:w-1/3 sm:mx-auto" type="text" placeholder='cari barang disini' />
                <Link href="/" passHref>
                    <FaPlus className='w-5 h-5'></FaPlus>
                </Link>
                <Link  href="/" passHref>
                    <FaHome className='w-7 h-7'></FaHome>
                </Link>
                {/* <a href="/">
                    <img className='w-8 h-8 rounded-full' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                </a>                 */}
                {/* /<img className='w-8 h-8 rounded-full' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" /> */}

            </div>
            {/* Item List */}
            <div className='flex flex-row flex-wrap justify-center gap-4 max-w-full '>
            {post.map((item)=>
                <div className='basis-2/5 sm:basis-1/6 bg-white shadow-lg rounded-xl'>
                    <img className='rounded-t-xl object-cover w-full max-h-36' src={item.content} alt="" />
                    <p className='p-2'>{item.title}</p>
                    <p className='p-2 '>{item.kontak}</p>
                </div>
                // {/* <div className='basis-2/5 sm:basis-1/6 bg-white shadow-lg rounded-xl'>
                //     <img className='rounded-t-xl' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                //     <p>deskripsi produk</p>
                //     <p>Kontak Penjual</p>
                // </div> */}
                // {/* <div className='basis-2/5 sm:basis-1/6 bg-white shadow-lg rounded-xl'>
                //     <img className='rounded-t-xl' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                //     <p>deskripsi produk</p>
                //     <p>Kontak Penjual</p>
                // </div>
                // <div className='basis-2/5 sm:basis-1/6 bg-white shadow-lg rounded-xl'>
                //     <img className='rounded-t-xl' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                //     <p>deskripsi produk</p>
                //     <p>Kontak Penjual</p>
                // </div>
                // <div className='basis-2/5 sm:basis-1/6 bg-white shadow-lg rounded-xl'>
                //     <img className='rounded-t-xl' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                //     <p>deskripsi produk</p>
                //     <p>Kontak Penjual</p>
                // </div> */}
                )}
                </div>                

        </div>
    )
}