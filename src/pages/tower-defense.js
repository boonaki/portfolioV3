import Head from 'next/head'

const TowerDefense = () => {
   return (
      <>
         <Head>
            <title>Fish Horde: Mobile Tower Defense Game - C#</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Fish Horde: Mobile Tower Defense Game</h1>
                  <div className="px-2">
                     <p>An un-released mobile tower-defense game where the goal is to defend your tower from hordes of flopping fish. A majority of the assets I modeled in Blender, although the trees came from an asset pack.</p>
                     <br />
                     <div className="px-2">
                        <a href="https://github.com/boonaki/fishhorde" className="mx-3 my-1 underline inline-block hover:text-blue-400">Codebase &gt;</a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#5ebdbd] font-semibold'># </span>C#</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#5ebdbd] font-semibold'># </span>Blender</span>
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#5ebdbd] font-semibold'># </span>Unity</span>
                  </div>
               </div>
               <div className="px-2">
                  <p>Being able to see where different optimizations could be made was enlightening, specifically with <a href="https://en.wikipedia.org/wiki/Object_pool_pattern" className="underline hover:text-blue-400">Object-pooling</a>, which I used to spawn the large number of fish seen below.</p>
               </div>
               <div className="mt-4 px-4">
                  <video controls>
                     <source src="https://d1d86ky427gzi9.cloudfront.net/videos/clkni0ho60001la0fvh5na7mn.mov" type="video/mp4"></source>
                  </video>
               </div>
            </div>
         </div>
      </>
   )
}

export default TowerDefense