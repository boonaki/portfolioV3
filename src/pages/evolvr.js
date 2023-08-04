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
         <div className="h-full">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Evolvr</h1>
                  <div className="px-2">
                     <p>Evolvr is a social media platform that allows you to organize your growth and encourages you to reflect on the progress you make, alongside being able to connect with and support the progress of the people all around you.</p>
                     
                     <div className="my-2 px-2">
                        <a href="https://evolvr.ink" className="mx-3 my-1 underline inline-block">Visit &gt;</a>
                        <a href="https://evolvr.ink/faq" className="mx-3 my-1 underline inline-block">FAQ &gt;</a>
                        <a href="https://github.com/boonaki/progress" className="mx-3 my-1 underline inline-block">Read about the previous build &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>React</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>Tailwind</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>Typescript</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>MySQL</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>AWS</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>Nextjs</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>tRPC</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#d56c6c] font-semibold'># </span>Redis</span>
                  </div>
               </div>
               <div className="mt-4 px-4">
                  <Image src={logo} alt="gif" className="w-full my-6"></Image>
               </div>
            </div>
         </div>
      </>
   )
}

export default Evolvr