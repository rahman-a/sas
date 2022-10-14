import React, { FunctionComponent } from 'react'
import styles from './Feature-Card.module.scss'
import { FeatureCard } from '../../../types/Section'

interface FeatureCardProps {
  card: FeatureCard
}

const FeatureCard: FunctionComponent<FeatureCardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <a href={card.link} className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{card.title}</h2>
        <p className={styles.card__text}>
          {card.text.length > 75 ? card.text.slice(0, 75) + '...' : card.text}
        </p>
      </a>
    </div>
  )
}

export default FeatureCard
