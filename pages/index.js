import styles from '../styles/origin.module.css'

import Head from 'next/head'
import Image from 'next/image'

import Navigation from './components/navigation'
import Footer from './components/footer'


export default function Origin() {
  return (
    <div>
      <Head>
        <title>Mareks Portfolio</title>
        <meta name="description" content="Welcome to my website where I show off my profesisonal skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />

        <h2>Origin</h2>

      </main>


      <Image id="blackcat3" src="/images/blackcat3.png" alt="blackcat3.png" width={64} height={64} />

    </div>
  )
}
