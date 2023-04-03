

export const AboutPage = () => {
    return (
        <>
            <Head>
                <title>About Josh</title>
            </Head>
            <div>
                <div>
                    <div className="w-[3px] h-full bg-white"></div>
                    <div>
                        <h1 className="text-6xl tracking-wide font-semibold mb-3 px-2">About Me</h1>
                        <div className="px-2">
                            <p>My name is Josh Durrett. I am a fullstack web-developer based in Raleigh, North Carolina. I work to make the world a better place through my skills as a Software Engineer.</p>
                            <div className="my-2">
                                <a className="mx-2 underline">My Progress</a>
                                <Link href="" className="mx-2 underline">More About Me</Link>
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
