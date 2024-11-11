
import Link from 'next/link'
import { useState } from 'react'
import MenuOptions from './menuoptions'

const Navbar = (props) => {
   const [selected, setSelected] = useState(1)

   const updateOptions = (n) => {
      setSelected(n)
   }

   let elem

   switch (selected) {
      case 1:
         elem = <MenuOptions menuOpts={[
            { url: '/evolvr', title: 'Evolvr', type: 'int' },
            { url: '/pomorings', title: 'POMO Rings', type: 'int' },
            { url: '/gemini-uas', title: 'Gemini UAS', type: 'int' },
            { url: '/skyward', title: 'Skyward', type: 'int' },
            { url: '/onya-rose', title: 'Onya Rose Photography', type: 'int' },
            { url: '/ovenon', title: 'Ovenon Bakery', type: 'int' }
         ]} />
         break;
      case 2:
         elem = <MenuOptions menuOpts={[
            { url: '/nasa', title: 'NASA Research APOD', type: 'int' },
            { url: '/etkr-macro', title: 'ETKR: Macro', type: 'int' },
            { url: '/square-tag', title: 'Square Tag', type: 'int' },
            { url: '/tower-defense', title: 'Fish Horde: Tower Defense Game', type: 'int' },
         ]} />
         break;
      case 3:
         elem = <MenuOptions menuOpts={[{ url: 'mailto:joshdurrett17@gmail.com', 'title': 'Email', type: 'ext' }, { url: 'https://github.com/boonaki', 'title': 'Github', type: 'ext' }, { url: 'https://twitter.com/durrettjosh', 'title': 'Twitter', type: 'ext' }, { url: 'https://linkedin.com/in/joshdurrett', 'title': 'LinkedIn', type: 'ext' }]} />
         break;
   }

   return (
      <section className='flex justify-center md:flex-col md:justify-start mt-8 md:mt-0'>
         <div className='w-full justify-end px-4 hidden md:flex'>
            <button onClick={() => props.handleMenu()} className='p-1 hover:bg-[#333] rounded' title={props.isOpen ? 'Close Menu' : 'Open Menu'}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category-2" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 4h6v6h-6z" />
                  <path d="M4 14h6v6h-6z" />
                  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
               </svg>
            </button>
         </div>
         {props.isOpen &&
            <div className="flex flex-col items-center my-6 w-full min-[450px]:w-[450px] md:w-[380px] lg:w-[410px]">
               {/* tabs component */}
               <div className="flex flex-col items-center w-full px-4">
                  <div className="flex justify-between items-center px-2 w-full font-semibold sm:px-4 text-white text-lg sm:text-xl">
                     <button className={selected === 1 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(1)}>Portfolio</button>
                     <button className={selected === 2 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(2)}>Other</button>
                     <Link href="/contact" className={selected === 3 ? 'translate-y-[-0.175rem] transition duration-75' : 'text-[#5b5b5b] transition duration-75 hover:text-white hover:translate-y-[-0.175rem]'} onClick={() => updateOptions(3)}>Contact</Link>
                  </div>

                  {/* spacer */}
                  <div className="w-full bg-white h-[2px] rounded-lg mt-2 mb-3"></div>
               </div>


               {/* options component */}
               {elem}

            </div>
         }
      </section>
   )
}

export default Navbar