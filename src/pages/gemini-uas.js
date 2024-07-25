import Head from 'next/head'
import Image from 'next/image'
import img1 from '../../public/imgs/gemini-1.png'
import img2 from '../../public/imgs/gemini-2.png'
import img3 from '../../public/imgs/gemini-3.png'
import img4 from '../../public/imgs/gemini-4.png'

const Gemini = () => {
   return (
      <>
         <Head>
            <title>Gemini UAS - Client</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Gemini UAS</h1>
                  <div className="px-2">
                     <p>A Fullstack web application built for an International Drone Inspection Services company, with a custom built content management system, use of 3D models and custom a booking process.</p>
                     <br />
                     <div className="px-2">
                        <a href="https://gem-proto.netlify.app/" className="mx-3 my-1 underline inline-block">Visit &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>Tailwind</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>Javascript</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>Express.js</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>MongoDB</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#ba75ff] font-semibold'># </span>Node.js</span>
                  </div>
               </div>
               <div className="mt-4 px-4">
                  <Image src={img1} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img2} alt="gif" className="w-full my-6"></Image>                        
                  <Image src={img3} alt="gif" loading="lazy" className="w-full my-6"></Image>                        
                  <Image src={img4} alt="gif" loading="lazy" className="w-full my-6"></Image>                        
               </div>
            </div>
         </div>
      </>
   )
}

export default Gemini