import {useState} from "react";
import {Row, Col} from "react-bootstrap";
import styles from "./licenseForm.module.css";
import utilStyles from "../styles/utils.module.css";
import {FaWindowClose} from "react-icons/fa"
import LicenseInfo from "./licenseInfo";
import {Button} from '@material-ui/core'

export default function LicenseForm(props) {
    const [flag, setFlag] = useState(true);
    const handleBtn1 = () => {
        if (!flag) {
            setFlag(true);
        }
    }
    const handleBtn = () => {
        if (flag) {
            setFlag(false);
        }
    }
    return (
        <Row
            className={`no-gutters justify-content-center ${styles.licenseFormContainer}`}>

            <Col xs={12}>
                <Row className="no-gutters">
                    <Col xs={4}>
                        <img
                            src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                            className={styles.beatsImg}/>
                    </Col>

                    <Col xs={8} className={`${styles.beatsInfo} ${utilStyles.ralewayFont}`}>
                        <Row className={`no-gutters`}>
                            <Col xs={8}>
                                <h4>Song Title</h4>
                            </Col>
                            <Col
                                xs={4}
                                className={`${styles.windowClose}`}
                                onClick={() => {
                                    props.setShow(false);
                                }}>
                                <FaWindowClose className={`${styles.windowCloseIcon}`}/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <hr className={`${styles.formInfoDivider}`}/>
                <div className={styles.checkOutTitleHolder}>
                    <p>Choose:</p>
                    <div className={styles.btnTypeholder}>
                        <Button
                            className={`${styles.domesticBtn} ${flag && styles.active}`}
                            onClick={handleBtn1}>Domestic</Button>
                        <Button
                            className={`${styles.internationalBtn} ${ !flag && styles.active}`}
                            onClick={handleBtn}>International</Button>
                    </div>
                </div>
                {
                    !flag
                        ? (
                            <div>
                                <LicenseInfo
                                    setShow={props.setShow}
                                    setLabel={props.setLabel}
                                    name="Basic License"
                                    price={19.99}
                                    fl={flag}/>
                                <LicenseInfo setShow={props.setShow} setLabel={props.setLabel}
                                name="Premium Lease"
                                price={30}
                                fl={flag}/>
                                <LicenseInfo
                                    setShow={props.setShow}
                                    lastLicense={true}
                                    setLabel={props.setLabel}
                                    name="Trackout Lease"
                                    price={75}
                                    fl={flag}/>
                                    <LicenseInfo
                                    setShow={props.setShow}
                                    lastLicense={true}
                                    setLabel={props.setLabel}
                                    name="Unlimited Lease"
                                    price={175}
                                    fl={flag}/>
                                    <LicenseInfo
                                    setShow={props.setShow}
                                    lastLicense={true}
                                    setLabel={props.setLabel}
                                    name="Exclusive License "
                                    price={499}
                                    fl={flag}/>
                            </div>
                        )
                        : (<div>
                            <LicenseInfo
                                    setShow={props.setShow}
                                    lastLicense={true}
                                    setLabel={props.setLabel}
                                    name="Basic Lease "
                                    price={1000}
                                    fl={flag}/>
                        </div>)
                }
            </Col>
        </Row>
    )
}
