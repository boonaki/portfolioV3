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
         </Head>
         <div className="h-full">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Skyward</h1>
                  <div className="px-2">
                     <p>A platform built to offer visitors the ability to peek into the various workshops Skyward offers and book their next appointments. Features a Content-Management System specialized for the owners' needs.</p>
                     <div className="my-2 px-2">
                        <a href="https://reachskyward.com" className="mx-3 underline">Visit &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>Tailwind</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>Javascript</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>Express.js</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>MongoDB</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>Node.js</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#6ad5ff] font-semibold'># </span>Cloudinary</span>
                  </div>
               </div>
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