import styles from '../styles/origin.module.css'

import Head from 'next/head'
import Image from 'next/image'

import Navigation from './components/navigation'
import Footer from './components/footer'


export default function Origin(self) {
  return (
    <div className={styles.origin}>
      <Head>
        <title>Mareks Portfolio</title>
        <meta name="description" content="Welcome to my website where I show off my profesisonal skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />



        <h2>·₊˚✧{self.Head}✧˚₊·</h2>

        <h3>·₊˚✧Added Features✧˚₊·</h3>







      </main>

      <Image id="blackcat3" src="/images/blackcat3.png" alt="blackcat3.png" width={64} height={64} />

    </div>
  )
}
