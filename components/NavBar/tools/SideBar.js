import React from 'react'
import styles from './side.module.css';
import Link from 'next/link';
import {ImCross} from 'react-icons/im'
const SideBar = ({close, show}) => {
    
    return (
        <div className={`${styles.sidebar} ${show && styles.open}`}>
            <div className={styles.sidebarHeader}>
                <p className={styles.logo}>WKBeats</p>
                <ImCross className={styles.cross} onClick={close}/>
            </div>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/aboutMe"><a>About Me</a></Link></li>
                <li><Link href="/beats"><a>Beats</a></Link></li>
                <li><Link href="/contactUs"><a>Contact</a></Link></li>
                <li><Link href="/"><a>Cart Review</a></Link></li>
            </ul>
        </div>
    )
}

export default SideBar
