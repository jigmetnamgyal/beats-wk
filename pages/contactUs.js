import styles from '../components/contact.module.css';
import NavigationBar from '../components/NavBar/NavigationBar';
import Footer from '../components/footer';
import {Button} from '@material-ui/core'
const contactUs = () => {
    return (
        <div className={styles.contactUsContainer}>
            <NavigationBar/>
            <div className={styles.contactUsTitleHolder}>
                <p>Got a Questions</p>
                <h3>Contact WBK</h3>
                <p className={styles.titleContent}>We’re here to help and answer any question
                    you might have. We look forward to hearing from you 🙂</p>
            </div>

            <form className={styles.formContainer}>
                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />

                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />

                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Email</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />

                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Message</label>
                    <textarea
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"/>

                </div>
                <Button className={styles.contactUsButton}>Send Message</Button>

            </form>

           

            <Footer/>
        </div>
    )
}

export default contactUs
