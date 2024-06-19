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
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Onya Rose Photography</h1>
                  <div className="px-2">
                     <p>A static portfolio built to showcase the client's work and to offer a place for potential customers to book with them through a custom-built booking process.</p>
                     <br />
                     <div className="px-2">
                        <a href="https://onyarosephotography.netlify.app/" className="mx-3 underline">Visit &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d79046] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d79046] font-semibold'># </span>CSS</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d79046] font-semibold'># </span>Javascript</span>
                  </div>
               </div>
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