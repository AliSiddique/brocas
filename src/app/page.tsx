import Features from '@/components/constants/Features'
import Navbar from '@/components/constants/Navbar'
import CTA from '@/components/home/CTA'
import Hero from '@/components/home/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
  <Navbar/>
    <Hero/>
    <Features/>
    <CTA/>
    </>
  )
}
