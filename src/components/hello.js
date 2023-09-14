import { useState, useEffect } from 'react'

const Hello = () => {
    const [hello, setHello] = useState('Hello')
    const [idx, setIdx] = useState(0)
    const hellos = ['¡Hola!', 'Bonjour!', 'Ciao!', 'Guten-tag!', 'Oi!', 'Yokwe!', '你好!', 'こんにちは!', '안녕하세요!', 'привіт!', 'Ya’at’eeh!', 'Hello!']
    
    setInterval(() => {
        setIdx(idx + 1)
        setHello(hellos[idx % hellos.length])
    }, 7500)



    return (
        <h3 className="hello-in h-full" key={hello}>{hello}</h3>
    )
}

export default Hello