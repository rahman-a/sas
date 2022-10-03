import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Header.module.scss'
import Navbar from './Navbar/Navbar'
import DropdownMenu from './Dropdown-Menu/Dropdown-Menu'
import HeaderOption from './Header-Option/Header-Option'
import { Breadcrumbs } from '../ui'
import { HeaderContext } from '../../context/Header-Context'
import Logo from './Logo/Logo'
import data from '../../demo-data/data.json'

const Header: React.FC = () => {
  const { subNavType, isOpen, setMenu, menu, isDropdownOpen } =
    useContext(HeaderContext)
  const router = useRouter()
  const headerClasses = classNames(styles.header, {
    [styles.header__separator]: isOpen,
    [styles.header__overlay]: isOpen && subNavType === 'search',
    [styles.header__dropdown]: isDropdownOpen,
  })

  useEffect(() => {
    if (Object.keys(menu).length === 0) {
      data && setMenu(data.menu)
    }
  }, [])

  return (
    <>
      <header className={headerClasses}>
        <div className='container'>
          <div className={styles.header__wrapper}>
            <Logo />
            <Navbar />
            <HeaderOption />
          </div>
        </div>
        <DropdownMenu />
      </header>
      {router.pathname !== '/' && <Breadcrumbs isOpen={isOpen} />}
    </>
  )
}

export default Header
