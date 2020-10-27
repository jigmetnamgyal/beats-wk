import Button from "../components/button";
import utilStyles from "../styles/utils.module.css";
import beatsStyles from "../components/beats.module.css";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "../components/NavBar/NavigationBar";
import styles from "../components/aboutMe.module.css";
import BeatsPlayer from "../components/beatPlayer";
import Footer from "../components/footer";
import LicenseForm from "../components/licenseForm";
import Link from "next/link";
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
            <Row className="justify-content-center no-gutters">
                <Col xs={8} className={`${utilStyles.text} ${styles.text} ${beatsStyles.text}`}>
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
                    <img className={beatsStyles.djImg} src={"/images/dj.png"}/>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col xs={{span:4, offset: 7}} className={beatsStyles.button}>
                    <Button buttonLabel="Checkout"/>
                </Col>
            </Row>
            <Row className='no-gutters justify-content-center'>
                <Col xs={12} className={beatsStyles.beatPlayer}>
                    <BeatsPlayer beatDuration="2:59" imgURL="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png"/>
                </Col>
                <Col xs={12} className={beatsStyles.beatPlayer}>
                    <BeatsPlayer beatDuration="3:00" imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
                </Col>
                <Col xs={12} className={beatsStyles.beatPlayer}>
                    <BeatsPlayer beatDuration="1:54" imgURL={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"}/>
                </Col>
                <Col xs={12} className={beatsStyles.beatPlayer}>
                    <BeatsPlayer beatDuration="1:23" imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}
