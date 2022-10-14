import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styles from './Main-Card.module.scss'
import { ThickLongRightArrow } from '../../icons'
import { Card } from '../../../types/Section'
interface MainCardProps {
  card: Card
}

const MainCard: FunctionComponent<MainCardProps> = ({ card }) => {
  return (
    <article className={styles.card}>
      <a href={card.link} className={styles.card__wrapper}>
        <figure className={styles.card__figure}>
          <Image
            src={`/images/${card.image}`}
            alt='Dam'
            width={300}
            height={200}
            layout='responsive'
          />
        </figure>
        <div className={styles.card__details}>
          <h4 title={card.title} className={styles.card__title}>
            {card.title.length > 80
              ? `${card.title.substring(0, 80)}...`
              : card.title}
          </h4>
          <p className={styles.card__description}>
            {card.description.length > 180
              ? `${card.description.substring(0, 180)}...`
              : card.description}
          </p>
          <span>
            <span>Read more</span>
            <ThickLongRightArrow />
          </span>
        </div>
        <div className={styles.card__overlay}></div>
      </a>
    </article>
  )
}

export default MainCard
