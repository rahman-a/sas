import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__header}>
            <Link href='/about/office-locations'>
              <a>SAS office locations</a>
            </Link>
            <Link href='/site-map'>
              <a>Site map</a>
            </Link>
            <Link href='/contact-us'>
              <a>Contact us</a>
            </Link>
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
            <Link href='/legal-notices'>
              <a>Legal notices</a>
            </Link>
            <Link href='/legal-notices/privacy-policy'>
              <a>Privacy</a>
            </Link>
            <Link href='/legal-notices/cookie-policy'>
              <a>Cookie policy</a>
            </Link>
            <Link href='/legal-notices/legal-disclaimer'>
              <a>Legal disclaimer</a>
            </Link>
            <Link href='/legal-notices/terms-and-conditions'>
              <a>Terms and conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
