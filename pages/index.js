import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import Home from './home'

import Header from './components/header'
import Navigation from './components/navigation'
import Footer from './components/footer'


export default function Origin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mareks Portfolio</title>
        <meta name="description" content="Welcome to my website where I show off my profesisonal skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Navigation />

      <main className={styles.main}>
        <Home />
      </main>

      <Footer />

      <Image src="/images/blackcat3.png" alt="blackcat3.png" width={72} height={72} />
      <Image src="/images/githubcat.png" alt="githubcat.png" width={72} height={72} />

    </div>
  )
}
