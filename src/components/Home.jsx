import React, { useContext } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialGithub } from "react-icons/sl";
import con from '../contest/Store';

const Home = () => {
    const {logo,trending} = useContext(con)
  return (
    <>
      <div className='h-full w-screen mt-25 flex items-center flex-col gap-10   mb-10 '>

        <div className='flex flex-col items-center gap-3 w-[70%]'>
            <h1 className='font-bold text-2xl'>🧡 Welcome to Zoki</h1>
            <div className='flex flex-col md:flex-row lg:flex-row gap-10'>
            <img className='h-40 rounded-2xl' src= {logo}/>
            <p className='font-semibold text-md'>Discover the best in fashion and lifestyle – all in one place.
                Experience seamless shopping, exclusive deals, and lightning-fast delivery.At Zoki, we believe shopping should be more than just buying — it should be an experience. Whether you're looking to refresh your wardrobe, upgrade your gadgets, or add some charm to your home, we've got you covered with the best products at unbeatable prices.

            ✨ Discover top trends, handpicked collections, and daily deals you won’t find anywhere else.
            🛒 From fashion-forward fits to must-have electronics, everything you need is just a click away.</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-3 w-[70%]'>
            <h1 className='font-bold text-2xl'>🔥 Trending Now</h1>
            <div className='flex items-center gap-10'>
            <img className='h-10 rounded-2xl' src= {trending}/>
            <p className='font-semibold text-md'>Summer Fashion 2025 – Up to 60% OFF</p>
            </div>
        </div>
        
        <div className='flex flex-col items-center gap-3 w-[70%]'>
            <h1 className='font-bold text-2xl'>🛍️ Shop by Categories</h1>
            <p className='font-semibold text-md'>👗 Fashion: Men | Women | Kids</p>
        </div>
        <div className='flex flex-col items-center gap-3 w-[70%]'>
            <h1 className='font-bold text-2xl'>🎁 Why Shop with Zoki?</h1>
            <p className='font-semibold text-md'>✅ Quality You Can Trust</p>
            <p className='font-semibold text-md'>🚚 Fast & Free Delivery</p>
            <p className='font-semibold text-md'>🔄 Hassle-Free Returns</p>
            <p className='font-semibold text-md'>🔐 Secure Payments</p>
            <p className='font-semibold text-md'>📞 24/7 Customer Support</p>
        </div>
        <div className='flex flex-col items-center gap-3 w-[70%]'>
            <h1 className='font-bold text-2xl'>Contact Us</h1>
            <div className='flex gap-5'>
                <FaFacebook className='text-2xl' />
                <FaInstagramSquare className='text-2xl' />
                <FaTwitter  className='text-2xl'  />
                <SlSocialGithub className='text-2xl' />


            </div>
        </div>
      </div>
    </>
  )
}

export default Home
