import React, { useState } from 'react'
import styles from './Hero-Section.module.scss'
import { Share } from '../icons'
import CopyBox from '../Copy-Box/Copy-Box'

const HeroSection = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>Industries and sectors</h1>
          <p className={styles.hero__text}>
            Our industry-focused network is designed to anticipate and address
            your business needs. Together, our 250,000 people, deployed across
            158 countries, can both zoom out and see the big picture — the
            context — and zoom in on the right solution.
          </p>
          <div className={styles.hero__link}>
            <button onClick={() => setShow(true)}>
              <span>
                <Share />
              </span>
              <div className={styles.hero__link_copy}>
                <CopyBox
                  link='https://pwc.to/2wCRx0e'
                  show={show}
                  setShow={setShow}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
