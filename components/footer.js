import {Col, Row, Container} from "react-bootstrap";
import {FaFacebook, FaSoundcloud, FaInstagram, FaTwitter,FaLinkedin} from "react-icons/fa";
import styles from "./footer.module.css"
import utilStyles from "../styles/utils.module.css"
export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <hr className={utilStyles.hr}/>
            <Row className={`justify-content-center`}>
                <Col xs={11}>
                    <Row className="justify-content-center">
                        <Col xs={2} className={styles.footerIconContainer}><FaFacebook className={styles.footerIcons}/></Col>
                        <Col xs={2} className={styles.footerIconContainer}><FaSoundcloud className={styles.footerIcons}/></Col>
                        <Col xs={2} className={styles.footerIconContainer}><FaInstagram className={styles.footerIcons}/></Col>
                        <Col xs={2} className={styles.footerIconContainer}><FaTwitter className={styles.footerIcons}/></Col>
                        <Col xs={2} className={styles.footerIconContainer}><FaLinkedin className={styles.footerIcons}/></Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={11} className={styles.titleName}>
                            <p>WANGCHUK KINGA BEATS  ©</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
