import Navbar from "../components/NavBar/NavigationBar";
import CartReviewItem from "../components/cartReviewItem";
import {Row, Col, Container} from 'react-bootstrap';
import utilStyles from "../styles/utils.module.css"
export default function CartReview() {
    return (
        <Container className={`${utilStyles.backgroundColor}`}>
            <Navbar/>
            <Row className={`justify-content-center ${utilStyles.headers}`}>
                <Col xs={11}>
                    <h3 className={utilStyles.title}>
                        Cart Review
                    </h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <CartReviewItem/>
            <CartReviewItem/>
            <CartReviewItem/>
        </Container>
    )
}
