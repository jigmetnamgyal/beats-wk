import React from 'react'
import {Button, Typography, CardContent, CardActions, Card} from '@material-ui/core'
import styles from './infocard.module.css';

const InfoCard = ({
    name, 
    type,
    noOfCopies,
    streams,
    musicVideo,
    info,
    price
}) => {
    return (
        <Card className={styles.socialItem}>
            <CardContent>
                <Typography className={styles.socialItem__typo} variant="h4" component="h2">{name}</Typography>
                <Typography className={styles.socialItem__typo} variant="h5" component="h6">{price} $</Typography>
                <div className={styles.desc}>
                    <ul>
                        <li>{type}</li>
                        <li>{noOfCopies}</li>
                        <li>{streams}</li>
                        <li>{musicVideo}</li>
                        <li>{info}</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default InfoCard;