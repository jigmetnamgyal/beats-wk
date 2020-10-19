import {Row, Col} from "react-bootstrap";
import styles from "./licenseForm.module.css";
import utilStyles from "../styles/utils.module.css";
import {FaWindowClose} from "react-icons/fa"
export default function LicenseForm() {
    return (
        <Row className={`no-gutters justify-content-center ${styles.licenseFormContainer}`}>
            <Col xs={12}>
                <Row className="no-gutters">
                    <Col xs={4}>
                        <img src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                             className={styles.beatsImg}/>
                    </Col>
                    <Col xs={8} className={`${styles.beatsInfo} ${utilStyles.ralewayFont}`}>
                        <Row className={`no-gutters`}>
                            <Col xs={8}>
                                <h4>Song Title</h4>
                            </Col>
                            <Col xs={4} className={`${styles.windowClose}`}>
                                <FaWindowClose className={`${styles.windowCloseIcon}`}/>
                            </Col>
                        </Row>
                        <p>SONG ARTIEST</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
