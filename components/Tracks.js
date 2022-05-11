import Paragraph from './Paragraph';
import styles from './tracks.module.scss'

function convertDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const formattedseconds = String(seconds).padStart(2, '0')

    const formattedDuration = `${minutes}:${formattedseconds}`;
    return formattedDuration
}

const Tracks = ({ items } ) => {

    return <ul className= {styles.tracks}>

        {items.map((item, index) => {
            const { title, songInformation } = item;
            //const { title, artist } = item;
            return <li key={index} className={styles.trackItem}>
                <h3>{title}</h3>
                <Paragraph>{convertDuration(songInformation.duration)}</Paragraph>
                {/* <h4>{item.artist}</h4> */}

                </li>
        })}
    </ul>
}
export default Tracks;