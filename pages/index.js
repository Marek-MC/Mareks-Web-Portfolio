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

        <p>Welcome to My Abode ~ Savis Undefined</p>

        <h3>·₊˚✧ ~ Added Features ~ ✧˚₊·</h3>

        <p>
          [] - Saviland Brainstorm: Think hard about what this application will do, and with what data. Keet a note somewhere. <br />
          [] - PostgreSQL Database: Create a Database, and write 4 backend routes - [] GET, [] POST, [] PUT, [] DELETE <br />
          [] - Prisma ORN: Using Prisma, we must pipe data from the DB and into our app. <br />
          
        </p>

        <hr />

        <p>
          [X] - Navigation Bar: Switch to different components from one single component that doubles as a top to your app. <br />
          [] - Navbar Menus: Implement popup menus for your navigation routes. We want access to many pages. <br />
          [] - Footer w/ Links: I should link newcomers to my GitHub, Discord, and more.
        </p>

        <hr />

        <p>
          [] - Profile System: Implement an Auth0 Profile sSystem using your PostgreSQL DB. We will keep this secure as possible. <br />
          [] - Vault System: Learn how to store files permanantly inside a Database (Will PostgreSQL work for this?) <br />
          [] - Project ChatBase: A chat system hosted directly inside this application, and uses user data from the DB. <br />
        </p>

        <hr />

        <p>
          [] - Launch: Host product on the web.
        </p>







      </main>

      <Image id="blackcat3" src="/images/blackcat3.png" alt="blackcat3.png" width={64} height={64} />

    </div>
  )
}
