import React, { FunctionComponent } from 'react'
import styles from './Breaknews.module.scss'
import { RightArrow } from '../icons'
import { Button } from '../ui'

const BreakNews: FunctionComponent = () => {
  return (
    <div className={styles.breaknews}>
      <a href='#' className={styles.breaknews__wrapper}>
        <div className={styles.breaknews__data}>
          <h2>what is new equation?</h2>
          <Button
            variant='primary-outlined'
            icon
            className={styles.breaknews__wrapper_btn}
          >
            Learn more
          </Button>
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
