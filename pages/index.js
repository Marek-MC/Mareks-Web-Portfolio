import styles from '../styles/Origin.module.css'

import Head from 'next/head'
import Image from 'next/image'

import Home from './home'
import Projects from './projects'
import Photography from './photography'

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


      <Header className={styles.header}/>
      <Navigation />

      <main className={styles.main}>
        <Home />
        <Projects />
        <Photography />
      </main>

      <Footer className={styles.footer}/>

      <Image id="blackcat3" src="/images/blackcat3.png" alt="blackcat3.png" width={64} height={64} />

    </div>
  )
}
