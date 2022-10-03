import type { NextPage } from 'next'
import { Carousel, Breaknews } from '../components'
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Carousel />
      <Breaknews />
    </>
  )
}

export default Home
