import styles from '../components/checkout.module.css';
import NavigationBar from '../components/NavBar/NavigationBar';
import Footer from '../components/footer';
import {Button} from '@material-ui/core'
import {useState} from 'react'

const checkout = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(true);

    const firstNameHandle = e => {
        setFirstname(e.target.value);
    }
    const lastNameHandle = e => {
        setLastName(e.target.value);
    }
    const emailHandle = e => {
        setFirssetEmailtname(e.target.value);
    }
    const handleBtn = () => {
        if (flag) {
            setFlag(false);
        }
    }
    const handleBtn1 = () => {
        if (!flag) {
            setFlag(true);
        }
    }
    return (
        <div className={styles.checkoutContainer}>
            <NavigationBar/>
            <div className={styles.checkOutTitleHolder}>
                <p>Got a Questions</p>
                <div className={styles.btnTypeholder}>
                    <Button className={`${styles.domesticBtn} ${flag && styles.active}`} onClick={handleBtn1}>Domestic</Button>
                    <Button className={`${styles.internationalBtn} ${!flag && styles.active}`} onClick={handleBtn}>International</Button>
                </div>
            </div>

            <form className={styles.formContainer}>
                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                        onChange={firstNameHandle}
                        value={firstName}
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"/>

                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                        onChange={lastNameHandle}
                        value={lastName}
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"/>

                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Email</label>
                    <input
                        onChange={emailHandle}
                        value={email}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"/>

                </div>

                <Button className={styles.checkoutButton}>Proceed</Button>

            </form>

            <Footer/>
        </div>
    )
}

export default checkout
