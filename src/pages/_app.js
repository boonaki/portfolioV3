import '@/styles/globals.css';
import Layout from '../components/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
