import React, { useContext } from 'react'
import con from '../contest/Store'

const Addtocart = () => {
    const {addcart,removing,ammount,setAmmount,setAddcart} = useContext(con)
  return (
    <>
      <h1 className='text-center font-bold mt-25 text-3xl'>Add to Cart</h1>
      <div className=' h-screen w-screen mt-10 flex lg:flex-row md:flex-row flex-col-reverse justify-evenly  '>
          
        <div className='lg:w-[60%] md:w-[60%] sm:w-[100%] h-100 bg-gray-200 overflow-auto'>
              {
                  addcart.map((ele,ind)=>(
                      <div key={ind} className='w-[80%] m-18 h-25 bg-white flex items-center justify-evenly p-5 overflow-hidden rounded-2xl'>
                          <h1 className='cursor-pointer font-bold text-2xl' onClick={()=>{removing(ele)}}>X</h1>
                          <h1 className='font-bold'>${ele.price}</h1>
                          <img src={ele.url} className='border m-2 h-20 rounded-2xl'  />
                          <h1 className='m-2'>{ele.name}</h1>
                      </div>
                  ))
              }
        </div>
        <div className='flex items-center justify-evenly flex-col lg:w-[40%] md:w-[40%] sm:w-[100%] h-100 s bg-gray-100'>
          <h1 className='font-bold text-4xl'>Total ammount</h1>
          <h1 className='font-bold text-4xl'>${ammount}</h1>
          <button className='p-4 px-10 rounded-2xl text-white bg-black font-black text-4xl border-2'
          onClick={()=>{
            setAddcart([]);
            if(ammount !== 0)
            {

              alert("Congratulations ! Your order is succesfully receved");
            }
            setAmmount(0);
          }}>Buy it</button>
        </div>
      </div>
    </>
  )
}

export default Addtocart
