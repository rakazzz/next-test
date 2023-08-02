'use client'
// import {prisma} from "@/../route"
import axios from "axios"
import { useState, Suspense } from "react"
// import { BeatLoader } from "react-spinners"
import React from "react"
import {NumericFormat, PatternFormat} from 'react-number-format';
import Load from "./loadPage";

export default function handleFile() {
    const preset_key = "hyidm3qm"
    const cloud_name = "dlunh7tzm"    
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    // const [spin, setSpin] = useState(false)
    function handle(event : any) {
        // setSpin(true)
        // setLoading(true)
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(res => setImage(res.data.url))
        .catch(err => console.log(err))
        setLoading(false)
        // setSpin(false);
    }



    return(
        <div className="flex flex-col">
            <div className='flex flex-wrap mx-4 mb-6'>
                <label className='font-semibold w-full' htmlFor="">Kontak</label>
                {/* <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="text" name="kontak" /> */}
                <div className="flex flex-row">
                    <div className="h-full text-white bg-gray-700 rounded-l-lg items-center"><p className="content-center">+62</p></div>
                    <PatternFormat
                    className="w-full sm:w-1/2 bg-gray-200 rounded-r-lg"
                    name='kontak'
                    format="###########"
                    />
                </div>
            </div>
            <div className="flex flex-wrap mx-4 mb-6">
                <label className="font-semibold w-full" htmlFor="">Harga Produk</label>
                <NumericFormat
                name="price"
                className="w-full sm:w-1/2 bg-gray-200 rounded-lg"
                thousandSeparator
                allowLeadingZeros={false}
                allowNegative={false} 
                prefix="Rp." /> 
            </div>
            <div className='flex flex-wrap mx-4 mb-6'>
                <label className='font-semibold w-full' htmlFor="image">Gambar Produk</label>
                <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handle}/>
                    {/* <div className="justify-center mx-auto">
                    {loading ? (
                        <h1>Loading...</h1>

                    
                    ):''}
                    </div> */}
                <Suspense fallback={<Load/>  }>
                    <input type="hidden" name="urlImg" value={image} />

                    <img className="rounded-lg my-3" src={image} alt="" />
                </Suspense>
                {loading ? ( 
                <button className='bg-gray-500 text-white my-2 p-2 rounded-lg disabled:opacity-5 cursor-not-allowed' type="button">Tambah Produk</button>

                ): (<button className='bg-black text-white my-2 p-2 rounded-lg' type='submit'>Tambah Produk</button>)}
                {/* // <button className='bg-black text-white my-2 p-2 rounded-lg' type='submit'>Tambah Produk</button> */}

            </div>
        </div>

    )

    // function handleFile(event : any) {
        
    //     const preset_key = "hyidm3qm"
    //     const cloud_name = "dlunh7tzm"
    //     const file = event.target.files[0]
    //     const formData = new FormData()
    //     formData.append('file', file)
    //     formData.append('upload_preset', preset_key)
    //     axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
    //     .then(res => console.log(res),)
    //     .catch(err => console.log(err))
    // }
    // return(res)
}


// export async function addItem(dataForm: FormData){
//     const postData = await prisma.post.create({
//         data: {
//             title: dataForm.get('title') as string,
//             price: dataForm.get('price') as string
            
//         }
//     })
// }