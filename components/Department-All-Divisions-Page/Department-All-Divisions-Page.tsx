import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Department-All-Divisions-Page.module.scss'
import { HeroSection, DetailsSection, Accordion } from '@components'
import { FeatureCard, CardsWrapper } from '@components/Cards'
import { Section } from '@components/Layout'
import featureData from '@data/all-page.json'
import allServices from '@data/data.json'
import heroData from '@data/hero-section.json'
import { MenuItem, Menu } from '@customTypes/Menu'
import { HeroSection as HeroSectionType } from '@customTypes/Hero-Section'

const AllDivisions: FunctionComponent = () => {
  const router = useRouter()
  const division = router.asPath.split('/')[1]
  const [servicesArray, setServicesArray] = useState<MenuItem[]>([])
  const [heroSection, setHeroSection] = useState<HeroSectionType>()
  console.log('heroSection: ', heroSection)

  useEffect(() => {
    if (division) {
      const menu = allServices.menu
      const menuItems = menu[division as keyof Menu]
      menuItems?.length > 0
        ? setServicesArray([...menuItems])
        : router.push('/404')

      setHeroSection(heroData[division as keyof typeof heroData])
    }
  }, [division])
  return (
    <div className={styles.services}>
      {heroSection && <HeroSection data={heroSection} />}
      <h2 className={styles.services__title}>Feature</h2>
      <CardsWrapper className={styles.services__cards}>
        {featureData.cards.map((card) => (
          <FeatureCard key={card._id} card={card} />
        ))}
      </CardsWrapper>
      <Section>
        <DetailsSection
          data={featureData.details}
          className={styles.services__details}
        />
      </Section>
      <Section
        title='Explore our industry expertise'
        className={styles.services__items}
      >
        <Accordion menu={servicesArray} />
      </Section>
      <Section>
        <DetailsSection
          as='a'
          data={featureData.footer}
          btnProps={{ variant: 'text', icon: 'thick-arrow' }}
          className={styles.services__footer}
          reverse
        />
      </Section>
    </div>
  )
}

export default AllDivisions
