import React, { useState } from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import ExternalLinks from './external'
import { useRouter } from 'next/router';
import boonLogo from '../../public/boon_logo.svg'

const poppins = Poppins({ subset: ["latin"], weight: ['300', '400', '600', '700', '800'], preload: false })

const Layout = ({ children }) => {

   const [isMenuOpen, setIsMenuOpen] = useState(true);

   const handleMenu = () => {
      setIsMenuOpen(prev => !prev);
   }

   const router = useRouter()
   return (
      <>
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main 
            className={poppins.className + " text-white md:h-screen md:flex md:flex-col md:items-center overflow-x-hidden"}
         >
            <div className='w-full px-4 mt-4 md:mt-8 md:px-8 xl:w-[1200px] mb-12'>
               <section className="w-full h-[75px] text-2xl flex justify-center items-center">
                  <div className="w-full pl-2 flex items-center">
                     <Image priority={true} src={boonLogo} alt="logo" className={(router.pathname === '/' ? 'block' : 'hidden md:block') + ' '} title='Josh Durrett - Software Engineer'></Image>
                     <Link href="/" className={(router.pathname !== '/' ? 'block' : 'hidden') + ' md:ml-3 mr-16 text-lg p-2 rounded-lg hover:bg-[#333] transition flex item-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left mr-1 pt-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                           <line x1="10" y1="12" x2="20" y2="12" />
                           <line x1="10" y1="12" x2="14" y2="16" />
                           <line x1="10" y1="12" x2="14" y2="8" />
                           <line x1="4" y1="4" x2="4" y2="20" />
                        </svg>
                        Return
                     </Link>
                  </div>
                  <div className="flex items-center">
                     <ExternalLinks />
                  </div>
               </section>
            </div>
            {/* <div className="md:w-full md:relative lg:w-[1024px] xl:w-[1200px]">
               <section className="md:w-full h-[75px] md:absolute mt-4 text-2xl flex justify-end items-center">
                  <div className="w-full pl-4 flex items-center">
                     <Image priority={true} src={boonLogo} alt="logo" className={(router.pathname === '/' ? 'block' : 'hidden md:block') + ' '} title='Josh Durrett - Software Engineer'></Image>
                     <Link href="/" className={(router.pathname !== '/' ? 'block' : 'hidden') + ' md:ml-3 mr-16 text-lg p-2 rounded-lg hover:bg-[#333] transition flex item-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left mr-1 pt-1" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                           <line x1="10" y1="12" x2="20" y2="12" />
                           <line x1="10" y1="12" x2="14" y2="16" />
                           <line x1="10" y1="12" x2="14" y2="8" />
                           <line x1="4" y1="4" x2="4" y2="20" />
                        </svg>
                        Return
                     </Link>
                  </div>
                  <div className="flex items-center">
                     <ExternalLinks />
                  </div>
               </section>
            </div> */}
            <div className='px-4'>
               {/* <div className="w-full h-[110px]"></div> {/* spacer */}
               <div className='md:flex'>
                  <section className='detail-view-container overflow-y-scroll'>
                     {children}
                  </section>

                  <Navbar isOpen={isMenuOpen} handleMenu={handleMenu} />
               </div>
            </div>
            {/* <div className="h-full w-full py-4 md:flex md:flex-col md:justify-center md:items-center lg:w-[1024px] xl:w-[1300px] md:max-h-[900px]">
               <div className="w-full md:h-[110px]"></div> {/* spacer
               <div className="flex flex-col h-full min-[390px]:items-center md:flex-row md:justify-center md:items-start md:pb-16 md:min-h-[650px]">
                  <section className={"h-full md:flex md:items-start md:overflow-y-auto md:mr-4 lg:mr-8" + (isMenuOpen ? "md:w-[410px] lg:w-[550px] xl:w-[650px]" : "max-w-[850px]")}>
                     {children} {/* page
                  </section>

                  <Navbar isOpen={isMenuOpen} handleMenu={handleMenu} />
               </div>
            </div> */}
         </main>
      </>
   )
}

export default Layout