import Head from 'next/head'
import { useState } from 'react'

const Contact = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [submitted, setSubmitted] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      let data = {
         name,
         email,
         message
      }

      fetch('/api/contact', {
         method: 'POST',
         headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      }).then((res) => {
         console.log(res.status, res)
         if (res.status === 200) {
            console.log('message sent')
            setSubmitted(true)
            setName('')
            setEmail('')
            setMessage('')
            setTimeout(() => {
               document.getElementById('info-msg').classList.add('info-msg-out');
               document.getElementById('info-msg').classList.remove('info-msg-in');
               setSubmitted(false)
             }, 5000);             
         }
      })
   }

   return (
      <>
         <Head>
            <title>Contact Me</title>
            <meta name="author" content="Josh Durrett" />
         </Head>
         {submitted &&
            <div className="absolute left-0 top-0 w-full flex justify-center mt-8">
               <span id="info-msg" className="info-msg-in transition w-fit py-3 px-4 rounded-lg bg-[#539576] font-bold">Message Sent</span>
            </div>
         }
         <div className='detail-view'>
            <div>
               <div>
                  <h1 className="detail-heading">Contact</h1>
                  <div>
                     <div className="font-mono mb-4">
                        <p>I am always open to new freelance clients, interesting project opportunities, and new friends! Feel free to reach out using my email or any of my socials.</p>
                     </div>
                     <a href="mailto:joshdurrett17@gmail.com" className="button-secondary w-fit hover:text-accent flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-mail mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        joshdurrett17@gmail.com
                     </a>
                  </div>
               </div>
            </div>
            {/* <div className='divider'></div> */}
            {/* <div className="px-4 mt-4 mb-8 md:my-0">
               <form>
                  <div className="md:flex my-2">
                     <div className="mx-2 md:mx-3 my-3">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-transparent p-2 border-b-2 border-[#333] rounded-none placeholder-[#4c4c4c] w-full focus:outline-none focus:border-[#a9ebff] transition"></input>
                     </div>
                     <div className="mx-2 md:mx-3 my-3">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-transparent p-2 border-b-2 border-[#333] rounded-none placeholder-[#4c4c4c] w-full focus:outline-none focus:border-[#a9ebff] transition"></input>
                     </div>
                  </div>
                  <div className="mx-3 my-2">
                     <label htmlFor="message" className="sr-only">Message</label>
                     <textarea className="bg-transparent p-2 border-b-2 border-[#333] rounded-none placeholder-[#4c4c4c] w-full focus:outline-none focus:border-[#a9ebff] transition" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter a Message" id="message" name="message"></textarea>
                  </div>
                  <div className="mt-8 px-4">
                     <button onClick={(e) => handleSubmit(e)} className="w-full py-2 rounded-lg border-2 border-white hover:bg-white hover:text-[#202020] transition">Send Message</button>
                  </div>
               </form>
            </div> */}
         </div>
      </>
   )
}

export default Contact
