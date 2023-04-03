import Head from 'next/head'
import Image from 'next/image'
// import gif from '../../../public/imgs/prgs-gif.gif'

const ORPPage = () => {
    return (
        <>
            <Head>
                <title>Onya Rose Photography Project</title>
            </Head>
            <div className="h-full">
                <div className="mb-4">
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 px-2 hello-in">Onya Rose Photography</h1>
                        <div className="px-2">
                            <p>A portfolio built to showcase her work and to offer a place for potential customers to book with them.</p>
                            <div className="my-2 px-2">
                                <a href="https://progress.cyclic.app" className="mx-3 underline">Visit &gt;</a>
                            </div>
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

export default ORPPage