import Head from 'next/head'
// import Image from 'next/image'
// import { Poppins } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'
// import { useState } from 'react'
import Hello from '@/components/hello'

// const ssp = Source_Sans_Pro({ subsets: ['latin'], weight: ['200', '300', '400', '600', '700', '900'] })
// const poppins = Poppins({ subset: ["latin"], weight: ['200', '300', '400', '600', '700', '800'], preload: false })

export default function Home() {
    
    return (
        <>
            <Head>
               <title>Josh Durrett - Software Engineer</title>
               <meta name="description" content="My name is Josh Durrett, I am a software engineer with a passion for solving problems. I specialize in building full-stack web applications using a variety of tools. Being able to provide a fulfilling product that I can infuse my creativity, critical thinking and passions into simple, elegant and innovative solutions, is what I love to do." />
               <meta name="author" content="Josh Durrett" />
               <meta property="og:image" content="/imgs/boon-logo-full.png" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                            <p className='max-w-[750px]'>My name is Josh Durrett. I am a <span className="font-semibold">full-stack Software Engineer</span> based in Raleigh, North Carolina. I work to make the world a more enjoyable place through my skills as a web-developer.</p>
                            <div className="my-2 px-2 flex flex flex-wrap">
                                <a href="https://evolvr.ink/u/boonaki" className="mx-2 md:mx-3 my-1 underline block">Follow My Progress &gt;</a>
                                <Link href="/contact" className="mx-2 md:mx-3 my-1 underline block">Get In Touch &gt;</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-6 w-full max-w-[800px]">
                    <h3 className="font-bold text-2xl">Tech I Use:</h3>
                    <div className="flex my-1 flex-wrap px-2">
                        <span className="mx-2 my-1">HTML</span>
                        <span className="mx-2 my-1">CSS</span>
                        <span className="mx-2 my-1">Tailwind</span>
                        <span className="mx-2 my-1">Javascript</span>
                        <span className="mx-2 my-1">Typescript</span>
                        <span className="mx-2 my-1">Express.js</span>
                        <span className="mx-2 my-1">React</span>
                        <span className="mx-2 my-1">C#</span>
                        <span className="mx-2 my-1">Java</span>
                        <span className="mx-2 my-1">Redis</span>
                        <span className="mx-2 my-1">MongoDB</span>
                        <span className="mx-2 my-1">Node.js</span>
                        <span className="mx-2 my-1">MySQL</span>
                        <span className="mx-2 my-1">PostgreSQL</span>
                        <span className="mx-2 my-1">REST</span>
                        <span className="mx-2 my-1">Figma</span>
                        <span className="mx-2 my-1">Git</span>
                    </div>
                </div>
            </div>
            <Script async src="https://phenomenal-lollipop-8f4f42.netlify.app/script.js" data-website-id="762bbe22-0fd1-49d8-b736-45df1e4340c7" />
        </>
    )
}
