import Head from 'next/head'
import Image from 'next/image'
import gif from '../../../public/imgs/prgs-gif.gif'

const ProgressioPage = () => {
   return (
      <>
         <Head>
            <title>Progressio</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Progressio</h1>
                  <div className="px-2">
                     <p>A place to post, organize and share the progress you make in any hobby or activity you have interest in. This project is the predecessor to Evolvr, and acted as a proof-of-concept.</p>
                     <br />
                     <div className="">
                        <a href="https://progress.cyclic.app" className="mx-2 underline">Visit</a>
                        <a href="https://github.com/boonaki/progressio" className="mx-2 underline">Read More</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Tailwind</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Javascript</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Express.js</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>MongoDB</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Node.js</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Cloudinary</span>
                  </div>
               </div>
               <div className="mt-4 px-4">
                  <Image src={gif} alt="gif" className="w-full my-6" />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProgressioPage