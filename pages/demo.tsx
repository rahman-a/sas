import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import styles from '@styles/demo.module.scss'
import { Form, FilteredList, FilterCards, Map } from '@components'
import { Section } from '@components/Layout'
import { Button } from '@components/ui'
import {
  FeatureCard,
  MoreCard,
  PopularCard,
  AdvantageCard,
  MeetCard,
} from '@components/Cards'
import { ImageCube, FloatPageIndex } from '@components/ui'
import {
  TabbedInterface,
  TabbedNavbar,
  CareerSearchAccordion,
} from '@components'
import offices from '@data/offices.json'
import tabInterfaceData from '@data/tabbed-interface.json'
import tabNavbarData from '@data/tabbed-navbar.json'
import filteredData from '@data/filter-cards.json'

const Demo: FunctionComponent = ({}) => {
  return <div className={styles.demo}>{/* <ImageCube /> */}</div>
}

export default Demo
