import React, { useContext } from 'react'
import con from '../contest/Store'

const Mens = () => {
    const {men,adding} = useContext(con);
  return (
    
        <>
            <h1 className='text-center m-5 mt-25 font-bold text-3xl'>Men's Section
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 m-5 '>
            {
                men.map((ele,ind)=>(
                    <div key={ind} className='flex items-center flex-col border p-3 m-2 w-auto rounded-4xl gap-2'>
                        <img src={ele.url} className='h-30' />
                        <h1 className='font-bold text-xl '>Price is : ${ele.price}</h1>
                        <p className='text-xl'>{ele.name}</p>
                        <button className='border px-4 rounded bg-black text-white py-1'
                            onClick={()=>adding(ele)}
                        >Add</button>
                    </div>
                ))
            }
            </div>
        </>
  )
}

export default Mens
