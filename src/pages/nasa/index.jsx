import Head from 'next/head'
import Image from 'next/image'
import gif from '../../../public/imgs/nasaapod.gif'

const NasaPage = () => {
    return (
        <>
            <Head>
                <title>NASA APOD</title>
            </Head>
            <div>
                <div>
                    <div className="w-[3px] h-full bg-white"></div>
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">NASA Apod</h1>
                        <div className="px-2">
                            <p>This fullstack web application pulls data provided by NASA and displays the data based on either a random date or a user-specified date.</p>
                            <div className="my-2">
                                <a href="https://nasaapodfinder.up.railway.app/" className="mx-2 underline">Website</a>
                                <a href="https://github.com/boonaki/nasaAPODapp" className="mx-2 underline">Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={gif} alt="gif" className="w-full my-6" />   
                </div>
            </div>
        </>
    )
}

export default NasaPage