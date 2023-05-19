"use client"
import Features from '@/components/constants/Features'
import Footer from '@/components/constants/Footer'
import Navbar from '@/components/constants/Navbar'
import CTA from '@/components/home/CTA'
import Hero from '@/components/home/Hero'
import axios from 'axios'
import "./globals.css"
import Image from 'next/image'

export default function Home() {
  async function handleClick() {
   const result =  axios.post("/api/public/")
    console.log(result)
  }
  return (
    <>
  <Navbar/>
    <Hero/>
    <Features/>
    <CTA/>
    <button onClick={handleClick} className="btn btn-primary">Click me</button>

    <Footer/>
    </>
  )
}
