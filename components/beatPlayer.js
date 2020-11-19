import styles from "./beatsPlayer.module.css"
import Button from "./button";
import LicenseForm from "./licenseForm";
import Link from 'next/link';
import React from "react";
const handleClick = (e) => {
    e.preventDefault();
    console.log("what is this shit");
}
export default function BeatsPlayer(props) {
    return (
        <div className={styles.beatsPlayerContainer}>
            <div className={styles.albumArtContainer}>
                <img src={props.imgURL}/>
            </div>
            <div className={styles.beatDescription}>
                <div className={styles.songTitleMinute}>
                    <div className={styles.songTitle}>
                        Edgy Title
                    </div>
                    <div className={styles.songMinute}>
                        {props.beatDuration}
                    </div>
                </div>
                <div className={styles.prodCart}>
                    <div className={styles.beatProd}>
                        Wangchuk Kinga
                    </div>
                    <div className={styles.cartBtn}>
                        <Button buttonLabel={'Add To Cart'} onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
