import Head from 'next/head'
import Image from 'next/image'
// import gif from '../../../public/imgs/prgs-gif.gif'

const IllWillPage = () => {
   return (
      <>
         <Head>
            <title>Ill Will - Client</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="h-full">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Ill Will</h1>
                  <div className="px-2">
                     <p>A fullstack, unfinished, e-commerce platform built for a client. The project utilizes Stripe and Paypal for payment processing, in tandem with custom-built Content-Management and Inventory Management systems to ensure a streamlined, user-friendly process for both business owners and customers.</p>
                     <div className="my-2 px-2">
                        <a href="https://illwillprototype.up.railway.app/" className="mx-3 underline">Visit &gt;</a>
                        <a href="https://illwillprototype.netlify.app/" className="mx-3 underline">See Prototype &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Tailwind</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Javascript</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Express.js</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>MongoDB</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Node.js</span>
                     <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#70e19c] font-semibold'># </span>Cloudinary</span>
                  </div>
               </div>
               <div className="mt-4 px-4">
                  {/* <Image src={gif} alt="gif" className="w-full my-6"></Image>                         */}
               </div>
            </div>
         </div>
      </>
   )
}

export default IllWillPage