import Head from 'next/head'
import gif from '../../public/imgs/sg.gif'
import Image from 'next/image'

const Square = () => {
   return (
      <>
         <Head>
            <title>Square Tag - Project</title>
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Square Tag</h1>
                  <div>
                     <div className="font-mono">
                        <p>In this online version of whack-a-mole, your goal is to a tag a timid square that has no interest in being touched.</p>
                        <br />
                     </div>
                     <a href="https://squaretag.netlify.app" className="button-primary w-fit">Play &gt;</a>
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
                  <Image src={gif} alt="gif" className="w-full my-6"></Image>                        
               </div>
            </div>
         </div>
      </>
   )
}

export default Square