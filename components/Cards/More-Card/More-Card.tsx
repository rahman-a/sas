import React, { FunctionComponent } from 'react'
import styles from './More-Card.module.scss'
import { Button } from '@components/ui'
import { MoreCard } from '@customTypes/Section'

interface MoreCardProps {
  card: MoreCard
}

const MoreCard: FunctionComponent<MoreCardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
      <Button as='a' href={card.link} variant='gray-outlined'>
        {card.button}
      </Button>
    </div>
  )
}

export default MoreCard
