import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import styles from './Sub-Menu.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { MenuItem, Menu } from '@customTypes/Menu'
import SubMenuLevel1 from './Sub-Menu-L1'
import SubMenuLevel2 from './Sub-Menu-L2'
import SubMenuLevel3 from './Sub-Menu-L3'
import FeaturedPosts from '../Featured-Posts/Featured-Posts'

const SubMenu = () => {
  const [subMenuContent, setSubMenuContent] = useState<MenuItem[]>([])
  const { subNavType, menu, subMenuLevel, setSubMenuLevel, setIsOpen, isOpen } =
    useContext(HeaderContext)
  const router = useRouter()

  const menuSubLevel3Handler = (
    level: number,
    submenu: MenuItem[] | null
  ): void => {
    setSubMenuLevel(level)
    submenu && setSubMenuContent(submenu)
  }

  return (
    <div className={styles.submenu}>
      <div className={styles.submenu__content}>
        <SubMenuLevel1 submenuLevel={subMenuLevel} />
        {subNavType && (
          <SubMenuLevel2
            subMenuContent={menu[subNavType as keyof Menu]}
            menuSubLevel3Handler={menuSubLevel3Handler}
            submenuLevel={subMenuLevel}
            subNavType={subNavType}
            setIsOpen={setIsOpen}
          />
        )}
        <SubMenuLevel3
          subMenuContent={subMenuContent}
          submenuLevel={subMenuLevel}
          setIsOpen={setIsOpen}
        />
        <div className={styles.submenu__featured}>
          <FeaturedPosts />
        </div>
      </div>
    </div>
  )
}

export default SubMenu
