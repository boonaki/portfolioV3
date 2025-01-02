import React from 'react'
import Link from 'next/link'

const MenuOptions = ({ menuOpts }) => {
   return (
      <div className="px-4 w-11/12 flex flex-col items-start">
         {menuOpts.map(e => (
               e.type === "int" ?
               <Link href={e.url} key={e.url} className="my-1 p-2 w-full rounded hover:bg-[#5353534a] hover:text-accent transition">{e.title}</Link>
               :
               <a href={e.url} key={e.url} className="my-1 p-2 w-full rounded hover:bg-[#5353534a] hover:text-accent transition">{e.title}</a>
            )
         )}
      </div>
   )
}

{/* <div>{if(e.type === 'int'){(
   <>
      <Link key={e.url} href={e.url} className="my-1 w-full p-2 rounded hover:bg-[#5353534a] transition">{e.title}</Link>
      <div className="w- h-[4px] bg-white"></div>
   </>
)
}else{
      (
         <>
            <a href={e.url} key={e.url} className="my-1 w-full p-2 rounded hover:bg-[#5353534a] transition">{e.title}</a>
         </>
      )
   }
   }</div> */}
export default MenuOptions