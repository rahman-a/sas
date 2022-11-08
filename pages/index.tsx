import type { NextPage } from 'next'
import { Carousel, Breaknews, DetailsSection, SocialMedia } from '@components'
import {
  PopularCard,
  MoreCard,
  MainCard,
  CardsWrapper,
} from '@components/Cards'
import { Section } from '@components/Layout'
import styles from '@styles/pages/Home.module.scss'
import sectionsData from '@data/sections.json'
import cardsData from '@data/more-cards.json'

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Breaknews />
      {sectionsData.sections.map((section) => (
        <Section
          key={section._id}
          style={{
            backgroundColor: section.details.reverse
              ? 'var(--white-color)'
              : 'var(--background-color)',
          }}
        >
          <DetailsSection
            key={section._id}
            data={section.details}
            reverse={section.details.reverse}
            style={{ paddingBottom: '10rem' }}
          />
          {section.cards?.length && section.cards.length > 0 && (
            <div className={styles.details__cards}>
              <CardsWrapper title={section.details['sub-title']}>
                {section.cards.map((card) => (
                  <MainCard key={card._id} card={card} />
                ))}
              </CardsWrapper>
            </div>
          )}
        </Section>
      ))}
      <Section
        style={{ backgroundColor: 'var(--container-color)' }}
        title='Most Popular'
      >
        <CardsWrapper className={styles.main__popularCards}>
          {sectionsData.sections[0].cards.map((card) => (
            <PopularCard key={card._id} card={card} />
          ))}
        </CardsWrapper>
      </Section>

      <Section style={{ padding: '10rem 0' }}>
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
