import styles from './playlist.module.css';

export default class Playlist extends React.Component {
    render() {
        return (
            <div className={styles.playlistContainer}>
                <p className={styles.playlistHeading}>{this.props.title}</p>
                <div className={styles.albumContainer}>
                    <img className={styles.albumImage} src={this.props.imageOne} alt="Album Image"/>
                    <img className={styles.albumImage} src={this.props.imageTwo} alt="Album Image"/>
                    <img className={styles.albumImage} src={this.props.imageTwo} alt="Album Image"/>
                    <img className={styles.albumImage} src={this.props.imageOne} alt="Album Image"/>
                </div>
            </div>
        )
    }
}