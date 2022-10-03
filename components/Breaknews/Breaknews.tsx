import React from 'react'
import styles from './Breaknews.module.scss'
import { RightArrow } from '../icons'
import { Button } from '../ui'

const BreakNews = () => {
  return (
    <div className={styles.breaknews}>
      <a href='#' className={styles.breaknews__wrapper}>
        <div className={styles.breaknews__data}>
          <h2>what is new equation?</h2>
          <Button
            border='#333'
            text='Learn more'
            icon={<RightArrow />}
            className={styles.breaknews__wrapper_btn}
          />
        </div>
        <div className={styles.breaknews__decorator}>
          <span></span>
          <span className={styles.breaknews__decorator_sqh}></span>
          <span className={styles.breaknews__decorator_sqh}></span>
          <span></span>
          <span className={styles.breaknews__decorator_sqs}></span>
          <span className={styles.breaknews__decorator_sqs}></span>
          <span></span>
        </div>
      </a>
    </div>
  )
}

export default BreakNews
