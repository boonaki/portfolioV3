import Head from 'next/head'
import Link from 'next/link'

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Me</title>
            </Head>
            <div>
                <div>
                    <div className="w-[3px] h-full bg-white"></div>
                    <div>
                        <h1 className="text-6xl tracking-wide font-semibold mb-3 px-2">Contact</h1>
                        <div className="px-2">
                            <p>I am always open to new freelance clients, interesting project opportunities, and new friends! Feel free to reach out using the form below or any of my socials.</p>
                            <div className="my-2">
                                <a href="https://progress.cyclic.app/u/boonaki" className="mx-2 underline">My Progress &gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 mt-4 mb-8 md:my-0">
                    <form>
                        <div className="md:flex my-2">
                            <div className="mx-2 md:mx-3 my-3">
                                <label for="name" className="sr-only">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" className="bg-transparent p-2 border-b-2 border-[#333] placeholder-[#4c4c4c] w-full focus:outline-none focus:border-white transition"></input>
                            </div>
                            <div className="mx-2 md:mx-3 my-3">
                                <label for="email" className="sr-only">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" className="bg-transparent p-2 border-b-2 border-[#333] placeholder-[#4c4c4c] w-full focus:outline-none focus:border-white transition"></input>
                            </div>
                        </div>
                        <div className="mx-3 my-2">
                            <label for="message" className="sr-only">Message</label>
                            <textarea className="bg-transparent p-2 border-b-2 border-[#333] placeholder-[#4c4c4c] w-full focus:outline-none focus:border-white transition" rows="5" placeholder="Enter a Message" id="message" name="message"></textarea>
                        </div>
                        <div className="mt-8 px-4">
                            <button className="w-full py-2 rounded-lg border-2 border-white hover:bg-white hover:text-[#202020] transition">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Contact
