import '@/styles/globals.css';
import Layout from '../components/layout';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Script defer src="https://beamish-pastelito-7a7f06.netlify.app/script.js" data-website-id="d0eb31c4-0529-4d73-8ff7-cbfff9d80ed1"></Script>
            </Layout>
        </>
    )
}
