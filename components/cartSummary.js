import {Row,Col} from "react-bootstrap";
import utilStyles from "../styles/utils.module.css"
import styles from "./cartSummary.module.css"
import Button from "./button";
export default function CartSummary() {
    return(
            <Col xs={11} lg={{span: 4, offset: 2}} className={`${styles.cartSummaryContainer}`}>
                <Row className={`no-gutters justify-content-center`}>
                    <Col xs={11} className={`${utilStyles.title} ${styles.header}`}>
                        <h5>Cart Summary</h5>
                        <hr className={`${utilStyles.hr}`}/>
                    </Col>
                </Row>
                <Row className={`no-gutters justify-content-center`}>
                    <Col xs={11}>
                        <Row className={`no-gutters`}>
                            <Col xs={6} className={`${utilStyles.ralewayFont} ${styles.text}`}>
                                Item
                            </Col>
                            <Col xs={6} className={`${utilStyles.ralewayFont} ${styles.text} ${styles.priceHeader}`}>
                                Price
                            </Col>
                            <hr className={`${utilStyles.hr}`}/>
                        </Row>
                        <Row className={`no-gutters`}>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text}`}>
                                Deathroes
                            </Col>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text} ${styles.priceHeader}`}>
                                30$
                            </Col>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text} ${styles.items}`}>
                                Deathroes
                            </Col>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text} ${styles.priceHeader} ${styles.items}`}>
                                30$
                            </Col>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text} ${styles.items}`}>
                                Deathroes
                            </Col>
                            <Col xs={6} className={`${utilStyles.montserratFont} ${styles.text} ${styles.priceHeader} ${styles.items}`}>
                                30$
                            </Col>
                            <hr className={`${utilStyles.hr} ${styles.botHr}`}/>
                        </Row>
                        <Row className={`no-gutters ${styles.total}`}>
                            <Col xs={6} className={`${utilStyles.ralewayFont} ${styles.text}`}>
                                Total
                            </Col>
                            <Col xs={6} className={`${utilStyles.ralewayFont} ${styles.text} ${styles.priceHeader}`}>
                                90$
                            </Col>
                        </Row>
                        <Row className={`no-gutters justify-content-center ${styles.total}`}>
                            <Col xs={5}>
                                <Button buttonLabel={"Checkout"}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
    )
}
