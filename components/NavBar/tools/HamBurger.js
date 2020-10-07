import React from 'react'
import styles from './ham.module.css';

const HamBurger = () => {
    return (
        <button className={styles.hamburger}>
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
            <div className={styles.hamLine}></div>
        </button>
    )
}

export default HamBurger
