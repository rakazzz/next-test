import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi';

const surat = [
    {name: 'Surat Keterangan Jabatan'},
    {name: 'Surat Keterangan Lokasi Tanah'},
    {name: 'Surat Keterangan Kehilangan Kartu Keluarga'},
    {name: 'Surat Keterangan Domisili'},
    {name: 'Surat Keterangan Belum Terbit E-KTP'},
    {name: 'Surat Keterangan Ghoib'},
    {name: 'Surat Keterangan Belum Memiliki Rumah'},
    {name: 'Surat Perjanjian Utang Piutang'},
]
export default function ListSurat() {

    return(
        <div className='bg-gray-200 rounded-3xl h-screen sm:rounded-none p-3 overflow-y-auto'>
        {surat.map((item)=>
        <Link href='/administrasi/form' passHref>
            <div className='items-center justify-center flex flex-row shadow-xl transition ease-in-out bg-white max-w-sm p-4 mx-3 m-2 pt-3 rounded-md hover:scale-90'>
                <h1 className='text-black flex-1'>
                   {item.name} 
                </h1>
                
                    <HiArrowSmRight className='h-6 w-6 text-black hover:text-gray-300' />
                
            </div>
        </Link>
        )}
        </div>
    )
}