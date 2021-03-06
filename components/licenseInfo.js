import {Row,Col} from "react-bootstrap";
import utilStyles from "../styles/utils.module.css"
import styles from "./licenseInfo.module.css";
import {FaCheckCircle} from "react-icons/fa"
export default function LicenseInfo(props) {
    return(
        //:TODO: decide which are gonna be props and how its all going to work
        //what i have in mind right now is that a props is going to be passed which is the song id and then info corresponding to that id
        <Row className={`no-gutters justify-content-center `}>
            {console.log(props.lastLicense)}
            <Col xs={11} className={props.lastLicense ? `${styles.lastLicenseInfoContainer}`:`${styles.licenseInfoContainer}`}>
                <Row>
                    <Col xs={4} className={`${styles.licenseName}`}>
                        <h5 className={`${styles.licenseNameName}`}>
                            {props.name}
                        </h5>
                    </Col>
                    <Col xs={8} className={`${styles.licensePriceContainer}`}>
                        <h6 className={`${styles.licensePrice}`}>
                            {props.price} {!props.fl ? ("$"):("Nu")}
                        </h6>
                    </Col>
                </Row>
                <Row className={`no-gutters`}>
                    <Col xs={6} className={`${styles.fileFormats}`}>
                        <p>Wav 3, Mp3 and others</p>
                    </Col>
                    <Col xs={6} className={`${styles.selectLicense}`}>
                        <FaCheckCircle className={`${styles.selectLicenseIcon}`}
                                       onClick={()=>{
                                           props.setShow(false);
                                           props.setLabel('Remove From Cart')
                                       }}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
