import React from 'react'
import Link from 'next/link'

const MenuOptions = ({ menuOpts }) => {
    return (
        <div className="px-4 w-5/6 flex flex-col items-start">
            {menuOpts.map(e =>
                {
                    if(e.type === 'int'){
                        return (
                                <>
                                    <Link key={e.url} href={e.url} className="my-1 w-full p-2 rounded hover:bg-[#5353534a] transition">{e.title}</Link>
                                    <div className="w- h-[4px] bg-white"></div>
                                </>
                        )
                    }else{
                        return (
                            <>
                                <a href={e.url} key={e.url} className="my-1 w-full p-2 rounded hover:bg-[#5353534a] transition">{e.title}</a>
                            </>
                        )
                    }
                }
            )}
        </div>
    )
}

export default MenuOptions