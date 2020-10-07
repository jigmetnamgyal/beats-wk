import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/Navbar';
import Footer from '../components/footer';
import SideBar from '../components/NavBar/tools/SideBar';
import { useState } from 'react';
import Navagation from '../components/NavBar/NavigationBar';
export default function Home() {

    // const [toggleFlag, setToggleFlag] = useState(false);

    // const hamHandler = () => {
    //     if(!toggleFlag){
    //         setToggleFlag(true)
    //     }
        
    // }

    // const closeHandler = () => {
    //     setToggleFlag(false);
    // }

    

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                {/* <NavBar hamHandler={hamHandler}/>
                {toggleFlag && <SideBar close={closeHandler} show={toggleFlag}/>} */}
                <Navagation />
            </main>

            <Footer/>
        </div>
    )
}
