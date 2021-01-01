import {Container, Col, Row} from "react-bootstrap";
import styles from "../components/aboutMe.module.css"
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer/Footer";
import Navigation from '../components/NavBar/NavigationBar';

export default function AboutMe() {
    return (
        <div
            fluid={true}
            className={`${utilStyles.backgroundColor} ${styles.aboutMeContainer}`}>
            <Navigation/>
            <Row className={`justify-content-center ${utilStyles.headers}`}>
                <Col xs={11} lg={10} className={`${styles.header}`}>
                    <h3 className={`${styles.title}`}>About me</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row>
                <Col
                    xs={{
                        span: 10,
                        offset: 1
                    }}
                    lg={{
                        span: 6,
                        offset: 1
                    }}
                    className={` ${styles.text} ${styles.descriptionWK}`}>
                    <p>
                        Yo! I am Wangchuk Kinga Beats, a Bhutanese beat-maker based in Bhutan. I am a
                        full time beat-maker and I am more into hip hop and R&B music. Every beat I
                        create is purely based on my creativity and I assure the originality of every
                        beat I own.
                        <br/>
                        <br/>
                        I am determined to work hard and fulfill my dreams. I hope ya’all like my beats
                        and looking forward to work with ya’all in near future.
                    </p>
                </Col>
                <Col className={`${styles.aboutPic}`} xs={0} lg={4}>
                    <img className={``} src={"/images/aboutMePic.jpg"}/>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.collaborationBelow7}`}>
                <Col xs={11} lg={10} className={`${styles.header}`}>
                    <h3
                        className={`${utilStyles.title} ${styles.title} ${styles.collaborationHeader}`}>Collaborations</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className={`${styles.collaborationAbove7} no-gutters`}>
                <Col
                    lg={{
                        span: 4,
                        offset: 1
                    }}>
                    <h3
                        className={`${utilStyles.title} ${styles.title} ${styles.collaborationHeader}`}>Collaboration</h3>
                </Col>
                <Col lg={6}>
                    <hr className={`${styles.collabHR}`}/>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.albumImagesFirstRow}`}>
                <Col xs={5} lg={3} className={`${styles.albumImage}`}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col
                    lg={{
                        span: 6
                    }}
                    xs={0}
                    className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Chosen_yugrang_-_(Prod.Wangchuk Kinga Beats)</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>Collaborated with acho this and did this with him and did it in one night</p>
                        </Col>
                    </Row>
                </Col>
                <Col
                    xs={{
                        span: 5
                    }}
                    lg={3}
                    className={`${styles.albumImage}`}>
                    <img
                        src={"https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>MENYEN NGA_Skin Head X_-_(Prod.Wangchuk Kinga Beats)</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>Collaborated with acho this and did this with him and did it in one night</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.albumImagesSecondRow}`}>
                <Col xs={5} lg={3} className={`${styles.albumImage}`}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My" +
                                "_Love%21.png"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Reymoen_Karma wangyle_-_(Prod.Wangchuk Kinga Beats)</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>
                                Shit was wild man. Shit was unbelievable. Shit was unforgetful. Peace!
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col
                    xs={{
                        span: 5
                    }}
                    lg={3}
                    className={`${styles.albumImage}`}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Khandum_Skin Head X_-_(Prod.Wangchuk Kinga Beats) Wangchuk
                            </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>
                                The true essence of Bhutan is very hard to caputre in words. It is as elusive as
                                the romanticization of the gullible whites but also as fleeting as life
                            </p>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row className={`justify-content-center ${styles.albumImagesSecondRow}`}>
                <Col
                    xs={{
                        span: 5
                    }}
                    lg={3}
                    className={`${styles.albumImage}`}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My" +
                                "_Love%21.png"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Dema_Alien_-_(Prod.Wangchuk Kinga Beats)</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>
                                The true essence of Bhutan is very hard to caputre in words. It is as elusive as
                                the romanticization of the gullible whites but also as fleeting as life.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}
