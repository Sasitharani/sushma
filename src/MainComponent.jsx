"use client"
import React, { useEffect, useState } from 'react'
import './app/globals.css';
import Header from './app/common/Header';
import Footer from './app/common/Footer';


export default function MainComponent({children}) {
  let[headerTop,setHeaderTop]=useState(false)
  let[scrollStatus,setScrollStatus]=useState(false)
  let {pathname}=window.location
  useEffect(()=>{
    window.scrollTo(
      {
        top:"0px",
        beahviour:"smooth"
      }
    )
  },[pathname])
  useEffect(()=>{
    window.onscroll=()=>{
      let topScroll=window.scrollY
      if (topScroll>=250){
        setScrollStatus(true)
        console.log(scrollStatus);
      }
      else
      {
         setScrollStatus(false)
      }
      
      console.log(topScroll);
    }
  },[])
  return (
        <div>
        <div className={`${scrollStatus ? 'bg-gray-400':'bg-black'} fixed top-0 left-0 w-full `}>
        <Header />
        </div>
           <div className='bg-slate-100 border-4 border-black-600 border-solid'>
              {children}
         </div>
         <Footer />
        </div>
       
    
  )
}
