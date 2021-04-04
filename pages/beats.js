import Button from "../components/button";
import utilStyles from "../styles/utils.module.css";
import beatsStyles from "../components/beats.module.css";
import {Col, Container, Row} from "react-bootstrap";
import NavigationBar from "../components/NavBar/NavigationBar";
import styles from "../components/aboutMe.module.css";
import BeatsPlayer from "../components/beatPlayer";
import Footer from "../components/footer/Footer";
import Link from "next/link";


export default function Beats() {
    return (
        <Container className={`${utilStyles.backgroundColor} ${beatsStyles.metaContainer}`} fluid={true}>
            <NavigationBar/>
            <Row className={`justify-content-center ${utilStyles.headers} ${styles.header}`}>
                <Col xs={11} lg={11}>
                    <h3 className={`${utilStyles.title} ${styles.title}`}>Beats</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className={`justify-content-center no-gutters ${beatsStyles.beatsDescription}`}>
                <Col xs={8} lg={4} className={`${utilStyles.text} ${styles.text} ${beatsStyles.text}`}>
                    <p>
                        My beats are solely produced by me but would be down for a collaboration as well.
                    </p>
                    <p>
                    The beats are licensed under apache 2.0 and please dont fork.
                    </p>
                </Col>
                {/*<Col xs={3} lg={6} className={`${beatsStyles.phoneImg}`}>*/}
                {/*    <img className={beatsStyles.djImg} src={"/images/dj.png"}/>*/}
                {/*</Col>*/}
            </Row>
            <div className={`${beatsStyles.beatsDescriptionComp}`}>
                <Col lg={{span: 11, offset: 1}} className={`${beatsStyles.beatsDescriptionContainer}`}>
                    <Row>
                        <Col lg={{span: 5}}
                             className={`${utilStyles.text} ${styles.text} ${beatsStyles.text} ${beatsStyles.textContainer}`}>
                            <p>
                            My beats are solely produced by me but would be down for a collaboration as well.
                            </p>
                            <p>
                            The beats are licensed under apache 2.0 and please dont fork.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </div>
            <Row className="no-gutters">
                <Col xs={{span: 4, offset: 7}} className={beatsStyles.button}>
                    <Button buttonLabel="Checkout"/>
                </Col>
            </Row>
            <div className={`${beatsStyles.cartAndBeats}`}>
                <div className={`${beatsStyles.beatsPlayer} no-gutters`}>
                    <div className={beatsStyles.beatPlayer}>
                        <BeatsPlayer beatDuration="2:59"
                                     imgURL="https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png"/>
                    </div>
                    <div className={beatsStyles.beatPlayer}>
                        <BeatsPlayer beatDuration="3:00"
                                     imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
                    </div>
                    <div className={beatsStyles.beatPlayer}>
                        <BeatsPlayer beatDuration="1:54"
                                     imgURL={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"}/>
                    </div>
                    <div className={beatsStyles.beatPlayer}>
                        <BeatsPlayer beatDuration="1:23"
                                     imgURL={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}/>
                    </div>
                </div>
                <div className={`${beatsStyles.cartSummary}`}>
                    <div className={`${beatsStyles.cartSummaryTitle}`}>
                        <h3 className={`${utilStyles.headers} ${utilStyles.title} ${beatsStyles.title}`}>Cart
                            Summary</h3>
                        <hr className={`${utilStyles.hr}`}/>
                    </div>
                    <div className={`${beatsStyles.cartSummaryItemPrice}`}>
                        <div className={`${utilStyles.text}`}>
                            <p>Item</p>
                        </div>
                        <div className={`${utilStyles.text}`}>
                            <p>Price</p>
                        </div>
                    </div>
                    <hr className={`${beatsStyles.cartSummaryhr}`}/>
                    <div className={`${beatsStyles.items}`}>
                        <div className={`${beatsStyles.eachItem}`}>
                            <div className={`${utilStyles.text}`}>
                                Song Name
                            </div>
                            <div className={`${utilStyles.text}`}>
                                30$
                            </div>
                        </div>
                        <div className={`${beatsStyles.eachItem}`}>
                            <div className={`${utilStyles.text}`}>
                                Toosie Slide
                            </div>
                            <div className={`${utilStyles.text}`}>
                                30$
                            </div>
                        </div>
                        <div className={`${beatsStyles.eachItem}`}>
                            <div className={`${utilStyles.text}`}>
                                Black Leather Gloves
                            </div>
                            <div className={`${utilStyles.text}`}>
                                30$
                            </div>
                        </div>
                    </div>
                    <hr className={`${beatsStyles.totalHR}`}/>
                    <div className={`${beatsStyles.items}`}>
                        <div className={`${beatsStyles.eachItem}`}>
                            <div className={`${utilStyles.text}`}>
                                Total
                            </div>
                            <div className={`${utilStyles.text}`}>
                                90$
                            </div>
                        </div>
                    </div>
                    <div className={`${beatsStyles.checkoutButton}`}>
                        <Link href="/checkout"><a><Button buttonLabel="Checkout"/></a></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </Container>
    )
}
