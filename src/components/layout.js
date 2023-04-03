import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import ExternalLinks from './external'
import { useRouter } from 'next/router';

const poppins = Poppins({ subset: ["latin"], weight: ['200', '300', '400', '600', '700', '800'], preload: false })

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="description" content="I am a software engineer with a passion for solving problems. I focus in building full-stack web applications with the MERN stack, but my specialty comes in my ability to learn. Contact me to work together" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,400;1,600&display=swap" rel="stylesheet"></link> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={poppins.className + " p-4 md:h-screen md:flex md:flex-col md:justify-center md:items-center overflow-x-hidden"}>
                <div className="md:w-full md:relative lg:w-[1024px] xl:w-[1200px]">
                    <section className="md:w-full md:absolute mt-4 text-2xl flex justify-end items-center">
                        <div className="w-full pl-4 flex items-center">
                            <Link href="/" className={(router.pathname !== '/' ? 'block' : 'invisible') + ' mr-16 text-lg p-2 rounded-lg hover:bg-[#333] transition flex item-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-left mr-1 pt-1" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                <div className="h-full w-full py-4 md:flex md:flex-col md:justify-center md:items-center lg:w-[1024px] xl:w-[1300px] md:max-h-[900px]">
                    <div className="flex flex-col h-full min-[390px]:items-center md:flex-row md:justify-center md:items-start pt-4 md:py-16 md:min-h-[650px] md:max-h-[750px]">
                        <section className="md:w-[410px] lg:w-[550px] xl:w-[650px] h-full md:flex md:items-start md:overflow-y-auto md:mr-4 lg:mr-8">
                            {children} {/* page */}
                        </section>

                        <Navbar />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout