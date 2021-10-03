import React from 'react'
import styles from './MainSection.module.css';


export default function MainSections(props) {
    return (
     <div className={ styles.container }>
        <img className={ styles.nav }  src={props.photo}></img>
        <div style= {{width: '90%', marginLeft: 'auto', marginRight: 'auto', borderColor: 'grey', borderBottom: 'solid 1px', paddingBottom: '10px', paddingTop: '10px'}}>   
        <span style={{fontSize: '30px', color: '#4196a4',}}>{props.topic}</span>
        <span style={{fontSize: '30px',}}>{props.body}</span>
        <div style= {{fontSize: '20px'}}>{props.tag}</div>
            </div>
        </div>
        
        
        
       
        
    )
}
