import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Accordion.module.scss'
import AccordionItem from './Accordion-Item/Accordion-Item'
import { MenuItem } from '../../types/Menu'

interface AccordionProps {
  menu: MenuItem[]
}

const Accordion: FunctionComponent<AccordionProps> = ({ menu }) => {
  const [firstItemsArray, setFirstItemsArray] = useState<MenuItem[]>([])
  const [secondItemsArray, setSecondItemsArray] = useState<MenuItem[]>([])

  const splitItems = () => {
    menu.splice(0, 1)
    const firstITemsArray = menu.splice(0, Math.floor(menu.length / 2) + 1)
    setFirstItemsArray(firstITemsArray)
    setSecondItemsArray(menu)
  }

  useEffect(() => {
    console.log('accordion menu: ', menu)
    menu.length && splitItems()
  }, [menu])
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__wrapper}>
        <div className={styles.accordion__col}>
          {firstItemsArray.map((item) => (
            <AccordionItem key={item._id} item={item} />
          ))}
        </div>
        <div className={styles.accordion__col}>
          {secondItemsArray.map((item) => (
            <AccordionItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
