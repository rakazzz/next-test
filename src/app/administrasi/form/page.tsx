import {prisma} from "@/../route"
import { HiArrowSmLeft } from 'react-icons/hi';
import Link from 'next/link'


export default function Page(){

    async function addData(dataX : FormData) {
      // dataX.append('image', 'ini')
        
        'use server'
        // const stringNo = dataX.get('nowa' as string)
        // const num = parseInt(`$(dataX.get('nowa')`)
        // const num = `0${dataX.get('nowa')as string}`
        const name = await prisma.user.create({
            data: {
                name: dataX.get('name') as string,
                // email: dataX.get('email') as string,
                nowa: dataX.get('nowa') as string,
                alamat: dataX.get('alamat') as string
            }
        })
        // console.log(dataX)

    }
    return (
    //     <form className="" action={addData}>
    //         <div className="flex flex-col bg-white">
    //             <label htmlFor="">Nama</label>
    //            <input className="rounded-lg max-w-xs" type="text" /> 
    //         </div>
            
            // <button type="submit"> add to</button>
    //     </form>
    // )

    <div className="min-h-screen">
      <div>
        <Link href='/administrasi' passHref>
          <HiArrowSmLeft className="h-10 w-10 m-4" />

        </Link>

      </div>
    <form className="w-full max-w-lg mx-auto p-4" action={addData}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3  md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Nama Lengkap
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" type="text" placeholder="Muh. Gibran"/>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          {/* <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="email" type="email" placeholder="Doe@email.com" required/>
          </div> */}
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              No.HP
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="nowa" type="text"/>
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Alamat
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="alamat" type="text" placeholder="jl. melati"/>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 rounded-lg text-white p-3"> add to</button>
      </form>  
    </div>
  
)}