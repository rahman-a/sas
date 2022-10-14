import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__header}>
            <a href='#'>SAS office locations</a>
            <a href='#'>Site map</a>
            <a href='#'>Contact us</a>
          </div>
          <span className={styles.footer__separator}></span>
          <div className={styles.footer__content}>
            <Image
              src='/images/logo-white.png'
              alt='logo'
              width={50}
              height={50}
            />
            <p className={styles.footer__text}>
              © 2022 SAS. All rights reserved.
            </p>
          </div>
          <div className={styles.footer__legal}>
            <a href='#'>Legal notices</a>
            <a href='#'>Privacy</a>
            <a href='#'>Cookie policy</a>
            <a href='#'>Legal disclaimer</a>
            <a href='#'>Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
