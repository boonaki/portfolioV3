import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../../public/imgs/ovenon-1.png'
import img2 from '../../../public/imgs/ovenon-2.png'
import img3 from '../../../public/imgs/ovenon-3.png'
import img4 from '../../../public/imgs/ovenon-4.png'
import img5 from '../../../public/imgs/ovenon-5.png'

const OvenonPage = () => {
   return (
      <>
         <Head>
            <title>Ovenon Bakery</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Ovenon Bakery</h1>
                  <div className="px-2">
                     <div className="font-mono">
                        <p>A landing page made for a local bakery, featuring a detailed list of every item they offer.</p>
                        <br />
                     </div>
                     <a href="https://ovenonbakery.netlify.app/" className="button-primary w-fit">Visit &gt;</a>
                  </div>
               </div>
               <div className='divider'></div>
               <section className='space-y-5'>
                    <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                        <ul className="tech-list">
                           <li className="tech-list-item">HTML</li>
                           <li className="tech-list-item">CSS</li>
                           <li className="tech-list-item">Javascript</li>
                        </ul>
                    </div>
               </section>
            </div>
            <div className="mt-4 px-4">
               <Image src={img1} alt="gif" className="w-full my-6"></Image>
               <Image src={img2} alt="gif" className="w-full my-6"></Image>
               <Image src={img3} alt="gif" loading="lazy" className="w-full my-6"></Image>
               <Image src={img4} alt="gif" loading="lazy" className="w-full my-6"></Image>
               <Image src={img5} alt="gif" loading="lazy" className="w-full my-6"></Image>
            </div>
         </div>
      </>
   )
}

export default OvenonPage