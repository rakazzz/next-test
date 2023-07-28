import {prisma}  from '../../../route'

export default async function Paghe() {
    const content = await prisma.post.findMany({
        take:5,
        where: {published: true},
    })
    return (
        <div className='flex flex-row overflow-x-auto  justify-between mx-5 gap-3 pb-3'>
            {content.map((item)=>
            <div className='basis-1/3 flex-shrink-0 bg-white max-w-sm mt-5 rounded-md shadow-lg'>
              <img className='rounded-t-md object-cover w-full h-24' src={item.content} alt=""></img>  
              <div className='font-semibold m-2'>
                <p>{item.title}</p> 
              </div>
                      
            </div>            
            )}

            {/* <div className='basis-1/4 flex-shrink-0 bg-white content-center max-w-sm mt-5 rounded-md shadow-lg'>
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
            </div>      */}
        </div> 
    )
}