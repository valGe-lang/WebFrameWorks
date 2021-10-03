import React from 'react'
import styles from './SubHeader.module.css'

export default function SubHeader() {
    return (
    <div className={ styles.backGround }>
     <div className={ styles.container }>
        <div className={ styles.flex }>Etusivu</div>
        <div className={ styles.padding }>HS Visio</div>  
        <div className={ styles.flex }>Luetuimmat</div>  
        <div className={ styles.flex }>Uusimmat</div>  
        <div className={ styles.flex }>Politiikka</div>  
        <div className={ styles.flex }>Kaupunki</div>  
        <div className={ styles.flex }>Kulttuuri</div>  
        <div className={ styles.flex }>Tiede</div>  
        <div className={ styles.flex }>Hyvinvointi</div> 
        <div className={ styles.flex }>Ruoka</div>
        <div className={ styles.flex }>Nyt</div>

        </div>
        </div>
       
                
    )
}
