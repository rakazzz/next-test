import Link from 'next/link'
import { HiArrowSmRight } from 'react-icons/hi';

const surat = [
    {name: 'Surat Keterangan Jabatan', to:'/administrasi/form'},
    {name: 'Surat Keterangan Lokasi Tanah', to:'/administrasi/form'},
    {name: 'Surat Keterangan Kehilangan Kartu Keluarga', to:'/administrasi/form'},
    {name: 'Surat Keterangan Domisili', to:'/administrasi/form'},
    {name: 'Surat Keterangan Belum Terbit E-KTP', to:'/administrasi/form'},
    {name: 'Surat Keterangan Ghoib', to:'/administrasi/form'},
    {name: 'Surat Keterangan Belum Memiliki Rumah', to:'/administrasi/form'},
    {name: 'Surat Perjanjian Utang Piutang', to:'/administrasi/form'},
    {name: 'Surat Lainnya', to:'/administrasi/customsurat'},
]
export default function ListSurat() {

    return(
        <div className='bg-gray-200 rounded-3xl h-screen sm:rounded-none p-3 overflow-y-auto'>
        {surat.map((item)=>
        <Link href={item.to} passHref>
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