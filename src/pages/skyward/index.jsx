import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../../public/imgs/skyward-1.png'
import img2 from '../../../public/imgs/skyward-2.png'
import img3 from '../../../public/imgs/skyward-3.png'

const SkywardPage = () => {
   return (
      <>
         <Head>
            <title>Skyward - Client</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Skyward</h1>
                  <div>
                     <div className="font-mono">
                        <p>A platform built to offer visitors the ability to peek into the various workshops Skyward offers and book their next appointments. Features a Content-Management System specialized for the owners' needs.</p>
                        <br />
                     </div>
                     <a href="https://reachskyward.com" className="button-primary w-fit">Visit &gt;</a>
                  </div>
               </div>
               <div className='divider'></div>
               <section className='space-y-5'>
                    <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                        <ul className="tech-list">
                           <li className="tech-list-item">Svelte</li>
                           <li className="tech-list-item">Tailwind</li>
                           <li className="tech-list-item">Typescript</li>
                           <li className="tech-list-item">Cloudflare</li>
                        </ul>
                    </div>
               </section>
               <div className="mt-4 px-4">
                  <Image src={img1} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img2} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img3} alt="gif" loading="lazy" className="w-full my-6"></Image>                        
               </div>
            </div>
         </div>
      </>
   )
}

export default SkywardPage