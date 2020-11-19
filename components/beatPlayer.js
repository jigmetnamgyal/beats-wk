import styles from "./beatsPlayer.module.css"
import Button from "./button";
import LicenseForm from "./licenseForm";
import Link from 'next/link';
import React, {useState} from "react";

export default function BeatsPlayer(props) {
    const [showForm, setForm] = useState(false);
    const [btnLabel, setLabel] = useState('Add To Cart')
    return (
        <span>
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
                        <div className={styles.cartBtn} onClick={() => {
                            if (btnLabel === 'Add To Cart') {
                                setForm(true);
                            } else {
                                setLabel('Add To Cart')
                            }

                        }}>
                            <Button buttonLabel={btnLabel}/>
                        </div>
                    </div>
                </div>
            </div>
            {showForm ? <LicenseForm showLicense={true} setShow={setForm} setLabel={setLabel}/> : null}
        </span>
    )
}

