import styles from './navbar.module.css';
import utilStyles from "../../styles/utils.module.css";
import Link from 'next/link';
import Ham from './tools/HamBurger';

const Navbar = () => {
    return (
        <header className={styles.navBar}>
            <Ham />
            <nav>
                <div>
                    <ul>
                        <li><Link href="/"><a></a></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
