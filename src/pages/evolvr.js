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
                        <p>Evolvr is a social media platform that allows you to organize your growth and encourages you to reflect on the progress you make, alongside being able to connect with and support the progress of the people all around you.</p>
                        <br />
                     </div>
                     <div className="flex flex-wrap">
                        <a href="https://evolvr.ink" className="button-primary mr-4">Visit &gt;</a>
                        <a href="https://evolvr.ink/faq" className="button-secondary mr-4">FAQ &gt;</a>
                        <a href="https://github.com/boonaki/progress#progressio" className="button-secondary">Read about the previous build &gt;</a>
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