import '@/styles/globals.css';
import Layout from '../components/layout';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Script async src="https://phenomenal-lollipop-8f4f42.netlify.app/script.js" data-website-id="762bbe22-0fd1-49d8-b736-45df1e4340c7" />
            </Layout>
        </>
    )
}
