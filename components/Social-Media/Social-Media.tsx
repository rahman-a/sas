import React from 'react'
import Image from 'next/image'
import styles from './Social-Media.module.scss'
import socialData from '../../demo-data/social.json'

interface Social {
  _id: string
  name: string
  url: string
  image: string
}

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <div className={styles.social__wrapper}>
        <h2 className={styles.social__title}>Follow us</h2>
        <ul className={styles.social__list}>
          {socialData.social.map((item: Social) => (
            <li key={item._id} className={styles.social__item}>
              <a href={item.url} className={styles.social__link}>
                <Image
                  width={25}
                  height={25}
                  src={`/images/social/${item.image}`}
                  alt={item.name}
                  layout='fixed'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SocialMedia
