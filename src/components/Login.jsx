import React, { useContext } from 'react'
import con from '../contest/Store'

const Login = () => {
  const {name,setName,istrue,setIstrue,setIslogin} = useContext(con);
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='h-80 rounded-2xl w-auto shadow-2xl flex items-center justify-evenly flex-col p-5 flex-wrap'>
            <h1 className='font-black text-xl '>Enter Your Name and Email</h1>
              <input type="text" className='border-1 rounded py-1 pl-4 ' onChange={(e)=>{setName(e.target.value)}} 
              
              placeholder='Name'/>
              <button className='border px-4 rounded py-1 text-white bg-black' 
                onClick={(e)=>{setIstrue(true)
                setIslogin(prev => true);
                    
                }}
              >LogIn</button>

        </div>
      
    </div>
  )
}

export default Login
