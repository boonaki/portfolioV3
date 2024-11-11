import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../../public/imgs/onya-rose.png'
import img2 from '../../../public/imgs/onya-rose-1.png'
import img3 from '../../../public/imgs/onya-rose-2.png'

const ORPPage = () => {
   return (
      <>
         <Head>
            <title>Onya Rose Photography Project</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Onya Rose Photography</h1>
                  <div className="px-2">
                     <div className="font-mono">
                        <p>A static portfolio built to showcase the client's work and to offer a place for potential customers to book with them through a custom-built booking process.</p>
                        <br />
                     </div>
                     <a href="https://onyarosephotography.netlify.app/" className="button-primary w-fit">Visit &gt;</a>
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
               <div className="mt-4 px-4">
                  <Image src={img1} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img3} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img2} alt="gif" loading="lazy" className="w-full my-6"></Image>                        
               </div>
            </div>
         </div>
      </>
   )
}

export default ORPPage