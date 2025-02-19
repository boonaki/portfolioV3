import Head from 'next/head'
// import Image from 'next/image'
// import { Poppins } from 'next/font/google'
import Link from 'next/link'
// import { useState } from 'react'
import Hello from '@/components/hello'

// const ssp = Source_Sans_Pro({ subsets: ['latin'], weight: ['200', '300', '400', '600', '700', '900'] })
// const poppins = Poppins({ subset: ["latin"], weight: ['200', '300', '400', '600', '700', '800'], preload: false })

export default function Home() {
    
    return (
        <>
            <Head>
               <title>Josh Durrett - Software Engineer</title>
               <meta name="description" content="Explore my work as a Software Engineer." />
               <meta name="author" content="Josh Durrett" />
               <meta property="og:image" content="/imgs/boon-logo-full.png" />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="detail-view">
                <section>
                    <div className="w-[3px] h-full bg-white"></div>
                    <div>
                        <div className="text-5xl md:text-6xl mb-6 tracking-wide font-semibold ">
                            <h1 className="sr-only">Josh Durrett - Software Engineer</h1>
                            <Hello />
                        </div>
                        <div className="">
                            <div className='font-mono'>
                                <p className=''>My name is Josh. I really enjoy building software products.</p>
                                <br />
                                <p>Other than programming, I'm passionate about education, design, video/board games, baking and music.</p>
                                <br />
                            </div>
                            <div className="flex flex-wrap">
                                <a href="/evolvr" className="button-primary mr-4">Projects &gt;</a>
                                <a href="https://bsky.app/profile/boonaki.bsky.social" className="button-secondary mr-4">Bluesky &gt;</a>
                                <Link href="/contact" className="button-secondary flex-grow sm:flex-grow-0">Contact &gt;</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className='divider'></div> */}
                <section className='space-y-5'>
                    {/* <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-semibold text-base text-neutral-400">Tech I'm Using...</h3>
                        <ul className="tech-list">
                            <li className="tech-list-item">Svelte</li>
                            <li className="tech-list-item">Tailwind</li>
                            <li className="tech-list-item">Javascript/Typescript</li>
                            <li className="tech-list-item">Rust</li>
                            <li className="tech-list-item">Swift</li>
                            <li className="tech-list-item">Tauri</li>
                            <li className="tech-list-item">Java</li>
                            <li className="tech-list-item">Tauri</li>
                            <li className="tech-list-item">Next.js</li>
                            <li className="tech-list-item">Lexical</li>
                            <li className="tech-list-item">PostgreSQL</li>
                            <li className="tech-list-item">Diesel ORM</li>
                        </ul>
                    </div> */}
                    {/* <div className="mt-2 w-full max-w-[800px] space-y-2">
                        <h3 id="other-tech" className="font-semibold text-base text-neutral-400">Other Tech I Use...</h3>
                        <div className="tech-list">
                            <span className="tech-list-item">HTML/CSS</span>
                            <span className="tech-list-item">SwiftUI</span>
                            <span className="tech-list-item">React</span>
                            <span className="tech-list-item">AWS</span>
                            <span className="tech-list-item">Node.js</span>
                            <span className="tech-list-item">Express.js</span>
                            <span className="tech-list-item">Redis</span>
                            <span className="tech-list-item">tRPC</span>
                            <span className="tech-list-item">Docker</span>
                            <span className="tech-list-item">Prisma</span>
                            <span className="tech-list-item">MongoDB</span>
                            <span className="tech-list-item">SQLite</span>
                            <span className="tech-list-item">Figma</span>
                            <span className="tech-list-item">Git</span>
                            <span className="tech-list-item">Unreal Engine</span>
                        </div>
                    </div> */}
                </section>
            </div>
        </>
    )
}
