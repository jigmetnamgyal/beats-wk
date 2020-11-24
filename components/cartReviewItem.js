import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./cartReviewItem.module.css";
import utilStyles from "../styles/utils.module.css";
import {FaPlay, FaWindowClose} from 'react-icons/fa';
import {RiCloseLine} from 'react-icons/ri'

export default function CartReviewItem() {
    return (
        //:TODO: write down the props
        <span>
            <Row className={`no-gutters`}>
            <Col xs={2}>
                <div className={`${styles.playIconContainer}`}>
                    <FaPlay className={`${styles.playIcon}`}/>
                </div>
            </Col>
            <Col xs={5} className={`${utilStyles.text}`}>
                <Row className={`no-gutters ${styles.beatName}`}>
                    <Col xs={12}>
                        <span>Deathroes</span>
                    </Col>
                </Row>
                <Row className={`no-gutters ${styles.producer}`}>
                    <Col xs={12}>
                        <span>Wangchuk Kinga</span>
                    </Col>
                </Row>
            </Col>
            <Col xs={5} className={`${utilStyles.text}`}>
                <Row className={`no-gutters`}>
                    <Col xs={10} className={`${styles.prices}`}>
                        <span>30$ / 2100 BTN</span>
                    </Col>
                    <Col xs={2} className={`${styles.closeButton}`}>
                        <span> <RiCloseLine/> </span>
                    </Col>
                </Row>
                <Row className={`no-gutters`}>
                    <Col xs={12} className={`${styles.licenseName}`}>
                        <span>Lease License</span>
                    </Col>
                </Row>
            </Col>
        </Row>
            <hr className={`${utilStyles.hr}`}/>
        </span>
    )
}
