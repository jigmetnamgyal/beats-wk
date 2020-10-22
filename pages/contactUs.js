import styles from '../components/contact.module.css';
import NavigationBar from '../components/NavBar/NavigationBar';
import Footer from '../components/footer';
const contactUs = () => {
    return (
        <div className={styles.contactUsContainer}>
            <NavigationBar />
            <div className={styles.contactUsTitleHolder}>
                <p>Got a Questions</p>
                <h2>Contact WBK</h2>
                <p className={styles.titleContent}>We’re here to help and answer any question you might have. We look forward to hearing from you 🙂</p>
            </div>

            


            <Footer/>
        </div>
    )
}

export default contactUs
