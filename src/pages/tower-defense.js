import Head from 'next/head'

const TowerDefense = () => {
   return (
      <>
         <Head>
            <title>Fish Horde: Mobile Tower Defense Game - C#</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Fish Horde: Mobile Tower Defense Game</h1>
                  <div>
                     <div className="font-mono">
                        <p>An un-released mobile tower-defense game where the goal is to defend your tower from hordes of flopping fish. A majority of the assets I modeled in Blender, although the trees came from an asset pack.</p>
                        <br />
                     </div>
                     <a href="https://github.com/boonaki/fishhorde" className="button-primary w-fit">Codebase &gt;</a>
                  </div>
               </div>
               <div className='divider'></div>
               <section className='space-y-5'>
                    <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                        <ul className="tech-list">
                           <li className="tech-list-item">C#</li>
                           <li className="tech-list-item">Blender</li>
                           <li className="tech-list-item">Unity</li>
                        </ul>
                    </div>
               </section>
               <div className="my-8 font-mono">
                  <p>Being able to see where different optimizations could be made was enlightening, specifically with <a href="https://en.wikipedia.org/wiki/Object_pool_pattern" className="link">Object-pooling</a>, which I used to spawn the large number of fish seen below.</p>
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