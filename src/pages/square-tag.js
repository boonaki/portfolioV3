import Head from 'next/head'
import gif from '../../public/imgs/sg.gif'
import Image from 'next/image'

const Square = () => {
   return (
      <>
         <Head>
            <title>Square Tag - Project</title>
         </Head>
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Square Tag</h1>
                  <div className="px-2">
                     <p>In this online version of whack-a-mole, your goal is to a tag a timid square that has no interest in being touched.</p>
                     <br />
                     <div className="px-2">
                        <a href="https://squaretag.netlify.app" className="mx-3 my-1 underline inline-block">Play &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#fff] font-semibold'># </span>HTML</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#fff] font-semibold'># </span>CSS</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#fff] font-semibold'># </span>Javascript</span>
                  </div>
               </div>
               <div className="mt-4 px-4">
                  <Image src={gif} alt="gif" className="w-full my-6"></Image>                        
               </div>
            </div>
         </div>
      </>
   )
}

export default Square