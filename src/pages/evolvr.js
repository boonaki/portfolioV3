import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/imgs/evolvr-logo-full.png'

const Evolvr = () => {
   return (
      <>
         <Head>
            <title>Evolvr - Project</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className='detail-heading'>Evolvr</h1>
                  <div className="">
                     <div className='font-mono'>
                        <p>Evolvr is a social media platform that allows you to organize your growth and encourages you to reflect on the progress you make, alongside being able to connect with and support the progress of the people around you.</p>
                        <br />
                     </div>
                     <div className="flex flex-wrap">
                        <a href="https://evolvr.ink" className="button-primary mr-4">Visit &gt;</a>
                        <a href="https://evolvr.ink/faq" className="button-secondary mr-4">FAQ &gt;</a>
                     </div>
                     <div className='w-full space-y-2 mt-4'>
                        <a href="https://www.evolvr.ink/post/clrhoulp10001t50q24rv4uaj" className="button-secondary button-info group">
                           <span>Read about the current build &gt;</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-link stroke-neutral-400 group-hover:stroke-accent"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </a>
                        <a href="https://github.com/boonaki/progress#progressio" className="button-secondary button-info group">
                           <span>Read about the previous build &gt;</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-link stroke-neutral-400 group-hover:stroke-accent"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </a>
                     </div>
                  </div>
               </div>
               <div className='divider'></div>
               <section className='space-y-5'>
                    <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                        <ul className="tech-list">
                           <li className="tech-list-item">React</li>
                           <li className="tech-list-item">Tailwind</li>
                           <li className="tech-list-item">Typescript</li>
                           <li className="tech-list-item">MySQL</li>
                           <li className="tech-list-item">AWS</li>
                           <li className="tech-list-item">tRPC</li>
                           <li className="tech-list-item">Next.js</li>
                           <li className="tech-list-item">Redis</li>
                        </ul>
                    </div>
               </section>
               <div className="mt-4 px-4">
                  <Image src={logo} alt="gif" className="w-full my-6"></Image>
               </div>
            </div>
         </div>
      </>
   )
}

export default Evolvr