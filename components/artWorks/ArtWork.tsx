import React from 'react'
import Styles from './artWork.module.css'
import Card from '../cards/Card'
const artWork = () => {
  return (
    <div className={`${Styles.artWorkBody}`}>
        <div className={`${Styles.heading}`}>
            Trending ArtWorks
        </div>
        <div className={`${Styles.cardsBody}`}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        
    </div>
  )
}

export default artWork