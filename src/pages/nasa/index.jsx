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
         <div className='max-w-[850px]'>
            <div>
               <div className="w-[3px] h-full bg-white"></div>
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">NASA Apod</h1>
                  <div className="px-2">
                     <p>This fullstack web application pulls data provided by NASA and displays the data based on either a random date or a user-specified date.</p>
                     <div className="my-2">
                        <a href="https://nasaapodfinder.up.railway.app/" className="mx-2 underline">Website</a>
                        <a href="https://github.com/boonaki/nasaAPODapp" className="mx-2 underline">Repo</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="my-6 w-full">
               <h3 className="font-bold text-2xl">Tech Used:</h3>
               <div className="flex my-1 flex-wrap px-2">
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>HTML</span>
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>Tailwind</span>
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>Javascript</span>
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>Express.js</span>
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>MongoDB</span>
                  <span className="mx-2 my-1 mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#425c88] font-semibold'># </span>Node.js</span>
               </div>
            </div>
            <div>
               <Image src={gif} alt="gif" className="w-full my-6" />
            </div>
         </div>
      </>
   )
}

export default NasaPage