import Head from 'next/head'

const EtkrMacro = () => {
   return (
      <>
         <Head>
            <title>Boon's ETKR: Mouse Macro - Java</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         <div className="h-full max-w-[850px]">
            <div className="mb-4">
               <div>
                  <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Boon's ETKR: Mouse Macro</h1>
                  <div className="px-2">
                     <p>A native desktop application written in Java with an adjustable, scrolling mouse macro to automate scrolling for a mobile game.</p>
                     <br />
                     <p>My dad wanted a macro for a game he plays so he didn't have to risk hurting his wrist from the <a className='hover:text-blue-400' href='https://en.wikipedia.org/wiki/Repetitive_strain_injury'>repetitive motion</a>. This application automates the motion he did to remove the risk factor.</p>
                     <br />
                     <div className="px-2 flex items-center">
                        <a href="https://github.com/boonaki/etkr-macro" className="mx-3 my-1 underline hover:text-blue-400">Codebase &gt;</a>
                        <a href="https://github.com/boonaki/etkr-macro/releases/tag/Releases1.0.1" className="mx-3 my-1"><img src='https://img.shields.io/github/downloads/boonaki/etkr-macro/total.svg'></img></a>
                     </div>
                  </div>
               </div>
               <div className="my-6 w-full">
                  <h3 className="font-bold text-2xl">Tech Used:</h3>
                  <div className="flex my-1 flex-wrap px-2">
                     <span className="mx-2 my-1 p-1 hover:border-[#ebebeb] rounded-lg border-transparent border-2 transition"><span className='text-xs text-[#5ebdbd] font-semibold'># </span>Java</span>
                  </div>
               </div>
               <div className="px-2 space-y-3">
                  <p>To use the app, you first need to specify where to start and stop dragging. Once those points are specified, you can enter in the height/width of the search pattern and then you can click start. Pressing any key on the keyboard will stop or quit the application depending on the key pressed. It currently only searches top-bottom, but it does search from both left-right and right-left.</p>
               </div>
               <div className="mt-4 px-4">
                  <div className="flex justify-center mb-4">
                     <img src="https://boonaki.me/imgs/etkr-macro.png"></img>
                  </div>
                  <video controls>
                     <source src="https://d1d86ky427gzi9.cloudfront.net/videos/cllg3t4hs0003l80frpr8l9ya.mp4" type="video/mp4"></source>
                  </video>
               </div>
            </div>
         </div>
      </>
   )
}

export default EtkrMacro