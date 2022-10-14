import type { NextPage } from 'next'
import { Carousel, Breaknews, DetailsSection, SocialMedia } from '../components'
import { PopularCard, MoreCard } from '../components/Cards'
import { Section } from '../components/Layout'
import styles from '../styles/pages/Home.module.scss'
import sectionsData from '../demo-data/sections.json'
import cardsData from '../demo-data/more-cards.json'
import CardsWrapper from '../components/Cards/Cards-Wrapper/Cards-Wrapper'

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Breaknews />
      {sectionsData.sections.map((section) => {
        return section.details.reverse ? (
          <DetailsSection
            key={section._id}
            section={section}
            bgColor='var(--white-color)'
          />
        ) : (
          <DetailsSection key={section._id} section={section} />
        )
      })}
      <Section bg='var(--container-color)' title='Most Popular'>
        <CardsWrapper className={styles.main__popularCards}>
          {sectionsData.sections[0].cards.map((card) => (
            <PopularCard key={card._id} card={card} />
          ))}
        </CardsWrapper>
      </Section>

      <Section>
        <CardsWrapper className={styles.main__moreCards}>
          {cardsData.cards.map((card) => (
            <MoreCard key={card._id} card={card} />
          ))}
        </CardsWrapper>
      </Section>
      <SocialMedia />
    </>
  )
}

export default Home
