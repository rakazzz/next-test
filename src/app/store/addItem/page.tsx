// 'use client'
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link';
// import axios from 'axios';
// import {useState} from 'react'
import {prisma} from "@/../route"
// import {NumericFormat} from 'react-number-format';
import { revalidatePath } from 'next/cache';
import Handle from '@/app/components/uploadAction'

export default function Page() {
    // const preset_key = "hyidm3qm"
    // const cloud_name = "dlunh7tzm"

    // function handleFile(event : any) {
    //     const file = event.target.files[0]
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     formData.append('upload_preset', preset_key)
    //     axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }

    async function addData(dataF: FormData) {
        'use server'
        const linkwa = `https://wa.me/+62${dataF.get("kontak") as string}`
        const form = await prisma.post.create({
            data:{
                title: dataF.get('title') as string,
                price: dataF.get('price') as string,
                content: dataF.get('urlImg') as string,
                kontak: linkwa,
                // kontak: dataF.get('kontak') as string,
            }
        })
        revalidatePath('/store')


    }
    return (
        <div className="min-h-screen">
            <div className='flex flex-row content-center p-4'>
                <Link href="/store">
                    <HiArrowSmLeft className='h-6 w-6 text-black hover:text-gray-300' />
                </Link>
                <h1 className="font-bold text-center">Tambah Produk Kamu</h1>
            </div>


            <form className='mx-auto w-full max-w-lg p-3' action={addData}>
                <div className='flex flex-col'>
                    <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Nama Produk</label>
                        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="text" name="title" />
                    </div>
                    {/* <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Harga Produk</label>
                        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="number" name="price" />
                    </div> */}
                    {/* <div className='flex flex-wrap mx-4 mb-6'>
                        <label className='font-semibold w-full' htmlFor="">Kontak</label>
                        <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="text" name="kontak" />
                    </div> */}

                    <Handle />
                </div>
                    {/* <button className='bg-black text-white ml-4 p-2 rounded-lg' type='submit'>Tambah Produk</button> */}


            </form>
        </div>
    )
}