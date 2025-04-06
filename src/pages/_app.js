import '@/styles/globals.css';
import Layout from '../components/layout';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Script defer src="https://quiet-biscotti-119867.netlify.app/script.js" data-website-id="efe0f749-bf18-48c1-b5d2-054382cf5584"></Script>
            </Layout>
        </>
    )
}
