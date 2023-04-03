import Head from 'next/head'
import Image from 'next/image'

const TeaPage = () => {
    return (
        <>
            <Head>
                <title>Tea API</title>
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
                <div>
                    <Image src="" alt=""></Image>
                </div>
            </div>
        </>
    )
}

export default TeaPage