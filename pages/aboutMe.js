import {Container, Col, Row} from "react-bootstrap";
import styles from "../components/aboutMe.module.css"
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";
import Navigation from '../components/NavBar/NavigationBar';

export default function AboutMe() {
    return (
        <Container fluid={true} className={`${utilStyles.backgroundColor} ${styles.aboutMeContainer}`}>
            <Navigation/>
            <Row className={`justify-content-center ${utilStyles.headers}`}>
                <Col xs={11} lg={10} className={`${styles.header}`}>
                    <h3 className={`${utilStyles.title} ${styles.title}`}>About me</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 10, offset: 1}} lg={{span: 6, offset: 1}}
                     className={`${utilStyles.text} ${styles.text} ${styles.descriptionWK}`}>
                    <p>
                        Hello! I'm Brittany, a software engineer based in Boston, MA.
                        I enjoy creating things that live on the internet, whether that be websites, applications, or
                        anything in between. My goal is to always build products that provide pixel-perfect, performant
                        experiences.
                        <br/>
                        <br/>
                        Shortly after graduating from Northeastern University, I joined the engineering team at
                        Upstatement where I work on a wide variety of interesting and meaningful projects on a daily
                        basis.
                    </p>
                </Col>
                <Col className={`${styles.aboutPic}`} xs={0} lg={4}>
                    <img className={``} src={"/images/aboutMePic.jpg"}/>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.collaborationBelow7}`}>
                <Col xs={11} lg={10} className={`${styles.header}`}>
                    <h3 className={`${utilStyles.title} ${styles.title} ${styles.collaborationHeader}`}>Collaborations</h3>
                    <hr className={utilStyles.hr}/>
                </Col>
            </Row>
            <Row className={`${styles.collaborationAbove7} no-gutters`}>
                <Col lg={{span: 4, offset: 1}}>
                    <h3 className={`${utilStyles.title} ${styles.title} ${styles.collaborationHeader}`}>Collaboration</h3>
                </Col>
                <Col lg={6}>
                    <hr className={`${styles.collabHR}`}/>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.albumImagesFirstRow}`}>
                <Col xs={5} lg={3} className={`${styles.albumImage}`}>
                    <img src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                         className={utilStyles.albumImage}/>
                </Col>
                <Col lg={{span: 6}} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Wangchuk Kinga X GSD</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>Collaborated with acho this and did this
                                with him and did it in one night</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{span: 5}} lg={3} className={`${styles.albumImage}`}>
                    <img
                        src={"https://images.genius.com/8ababae027808d8f2de49bfcfc51488d.592x592x1.png"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Wangchuk Kinga X GSD</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>Collaborated with acho this and did
                                this
                                with him and did it in one night</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={`justify-content-center ${styles.albumImagesSecondRow}`}>
                <Col xs={5} lg={3} className={`${styles.albumImage}`}>
                    <img
                        src={"https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png"}
                        className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Wangchuk Kinga X Jigme Nobs</h4>
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
                <Col xs={{span: 5}} lg={3} className={`${styles.albumImage}`}>
                    <img src={"https://upload.wikimedia.org/wikipedia/en/5/52/HeadInTheClouds-Album.jpg"}
                         className={utilStyles.albumImage}/>
                </Col>
                <Col lg={6} xs={0} className={`${styles.songInfo}`}>
                    <Row>
                        <Col lg={12}>
                            <h4 className={`${utilStyles.title}`}>Wangchuk Kinga X Zamin</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.text} ${utilStyles.text}`}>
                                The true essence of Bhutan is very hard to caputre in words. It is as elusive as the
                                romanticization of the gullible whites but also as fleeting as life.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Container>
    )
}
