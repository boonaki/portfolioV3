import Head from 'next/head'

const EtkrMacro = () => {
   return (
      <>
         <Head>
            <title>Boon's ETKR: Mouse Macro - Java</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="detail-view">
            <div className="mb-4">
               <div>
                  <h1 className="detail-heading">Boon's ETKR: Mouse Macro</h1>
                  <div>
                     <div className='font-mono'>
                        <p>A native desktop application written in Java with an adjustable, scrolling mouse macro to automate scrolling for a mobile game.</p>
                        <br />
                        <p>My dad wanted a macro for a game he plays so he didn't have to risk hurting his wrist from the <a className='link' href='https://en.wikipedia.org/wiki/Repetitive_strain_injury'>repetitive motion</a>. This application automates the motion he did to remove the risk factor.</p>
                        <br />
                     </div>
                     <div className="flex items-center flex-wrap">
                        <a href="https://github.com/boonaki/etkr-macro" className="button-primary">Codebase &gt;</a>
                        <a href="https://github.com/boonaki/etkr-macro/releases/tag/Releases1.0.1" className="mx-3 my-1"><img src='https://img.shields.io/github/downloads/boonaki/etkr-macro/total.svg'></img></a>
                     </div>
                  </div>
               </div>
               <div className='divider'></div>
               <section className='space-y-5 mb-8'>
                    <div className="w-full max-w-[800px] space-y-2">
                        <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                        <ul className="tech-list">
                           <li className="tech-list-item">Java</li>
                        </ul>
                    </div>
               </section>
               <div className="font-mono pb-4">
                  <p>To use the app, you first need to specify where to start and stop dragging. Once those points are specified, you can optionally enter in the height/width of the search pattern. Once ready, simply hit start. Pressing any key on the keyboard will stop or quit the application depending on the key pressed. The macro currently only searches from top-bottom, but it does search from both left-right and right-left.</p>
               </div>
               <div className="mt-4 px-4">
                  <div className="flex justify-center mb-4">
                     <img src="https://boonaki.me/imgs/etkr-macro.png"></img>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default EtkrMacro