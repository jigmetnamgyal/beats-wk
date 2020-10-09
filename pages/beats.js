import Button from "../components/button";
import utilStyles from "../styles/utils.module.css";
import beatsStyles from "../components/beats.module.css";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "../components/NavBar/NavigationBar";
import styles from "../components/aboutMe.module.css";

export default function Beats() {
    return (
        <Container className={`${utilStyles.backgroundColor}`}>
            <NavigationBar/>
            <Row className={`justify-content-center ${utilStyles.headers}`}>
                <Col xs={11}>
                    <h3 className={utilStyles.title}>Beats</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={8} className={`${utilStyles.text} ${styles.text}`}>
                    <p>
                        My beats are solely produced by me and i make them for fun but would be down for a collaboration
                        as well.
                    </p>
                    <p>
                        The beats are licensed under apache 2.0 and please dont fork.
                        All beats are pretty good and if you really want to use but no money then email me.
                    </p>
                </Col>
                <Col xs={3}>
                    POLPPPP
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col xs={{span:4, offset: 7}} className={beatsStyles.button}>
                    <Button buttonLabel="Checkout"/>
                </Col>
            </Row>
        </Container>
    )
}
