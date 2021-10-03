import React from 'react'
import styles from './SideSection.module.css';

export default function SideSection(props) {
    return (
        <div className={ styles.container }>
            <span className={ styles.luetuimmat }> {props.luetuimmat}</span>
            <div className={ styles.sidesection }>
                <span className={ styles.listNumber }> {props.itemNumber}</span>
                <span className={styles.header}> {props.topic}</span> <span className={styles.bodytext}> {props.body}</span>
         </div>   
        </div>
    )
}
