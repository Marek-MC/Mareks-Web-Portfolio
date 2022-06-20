import styles from '../styles/origin.module.css'

import Head from 'next/head'
import Image from 'next/image'

import Navigation from './components/navigation'
import Footer from './components/footer'


export default function Origin(self) {

  const data = {
    title: "Saviland Net",
    description: "Literally my website, built for chats and aesthetics, profile making, and database mingling.",
  }


  return (
    <div className={styles.origin}>
      <Head>
        <title>Saviland Net</title>
        <meta name="description" content="Welcome to my website where I show off my profesisonal skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Navigation />

        <hr />

        <h1>·₊˚✧ ~ {data.title} ~ ✧˚₊·</h1>

        <p>{data.description}</p>

        <h3>·₊˚✧ ~ Added Features ~ ✧˚₊·</h3>

        <p>
          [X] - Navigation Bar: Switch to different components from one single component that doubles as a top to your app. <br />
          [] - Navbar Menus: Implement popup menus for your navigation routes. We want access to many pages. <br />
          [] - PostgreSQL Database: Create a Database, and write 4 routes - [] GET, [] POST, [] PUT, [] DELETE <br />
          [] -
        </p>







      </main>

      <Image id="blackcat3" src="/images/blackcat3.png" alt="blackcat3.png" width={64} height={64} />

    </div>
  )
}
