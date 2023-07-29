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
         </Head>
         <div className="h-full">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Ovenon Bakery</h1>
                  <div className="px-2">
                     <p>A landing page made for a local bakery, featuring a detailed list of every item they offer.</p>
                     <div className="my-2">
                        <a href="https://ovenonbakery.netlify.app/" className="mx-2 underline">Visit</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#dd5f13] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#dd5f13] font-semibold'># </span>CSS</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#dd5f13] font-semibold'># </span>Javascript</span>
                  </div>
               </div>
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