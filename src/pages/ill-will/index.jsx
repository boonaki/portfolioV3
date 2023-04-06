import Head from 'next/head'
import Image from 'next/image'
// import gif from '../../../public/imgs/prgs-gif.gif'

const IllWillPage = () => {
    return (
        <>
            <Head>
                <title>Ill Will Project</title>
            </Head>
            <div className="h-full">
                <div className="mb-4">
                    <div>
                        <h1 className="text-5xl tracking-wide font-semibold my-2 mb-3 px-2 hello-in">Ill Will</h1>
                        <div className="px-2">
                            <p>An E-commerce platform that allows users to browse a wide selection of candles or create their own using the build-your-own-candle tool. The project utilizes Stripe and Paypal for payment processing, in tandem with a custom-built Content-Management System and Inventory Management System to ensure a streamlined, user-friendly process for both business owners and customers.</p>
                            <div className="my-2 px-2">
                                <a href="https://illwillprototype.up.railway.app/" className="mx-3 underline">Visit &gt;</a>
                                <a href="https://illwillprototype.netlify.app/" className="mx-3 underline">See Prototype &gt;</a>
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

export default IllWillPage