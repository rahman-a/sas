import React from 'react'
import styles from './Image-Card.module.scss'

const ImageCard = () => {
  return (
    <div className={styles.card}>
      <a href='#' className={styles.card__wrapper}>
        <div className={styles.card__content}>
          <h2>Global Automotive Cyber Security Management Study</h2>
          <p>How to navigate the way to automotive cybersecurity</p>
        </div>
      </a>
    </div>
  )
}

export default ImageCard
