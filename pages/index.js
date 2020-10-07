import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/Navbar';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <main className={styles.main}>
    
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
