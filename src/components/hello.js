import { useState, useEffect } from 'react'
const hellos = [
    {
        text: "Hello!",
        lang: "en"
    },
    {
        text: "Bonjour!",
        lang: "fr"
    },
    {
        text: "Ciao!",
        lang: "it"
    },
    {
        text: "Guten-tag!",
        lang: "de"
    },
    {
        text: "Oi!",
        lang: "pt"
    },
    {
        text: "Yokwe!",
        lang: "mh"
    },
    {
        text: "你好!",
        lang: "zh-Hans"
    },
    {
        text: 'こんにちは!',
        lang: "ja"
    },
    {
        text: '안녕하세요!',
        lang: "ko"
    },
    {
        text: "привіт!",
        lang: "uk"
    },
    {
        text: "Ya’at’eeh!",
        lang: "nv"
    }

]

const Hello = () => {
    const [hello, setHello] = useState(hellos[0])
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const idleIntervalTimer = setInterval(() => {
            setIdx(prevIdx => (prevIdx + 1) % hellos.length)
        }, 7500);

        return () => {
            clearInterval(idleIntervalTimer);
        };
    }, []);

    useEffect(() => {
        setHello(hellos[idx]);
    }, [idx]);

    return (
        <h3 className="hello-in h-full" key={hello.lang} lang={hello.lang}>{hello.text}</h3>
    )
}

export default Hello