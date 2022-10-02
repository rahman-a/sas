import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Sub-Menu.module.scss'
import classNames from 'classnames'
import { MenuItem } from '../../../types/Menu'
import { RightArrow } from '../../icons'
import { NavBackButton } from '../../ui'

interface SubMenuLevel2Props {
  subMenuContent: MenuItem[]
  menuSubLevel3Handler: (level: number, submenu: MenuItem[] | null) => void
  submenuLevel: number
  subNavType: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SubMenuLevel2: React.FC<SubMenuLevel2Props> = ({
  subMenuContent,
  menuSubLevel3Handler,
  submenuLevel,
  subNavType,
  setIsOpen,
}) => {
  const router = useRouter()
  const navRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navClasses = classNames(styles.submenu__items)
  const wrapperClasses = classNames(
    styles.submenu__wrapper,
    styles.submenu__is_hidden
  )

  const animationEndHandler = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    submenuLevel === 2
      ? navRef.current?.classList.remove(styles.submenu__is_hidden)
      : submenuLevel === 3 &&
        navRef.current?.classList.add(styles.submenu__is_hidden)
  }

  const handleNavigation = (
    e: React.SyntheticEvent,
    submenu: MenuItem[] | undefined
  ) => {
    e.preventDefault()
    if (submenu) {
      menuSubLevel3Handler(3, submenu)
      navRef.current?.classList.add(styles['submenu__slideOut-l2'])
      return
    }

    router.push((e.currentTarget as HTMLAnchorElement).href)
    setIsOpen(false)
  }

  const titleClasses = classNames({
    [styles['submenu__slideIn-l2']]: submenuLevel === 2,
    [styles['submenu__slideOut-l2']]: submenuLevel !== 2,
  })

  const addSlideInAnimation = (): void => {
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      navRef.current?.classList.remove(styles['submenu__slideOut-l2'])
      navRef.current?.classList.add(styles['submenu__slideIn-l2'])
      btnRef.current?.classList.add(styles['submenu__back-visible'])
    }, 300)
  }

  const addSlideOutAnimation = (): void => {
    navRef.current?.classList.add(styles['submenu__slideOut-l2'])
    navRef.current?.classList.remove(styles['submenu__slideIn-l2'])
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.add(styles.submenu__is_hidden)
    }, 300)
  }

  useEffect(() => {
    if (submenuLevel === 2) {
      addSlideInAnimation()
    } else {
      btnRef.current?.classList.remove(styles['submenu__back-visible'])
    }
    if (submenuLevel === 1) {
      addSlideOutAnimation()
    }
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [submenuLevel])
  return (
    <div
      className={wrapperClasses}
      ref={navRef}
      onAnimationEnd={animationEndHandler}
    >
      <h2 className={titleClasses}>{subNavType}</h2>
      <NavBackButton
        text='Menu'
        ref={btnRef}
        backHandler={() => menuSubLevel3Handler(1, null)}
        l2={true}
      />
      <nav className={navClasses}>
        {subMenuContent.map((item: MenuItem) => (
          <Link href={item.link} key={item._id}>
            <a
              className={styles.submenu__item}
              onClick={(e) => handleNavigation(e, item.submenu)}
            >
              {item.text}
              {item.submenu && (
                <span>
                  <RightArrow />
                </span>
              )}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SubMenuLevel2
