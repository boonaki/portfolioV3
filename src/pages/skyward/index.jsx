import Head from 'next/head'
import Image from 'next/image'
// import gif from '../../../public/imgs/prgs-gif.gif'

const SkywardPage = () => {
    return (
        <>
            <Head>
                <title>Skyward Project</title>
            </Head>
            <div className="h-full">
                <div className="mb-4">
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 px-2 hello-in">Skyward</h1>
                        <div className="px-2">
                            <p>A platform built to offer visitors the ability to peek into the various workshops Skyward offers and book their next appointments. Features a Content-Management System specialized for the owners' needs.</p>
                            <div className="my-2 px-2">
                                <a href="https://reachskyward.com" className="mx-3 underline">Visit &gt;</a>
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

export default SkywardPage