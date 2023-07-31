'use client'
// import {prisma} from "@/../route"
import axios from "axios"
import { useState } from "react"

export default function handleFile() {
    const preset_key = "hyidm3qm"
    const cloud_name = "dlunh7tzm"    
    const [image, setImage] = useState('')
    function handle(event : any) {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', preset_key)
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        .then(res => setImage(res.data.url))
        .catch(err => console.log(err))
    }



    return(
        <div className='flex flex-wrap mx-4 mb-6'>
            <label className='font-semibold w-full' htmlFor="image">Gambar Produk</label>
            <input className='w-full sm:w-1/2 bg-gray-200 rounded-lg' type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handle}/>
            <input type="hidden" name="urlImg" value={image} />
            <img className="rounded-lg my-3" src={image} alt="" />
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