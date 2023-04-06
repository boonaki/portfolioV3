import Head from 'next/head'

const OvenonPage = () => {
    return (
        <>
            <Head>
                <title>Ovenon Bakery</title>
            </Head>
            <div className="h-full">
                <div className="mb-4">
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Ovenon Bakery</h1>
                        <div className="px-2">
                            <p>A landing page made for a local bakery, featuring a detailed list of every item they offer.</p>
                            <div className="my-2">
                                <a href="https://ovenonbakery.netlify.app/" className="mx-2 underline">Visit</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default OvenonPage