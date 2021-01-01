import styles from './footer.module.css';
import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerChildOneContainer}>
                <div className={styles.footerOne}>
                    <div className={styles.titleHolder}>
                        <img className={styles.imgLogo} src='/images/logo.svg' alt="CompanyLogo"/>
                        <h4>WK Beats</h4>
                    </div>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."</p>
                    <div className={styles.footerOneMediaContainer}>
                        <a href="https://www.instagram.com/wangchuk_k/" rel="noopener noreferrer" target="_blank" className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a href="https://www.facebook.com/Wangchuk-Kinga-Beats-2199505916803723" rel="noopener noreferrer" target="_blank" className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        {/* <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a> */}
                    </div>
                </div>

                <div className={styles.footerTwo}>
                    <h4>Quick Links</h4>
                    <Link href="/">Home</Link>
                    <Link href="/beats">Beats</Link>
                    
                </div>
                <div className={styles.footerFour}>
                    <h4>About Us</h4>
                    <Link href="/aboutMe">About Us</Link>
                    <Link href="/contactUs">Contact Us</Link>
                   
                </div>
                <div className={styles.footerThree}>
                    <h4>Legal</h4>
                    <Link href="/">Terms and condition
                    </Link>
                    <Link href="/">Privacy and Policy</Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerChildTwoContainer}>
                <div className={styles.footerTwoContainer}>
                    <p>
                        &copy;Wk Beats Bhutan 2020-
                        <span> get your beat</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer