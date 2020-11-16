import styles from './navbar.module.css';
import Ham from './tools/HamBurger';
import {FaShoppingCart} from "react-icons/fa"
import {useState} from 'react';
import Link from 'next/link';

const Navbar = ({hamHandler}) => {
    const [count, setCount] = useState(0);
    return (
        <header className={styles.navBar}>
                <div className={styles.hamHolder}>
                    <Ham click = {hamHandler}/>
                </div>
                <div className={styles.img_container}>
                <img className={styles.header__logo} src='images/logo.svg' alt="Hello"/>
                </div>
                   
                <nav className={styles.header__navigation}>
                    <ul>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/aboutMe"><a>About Me</a></Link>
                        <Link href="/beats"><a>Beats</a></Link>
                        <Link href="/contactUs"><a>Contact</a></Link>
                        <Link href="/"><a>Cart Review</a></Link>
                    </ul>
                </nav>
                <div className={styles.cartHolder}>
                    <FaShoppingCart className={styles.cartIcon}/>
                    <p>{count}</p>
                </div>

        </header>
    )
}

export default Navbar
