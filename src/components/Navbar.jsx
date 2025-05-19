import React, { useContext, useState } from 'react'
import con from '../contest/Store'
import Home from '../components/Home'
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router';
const Navbar = () => {
    const {logo,isLogin,name,istrue,setIstrue} = useContext(con);
    const [li,setLi] = useState([
        {
            name : "Home",
            nn : '/'
        },
        {
            name : "Mens",
            nn : '/mens'
        },
        {
            name : "Womens",
            nn : '/womens'
        },
        {
            name : "Kids",
            nn : '/kids'
        }

        
    ])
    const [nav,setNav] = useState(false)
    const [cl,setCl] = useState(false)
  return (
    <>
    
        <div className='h-17 shadow-2xl w-screen px-5 z-10 bg-white flex items-center fixed top-0 justify-between'>
            <div className='flex  gap-4 items-center h-[100%] w-[20%] '>
                <img src={logo} alt="logo"  className='h-10 rounded-full'/>
                <h1 className='font-bold text-3xl'><i>ZOKI</i></h1>
            </div>
            <div className='hidden  lg:flex items-center gap-16 justify-end w-[80%]'>
                <ul className='flex space-x-27'>
                    {
                        li.map((ele,ind)=>(
                            <Link key={ind} to={ele.nn}>
                                <li className='cursor-pointer font-semibold' >{ele.name}</li>
                            </Link>
                        ))
                    }
                </ul>
                <Link to={'/add'}>
                <IoMdCart className='text-2xl' />
                </Link>
                {
                    !isLogin ? (
                        <Link to={'/login'}>
                            <button className='rounded-sm border bg-gray-200 px-2'>Log In</button>
                        </Link>
                    ):
                    (
                       istrue &&  <h1 className= 'font-bold '>{name}</h1>
                    )
                    
                }
            </div>
            {
                cl===false ? <IoMenu className='lg:hidden font-bold text-3xl' onClick={()=>{
                    setCl(!cl);
                    setNav(!nav);
                }} />:<ImCross className='lg:hidden font-semibold text-xl' onClick={()=>{
                    setCl(!cl);
                    setNav(!nav);
                }}/>
                

            }
        </div>
        {
            cl && (
                <div className='h-screen lg:hidden flex items-center justify-center top-0 m-0 w-screen bg-gray-200 fixed'>
                    {
                        nav && (
                            <div className= ' flex items-center justify-evenly  flex-col  h-70 w-60 bg-gray-300'>
                                {
                                    li.map((ele,ind)=>{
                                        return (
                                            <>
                                            
                                            <Link key={ind} to={ele.nn}>

                                                <li className='list-none font-semibold text-2xl cursor-pointer' key={ind}
                                                onClick={()=>{
                                                    setCl(!cl);
                                                    setNav(!nav);
                                                }}
                                                >{ele.name}</li>
                                            </Link>
                                            </>
                                        )
                                    })
                                }
                                            <Link to={'/add'}>
                                                <IoMdCart className='text-2xl'
                                                onClick={()=>{
                                                    setCl(!cl);
                                                    setNav(!nav);
                                                }} />
                                            </Link>

                                        {
                                           istrue && <h1 className= 'font-bold '>{name}</h1>
                                        }  
                                            
                            </div>
                        )
                    }
                </div>
            )
        }
        
    </>
  )
}

export default Navbar
