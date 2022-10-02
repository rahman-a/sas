import React, { useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Sub-Menu.module.scss'
import { MenuItem } from '../../../types/Menu'
import { HeaderContext } from '../../../context/Header-Context'
import { NavBackButton } from '../../ui'

interface SubMenuLevelThreeProps {
  subMenuContent: MenuItem[]
  submenuLevel: number
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SubMenuLevelThree: React.FC<SubMenuLevelThreeProps> = ({
  subMenuContent,
  submenuLevel,
  setIsOpen,
}) => {
  const navRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { setSubMenuLevel, subNavType } = useContext(HeaderContext)
  const router = useRouter()
  const navClasses = classNames([styles.submenu__items], {
    [styles['submenu__items-c1']]: subMenuContent.length <= 4,
    [styles['submenu__items-c2']]:
      subMenuContent.length <= 8 && subMenuContent.length > 4,
  })

  const linkClasses = classNames(
    styles.submenu__item,
    styles['submenu__item-l3']
  )

  const handleNavigation = (link: string) => {
    router.push(link)
    setIsOpen(false)
  }

  const addSlideInAnimation = (): void => {
    navRef.current?.classList.remove(styles['submenu__slideOut-l3'])
    navRef.current?.classList.add(styles['submenu__slideIn-l3'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      btnRef.current?.classList.add(styles['submenu__back-visible'])
    }, 300)
  }

  const addSlideOutAnimation = (): void => {
    navRef.current?.classList.remove(styles['submenu__slideIn-l3'])
    navRef.current?.classList.add(styles['submenu__slideOut-l3'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.add(styles.submenu__is_hidden)
      btnRef.current?.classList.remove(styles['submenu__back-visible'])
    }, 300)
  }

  useEffect(() => {
    if (submenuLevel === 3) {
      addSlideInAnimation()
    }
    if (submenuLevel === 2) {
      addSlideOutAnimation()
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [submenuLevel])

  return (
    <div className={styles.submenu__wrapper} ref={navRef}>
      <NavBackButton
        text={subNavType}
        ref={btnRef}
        backHandler={() => setSubMenuLevel(2)}
      />
      <nav className={navClasses}>
        {subMenuContent.map((item: MenuItem) => (
          <Link href='#' key={item._id}>
            <a
              className={linkClasses}
              onClick={() => handleNavigation(item.link)}
            >
              {item.text}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SubMenuLevelThree
