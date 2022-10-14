/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Details-Section.module.scss'
import classnames from 'classnames'
import parse from 'html-react-parser'
import CardsWrapper from '../Cards/Cards-Wrapper/Cards-Wrapper'
import { Section } from '../../types/Section'
import { ButtonType } from '../../types/Button'
import { MainCard } from '../Cards'
import { Button } from '../ui'
import AsComponent from './AsComponents'

type Data = {
  _id: string
  title: string
  description: string
  link?: string
  text?: string
  image?: string
  reverse?: boolean
}

interface DetailsSectionProps {
  section?: Section
  bgColor?: string | undefined
  data?: Data
  className?: string
  as?: 'div' | 'a'
  btnProps?: ButtonType
}

const DetailsSection: FunctionComponent<DetailsSectionProps> = ({
  section,
  bgColor,
  data,
  className,
  btnProps,
  as,
}) => {
  const [title, setTitle] = useState<string>(section?.details.title || '')
  const [description, setDescription] = useState<string>(
    section?.details.description || ''
  )
  const [isReverse, setIsReverse] = useState<boolean>(
    section?.details?.reverse || false
  )

  const [image, setImage] = useState<string>(section?.details.image || '')

  const detailsClasses = classnames(styles.details, {
    [className as string]: className,
  })

  const detailsWrapperClasses = classnames(styles.details__wrapper, {
    [styles.details__wrapper_reverse]: isReverse,
  })

  useEffect(() => {
    if (data?.image) {
      setImage(data.image)
    }
  }, [data?.image])

  useEffect(() => {
    if (data?.reverse) {
      setIsReverse(data.reverse)
    }
  }, [data?.reverse])

  useEffect(() => {
    if (data) {
      setTitle(data.title)
      setDescription(data.description)
    }
  }, [data])
  return (
    <section
      className={detailsClasses}
      style={{ backgroundColor: bgColor ? bgColor : '#f2f2f2' }}
    >
      <div className='container'>
        <AsComponent
          href={data?.link}
          className={detailsWrapperClasses}
          as={as}
        >
          {image && (
            <div className={styles.details__row}>
              <figure className={styles.details__figure}>
                <img
                  src={`/images/${image}`}
                  alt='details graph'
                  width={100}
                  height={100}
                />
              </figure>
            </div>
          )}
          <div className={styles.details__row}>
            <div className={styles.details__content}>
              <h2 className={styles.details__title}>{title}</h2>
              <div className={styles.details__text}>{parse(description)}</div>
              {data?.link && <Button {...btnProps}>{data.text}</Button>}
            </div>
          </div>
        </AsComponent>
        {section?.cards?.length && section.cards.length > 0 && (
          <div className={styles.details__cards}>
            <CardsWrapper title={section.details['sub-title']}>
              {section.cards.map((card) => (
                <MainCard key={card._id} card={card} />
              ))}
            </CardsWrapper>
          </div>
        )}
      </div>
    </section>
  )
}

export default DetailsSection
