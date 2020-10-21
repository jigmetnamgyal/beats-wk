import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';
import Navagation from '../components/NavBar/NavigationBar';
import Playlist from '../components/playlist/Playlist';
export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Wk Beats</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navagation/>
            <main className={styles.mainPage}>
                <div className={styles.mainContentContainer}>
                    <div className={styles.homeHeadingContainer}>
                        <p className={styles.headingOne}>#1 market place to buy beats</p>
                        <p className={styles.headingTwo}>We have more than 1.2 m happy customers</p>
                    </div>
                </div>
               
            </main>
            <div className={styles.homepagePlaylistContainer}>
                    <Playlist title="Recommended Playlist" imageOne="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageTwo="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"/>
                    <Playlist title="Popular Playlist" imageTwo="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageOne="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg" />
                    <Playlist title="Lorem Ipsum Playlist" imageOne="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png" imageTwo="https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg" />
            </div>
            <Footer/>
        </div>
    )
}
