
import Link from 'next/link'
import { useState } from 'react'
import MenuOptions from './menuoptions'

const Navbar = () => {
   const [selected, setSelected] = useState(1)

   const updateOptions = (n) => {
      setSelected(n)
   }

   let elem

   switch (selected) {
      case 1:
         elem = <MenuOptions menuOpts={[
            { url: '/evolvr', title: 'Evolvr', type: 'int' },
            { url: '/progressio', title: 'Progressio', type: 'int' },
            { url: '/skyward', title: 'Skyward', type: 'int' },
            { url: '/onya-rose', title: 'Onya Rose Photography', type: 'int' },
            { url: '/gemini-uas', title: 'Gemini UAS', type: 'int' },
            { url: '/ovenon', title: 'Ovenon Bakery', type: 'int' }
         ]} />
         break;
      case 2:
         elem = <MenuOptions menuOpts={[
            { url: '/nasa', title: 'NASA Research APOD', type: 'int' },
            { url: '/ill-will', title: 'Ill Will', type: 'int' },
            { url: '/square-tag', title: 'Square Tag', type: 'int' }
         ]} />
         break;
      case 3:
         elem = <MenuOptions menuOpts={[{ url: 'mailto:joshuadurrett@boonaki.me', 'title': 'Email', type: 'ext' }, { url: 'https://github.com/boonaki', 'title': 'Github', type: 'ext' }, { url: 'https://twitter.com/durrettjosh', 'title': 'Twitter', type: 'ext' }, { url: 'https://linkedin.com/in/joshdurrett', 'title': 'LinkedIn', type: 'ext' }]} />
         break;
   }

   return (
      <section className="flex flex-col items-center my-6 min-[390px]:w-[390px] md:w-[380px] lg:w-[410px]">
         {/* tabs component */}
         <div className="flex flex-col items-center w-full px-4">
            <div className="flex justify-between items-center px-2 w-full font-semibold sm:px-4 text-white text-lg sm:text-xl">
               <button className={selected === 1 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(1)}>Web Dev</button>
               <button className={selected === 2 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(2)}>Other</button>
               <Link href="/contact" className={selected === 3 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(3)}>Contact</Link>
            </div>

            {/* spacer */}
            <div className="w-full bg-white h-[2px] rounded-lg mt-2 mb-3"></div>
         </div>


         {/* options component */}
         {elem}

      </section>
   )
}

export default Navbar