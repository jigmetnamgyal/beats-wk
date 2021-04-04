import React from 'react'
import LiInfo from '../components/licenseInfoCard/InfoCard';
import Footer from '../components/footer/Footer';
import NavigationBar from '../components/NavBar/NavigationBar';
import styles from '../components/licenseInfoStyle.module.css';
// name, 
//     type,
//     noOfCopies,
//     streams,
//     musicVideo,
//     info
const licensingInfo = () => {
    return (
        <div>
            <NavigationBar/>
            <div className={styles.bossContainer}>
            <div className={styles.containerInfo}>
            <LiInfo price={19.99} name="Basic License" type="Distribute up to 2000 copies" streams='Stream up to 600000 plays' musicVideo='1 Music Video' info="WBK maintains the full ownership of the beat. Must credit: Prod.Wangchuk Kinga Beats on the song title"/>
            <LiInfo price={30} name="Premium Lease " type="Distribute up to 5000 copies" streams='Stream up to 700000 plays' musicVideo='1 Music Video' info="Commercial Use. WBK maintains the full ownership of the beat. Must credit: Prod.Wangchuk Kinga Beats on the song title"/>
            <LiInfo price={75} name="Trackout Lease" type="Distribute up to 11000 copies" streams='Stream up to 800000 plays' musicVideo='1 Music Video' info="Commercial Use. Arrange beat structure and adjust mix. MP3+Wav+Track stems. WBK maintains the full ownership of the beat. Must credit: Prod.Wangchuk Kinga Beats on the song title"/>
            </div>
            <NavigationBar/>
            <div className={styles.containerInfo}>
            <LiInfo price={175} name="Unlimited Lease " type="Distribute Unlimited Copies" streams='Unlimited Streams' musicVideo='1 Music Video' info="Commercial Use. Arrange beat structure and adjust mix. MP3+Wav+Track stems. WBK maintains the full ownership of the beat. Must credit: Prod.Wangchuk Kinga Beats on the song title"/>
            <LiInfo price={499} name="Exclusive License" type="Distribute Unlimited Copies" streams='Unlimited Streams' musicVideo='Unlimited Music Video' info="Customer maintains the full ownership of the beat. Once the exclusive License of the beat is purchased, the beat will be removed from my Website.Arrange beat structure and adjust mix. MP3+Wav+Track stems"/>
            <LiInfo price={14} name="Bhutanese Basic License" type="MP3" streams='Stream up to 1000000 plays' musicVideo='1 Music Video' info="WBK maintains the full ownership of the beat. Must credit: Prod.Wangchuk Kinga Beats on the song title"/>
            </div>

            </div>

            
            <Footer />
        </div>
    )
}

export default licensingInfo
