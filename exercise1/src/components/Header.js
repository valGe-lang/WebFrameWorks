import React from 'react'
import styles from './Header.module.css';

export default function Header() {

    
    return (
    <div className={styles.headerBackground}>
        <div className={ styles.container }>
            <div className={styles.brand}>HELSINGIN SANOMAT</div>
            <div className={ styles.padding }>Uutiset</div>
            <div className={ styles.padding }>Lehdet</div>
            <div className={ styles.nav }></div>
            <div className={ styles.padding }>Asiakaspalvelu</div>
            <div className={ styles.padding }>Tilaa</div>
            <div className={ styles.padding }>Kirjaudu</div>
            <div className={ styles.padding }>Valikko</div>
        

        </div>
        </div>
    )
}
