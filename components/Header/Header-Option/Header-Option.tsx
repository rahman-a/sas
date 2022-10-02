import React, { FunctionComponent, useContext, useState } from 'react'
import classnames from 'classnames'
import styles from './Header-Option.module.scss'
import { Magnifier } from '../../icons'
import { HeaderContext } from '../../../context/Header-Context'
import Locations from '../Locations/Locations'
import { Hamburger } from '../../ui'
import locations from '../demo-data/territories.json'

const HeaderOption: FunctionComponent = () => {
  const {
    isOpen,
    setIsOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    setSubNavType,
    subNavType,
    setSubMenuLevel,
    subMenuLevel,
  } = useContext(HeaderContext)

  const showSearchHandler = (): void => {
    setIsOpen(true)
    setSubNavType('search')
  }

  const optionsClasses = classnames(styles.options, {
    [styles.options__hidden]: isOpen && subNavType === 'search',
  })

  const searchClasses = classnames(
    styles.options__search,
    styles.options__item,
    {
      [styles.options__item_white]: isOpen,
      [styles['options__search_is-hidden']]: isOpen,
    }
  )

  const hamburgerClasses = classnames(styles.options__hamburger, {
    [styles.options__hamburger_territories]: isDropdownOpen,
  })

  const toggleMenuHandler = (): void => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false)
      return
    }
    setIsOpen(!isOpen)
    subMenuLevel !== 1 && setSubMenuLevel(1)
  }
  return (
    <div className={optionsClasses}>
      <div className={hamburgerClasses}>
        <Hamburger isOpen={isOpen} toggleHandler={toggleMenuHandler} />
      </div>
      <Locations list={locations.territories} />
      <div className={searchClasses} onClick={showSearchHandler}>
        <span>
          <Magnifier />
        </span>
        <span>Search</span>
      </div>
    </div>
  )
}

export default HeaderOption
