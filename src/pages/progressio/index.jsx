import Head from 'next/head'
import Image from 'next/image'
import gif from '../../../public/imgs/prgs-gif.gif'

const ProgressioPage = () => {
    return (
        <>
            <Head>
                <title>Progressio</title>
            </Head>
            <div className="h-full">
                <div className="mb-4">
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Progressio</h1>
                        <div className="px-2">
                            <p>A place to post, organize and share the progress you make in any hobby or activity you have interest in.</p>
                            <div className="my-2">
                                <a href="https://progress.cyclic.app" className="mx-2 underline">Visit</a>
                                <a href="https://github.com/boonaki/progressio" className="mx-2 underline">Read More</a>
                            </div>
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

export default ProgressioPage