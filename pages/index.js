import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from './components/header'
import Footer from './components/footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mareks Portfolio</title>
        <meta name="description" content="Welcome to my website where I show off my profesisonal skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        
      </main>

      <Footer />
      
    </div>
  )
}
