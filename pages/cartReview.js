import Navbar from "../components/NavBar/NavigationBar";
import CartReviewItem from "../components/cartReviewItem";
import {Row, Col, Container} from 'react-bootstrap';
import utilStyles from "../styles/utils.module.css"
import CartSummary from "../components/cartSummary";
import styles from "../components/cartReview/cartReview.module.css"
import Footer from "../components/footer/Footer";
export default function CartReview() {
    return (
        <Container className={`${utilStyles.backgroundColor}`} fluid={true}>
            <Navbar/>
            <Row className={`justify-content-center ${utilStyles.headers}`}>
                <Col xs={11} lg={10}>
                    <h3 className={utilStyles.title}>
                        Cart Review
                    </h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className={`${styles.cartItemsContainer}`}>
                <Col xs={11} lg={{span: 3, offset: 1}}>
                    <CartReviewItem/>
                    <CartReviewItem/>
                    <CartReviewItem/>
                </Col>
                <CartSummary/>
            </Row>
            <Footer/>
        </Container>
    )
}
