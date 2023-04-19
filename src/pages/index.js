import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Hello from '@/components/hello'

// const ssp = Source_Sans_Pro({ subsets: ['latin'], weight: ['200', '300', '400', '600', '700', '900'] })
const poppins = Poppins({ subset: ["latin"], weight: ['200', '300', '400', '600', '700', '800'], preload: false })

export default function Home() {
    
    return (
        <>
            <Head>
                <title>Josh Durrett - Software Engineer</title>
            </Head>

            <div className="px-2 w-full">
                <div>
                    <div className="w-[3px] h-full bg-white"></div>
                    <div>
                        <div className="text-5xl md:text-6xl mb-3 tracking-wide font-semibold ">
                            <h1 className="sr-only">Josh Durrett</h1>
                            <Hello />
                        </div>
                        <div className="">
                            <p>My name is Josh Durrett. I am a <span className="font-semibold">full-stack Software Engineer</span> based in Raleigh, North Carolina. I work to make the world a more enjoyable place through my skills as a web-developer.</p>
                            <div className="my-2 px-2 flex flex flex-wrap">
                                <a href="https://progress.cyclic.app/u/boonaki" className="mx-2 md:mx-3 my-1 underline block">Follow My Progress &gt;</a>
                                <Link href="/contact" className="mx-2 md:mx-3 my-1 underline block">Get In Touch &gt;</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6 w-full">
                    <h3 className="font-bold text-2xl">Tech I Use:</h3>
                    <div className="flex my-1 flex-wrap px-2">
                        <span className="mx-2 my-1">HTML</span>
                        <span className="mx-2 my-1">CSS</span>
                        <span className="mx-2 my-1">Tailwind</span>
                        <span className="mx-2 my-1">Javascript</span>
                        <span className="mx-2 my-1">Typescript</span>
                        <span className="mx-2 my-1">Express.js</span>
                        <span className="mx-2 my-1">React</span>
                        <span className="mx-2 my-1">Angular</span>
                        <span className="mx-2 my-1">MongoDB</span>
                        <span className="mx-2 my-1">Node.js</span>
                        <span className="mx-2 my-1">Artificial Intelligence</span>
                        <span className="mx-2 my-1">Machine Learning</span>
                        <span className="mx-2 my-1">MySQL</span>
                        <span className="mx-2 my-1">PostgreSQL</span>
                        <span className="mx-2 my-1">REST</span>
                        <span className="mx-2 my-1">tRPC</span>
                        <span className="mx-2 my-1">Figma</span>
                        <span className="mx-2 my-1">Git</span>
                    </div>
                </div>

                {/* <div>
                    <Link href="" className="font-semibold text-xl">Get In Touch</Link>
                </div> */}
            </div>

        </>
    )
}
