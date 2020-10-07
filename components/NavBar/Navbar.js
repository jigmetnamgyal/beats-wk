import styles from './navbar.module.css';
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link';
import Ham from './tools/HamBurger';
import {FaShoppingCart} from "react-icons/fa"
import {useState} from 'react';
const Navbar = ({hamHandler}) => {
    const [count, setCount] = useState(0);
    return (
        <header className={styles.navBar}>
            <div className={styles.navBarHolder}>
                <div className={styles.hamHolder}>
                    <Ham click = {hamHandler}/>
                </div>
                <div className={styles.cartHolder}>
                    <FaShoppingCart className={styles.cartIcon}/>
                    <p>{count}</p>
                </div>

            </div>

        </header>
    )
}

export default Navbar
