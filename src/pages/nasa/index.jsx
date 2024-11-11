import Head from 'next/head'
import Image from 'next/image'
import gif from '../../../public/imgs/nasaapod.gif'

const NasaPage = () => {
   return (
      <>
         <Head>
            <title>NASA APOD - Project</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className='detail-view'>
            <div>
               {/* <div className="w-[3px] h-full bg-white"></div> */}
               <div>
                  <h1 className="detail-heading">NASA APOD</h1>
                  <div>
                     <div className='font-mono'>
                        <p>This web application pulls data provided by NASA and displays the data based on either a random date or a user-specified date.</p>
                        <br />
                     </div>
                     <div className="flex flex-wrap">
                        <a href="https://nasaapodfinder.up.railway.app/" className="button-primary">Website</a>
                        <a href="https://github.com/boonaki/nasaAPODapp" className="button-secondary">Repo</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className='divider'></div>
            <section className='space-y-5'>
               <div className="w-full max-w-[800px] space-y-2">
                  <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                  <ul className="tech-list">
                     <li className="tech-list-item">HTML</li>
                     <li className="tech-list-item">Tailwind</li>
                     <li className="tech-list-item">Javascript</li>
                     <li className="tech-list-item">Express.js</li>
                     <li className="tech-list-item">MongoDB</li>
                     <li className="tech-list-item">Node.js</li>
                  </ul>
               </div>
            </section>
            <div>
               <Image src={gif} alt="gif" className="w-full my-6" />
            </div>
         </div>
      </>
   )
}

export default NasaPage