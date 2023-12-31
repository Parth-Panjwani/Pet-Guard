'use client'

import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation';

export default function Home() {

  const pathname = usePathname()

  const router = useRouter();

  return (
    <div className='bg-white'>
      <Navbar />
      <div style={{ backgroundImage: 'url("/img/hero.jpg")', backgroundSize: 'cover' }} className="flex items-center bg-center bg-lime-500 bg-no-repeat text-stone-500 h-[calc(100vh-93px)] py-12 px-3 min-w-screen">
        <div className="sm:mx-20 mx-4 sm:my-10 my-0">
          <div className="flex flex-wrap justify-start -ml-3 -mr-3">
            <div>
              <h1 className="text-neutral-800 sm:text-[5.00rem] text-5xl leading-none font-bold mb-6 uppercase">Pet Guard</h1>
              <h1 className="text-white sm:text-[2.50rem] text-4xl leading-none font-bold mb-6 uppercase">Your Pet's Health, Our Priority</h1>
              <p className="text-white text-2xl mb-6">Where Pets Thrive, Care Comes Alive: Your Trusted Vet Partner</p>
              <div className="items-center flex justify-start">
                <Link href="/" className="text-zinc-100 cursor-pointer font-bold mr-12 py-4 px-12 text-center uppercase align-middle border-[1.6px] border-zinc-100 border-solid">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="max-width max-w-screen-2xl m-auto px-8 py-12 flex lg:flex-row flex-col gap-12">
          <div className="left-side m-auto">
            <img className='sm:min-w-[512px] w-auto' src="/img/about.jpg" alt="" />
          </div>

          <div className="right-side text-black">
            <div className="heading flex ">
              <div className='border border-[#85cc16] h-auto w-[4px] bg-[#85cc16]'></div>

              <div className="right-side ml-8">
                <div className="line-1 text-[#85cc16] uppercase font-bold">about us</div>
                <div className="line-2 font-bold md:text-4xl text-xl">WE KEEP YOU PETS HAPPY ALL TIME</div>
              </div>
            </div>

            <div className='line-3 font-bold text-gray-500 mt-4'>Commited To Your Pet`s Well-being: Uniting Expertise With Compassion</div>

            <div className="description mt-4 bg-gray-100 px-4 py-4">
              <div className="our-mission bg-[#85cc16] px-16 py-2 text-white w-fit">OUR MISSION</div>
              <div className="title mt-2">At PetGuard, our mission is to provide exceptional veterinery care and support to pets and their owners. We are dedicated to promotiong the health and happiness of your beloved companions, through a combination of cutting-edge medical expertise and unwavering compassion. With a team of experienced veterinarians and a commitment to delivering personalized, client-centered service, we aim to ensure that every pet entrusted to our care receives the best treatment available.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section bg-[url('/img/testimonial.jpg')] h-[30rem] bg-no-repeat relative md:bg-top bg-inherit">
        <div className="absolute bg-white text-black max-w-[600px] sm:px-10 px-4 py-8 text-center top-1/2 -translate-y-1/2 sm:right-5 right-0 mx-4">
          <div className='flex justify-center'><img className='w-[100px]' src="/img/feature.jpg" alt="" /></div>
          <div className='flex justify-center'><Image width={150} height={150} src="/img/testimonial-1.jpg" className="" /></div>
          <div className='mt-2 sm:text-base text-sm'>We couldn't be happier with the care our furry family member received at PetGuard. The staff's dedication and expertise truly set them apart. Our pet is healthier and happier, thanks to their exceptional service.</div>
          <div className="name font-bold my-2">JOHN DOE</div>
          <div className="profession">Doctor</div>
        </div>
      </div>
    </div>
  )
}
