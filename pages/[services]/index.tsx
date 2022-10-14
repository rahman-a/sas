import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/pages/all-services.module.scss'
import {
  HeroSection,
  DetailsSection,
  Section,
  Accordion,
} from '../../components'
import { FeatureCard, CardsWrapper } from '../../components/Cards'
import featureData from '../../demo-data/all-page.json'
import allServices from '../../demo-data/data.json'
import { MenuItem, Menu } from '../../types/Menu'

const AllServices = () => {
  const router = useRouter()
  const { services } = router.query
  const [servicesArray, setServicesArray] = useState<MenuItem[]>([])

  useEffect(() => {
    if (services) {
      const menu = allServices.menu
      const menuItems = menu[services as keyof Menu]
      console.log('menuItems: ', menuItems)
      menuItems?.length > 0
        ? setServicesArray([...menuItems])
        : router.push('/404')
    }
  }, [services])
  return (
    <div className={styles.venture}>
      <HeroSection />
      <h2 className={styles.venture__title}>Feature</h2>
      <CardsWrapper className={styles.venture__cards}>
        {featureData.cards.map((card) => (
          <FeatureCard key={card._id} card={card} />
        ))}
      </CardsWrapper>
      <DetailsSection
        bgColor='var(--color-white)'
        data={featureData.details}
        className={styles.venture__details}
      />
      <Section
        bg='var(--background-color)'
        title='Explore our industry expertise'
        className={styles.venture__items}
      >
        <Accordion menu={servicesArray} />
      </Section>
      <DetailsSection
        as='a'
        data={featureData.footer}
        btnProps={{ variant: 'text', icon: 'thick-arrow' }}
        className={styles.venture__footer}
        bgColor='var(--white-color)'
      />
    </div>
  )
}

export default AllServices
