import { useState, useEffect } from 'react'

const Hello = () => {
    const [hello, setHello] = useState('Hello!')
    const [idx, setIdx] = useState(0)
    const hellos = ['¡Hola!', 'Bonjour!', 'Ciao!', 'Guten-tag!', 'Geia!', '你好!', 'こんにちは!', '안녕하세요!', 'Ya’at’eeh', 'Hello!']
    
    setInterval(() => {
        setIdx(idx + 1)
        setHello(hellos[idx % hellos.length])
    }, 5500)



    return (
        <div className="max-h-[75px] overflow-hidden text-6xl tracking-wide font-semibold ">
            <h1 className="mb-3 hello-in" key={hello}>{hello}</h1>
        </div>
    )
}

export default Hello