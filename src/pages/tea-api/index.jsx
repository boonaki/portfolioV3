import Head from 'next/head'
import Image from 'next/image'
import gif from '../../../public/imgs/teaapi.gif'

const TeaPage = () => {
   return (
      <>
         <Head>
            <title>Tea API</title>
            <meta name="author" content="Josh Durrett" />
         </Head>

         <div>
            <div>
               <div className="w-[3px] h-full bg-white"></div>
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Tea API</h1>
                  <div className="px-2">
                     <p>A free and open-source RESTful Web-API for tea, with specific information for each tea such as origin, alternative names and descriptions.</p>
                     <div className="my-2">
                        <a href="https://boonakitea.cyclic.app/" className="mx-2 underline">API</a>
                        <a href="https://github.com/boonaki/boonakis-tea-api" className="mx-2 underline">Repo</a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="my-6 w-full">
               <h3 className="font-bold text-2xl">Tech Used:</h3>
               <div className="flex my-1 flex-wrap px-2">
                  <span className="mx-2 my-1">HTML5</span>
                  <span className="mx-2 my-1">Tailwind</span>
                  <span className="mx-2 my-1">Javascript</span>
                  <span className="mx-2 my-1">Express.js</span>
                  <span className="mx-2 my-1">MongoDB</span>
                  <span className="mx-2 my-1">Node.js</span>
               </div>
            </div>
            <div>
               <Image src={gif} alt="teaapigif" className="w-full my-6" />
            </div>
         </div>
      </>
   )
}

export default TeaPage