import '@/styles/globals.css';
import Layout from '../components/layout';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Script defer src="https://beamish-pastelito-7a7f06.netlify.app/script.js" data-website-id="563edfc9-02d8-4008-b549-50e3e6477aa8"></Script>
            </Layout>
        </>
    )
}
