import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Dropdown-Menu.module.scss'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import { territoriesListItem } from '../../../types/Territories-Menu'

// const listItems = [
//   { _id: uuidv4(), text: 'Global', link: '/global' },
//   { _id: uuidv4(), text: 'Afrique Francophone', link: '/afr-fran' },
//   { _id: uuidv4(), text: 'Albania', link: '/albania' },
//   { _id: uuidv4(), text: 'America', link: '/america' },
//   { _id: uuidv4(), text: 'Andorra', link: '/andorra' },
//   { _id: uuidv4(), text: 'Argentina', link: '/argentina' },
//   { _id: uuidv4(), text: 'Armenia', link: '/armenia' },
//   { _id: uuidv4(), text: 'Australia', link: '/australia' },
//   { _id: uuidv4(), text: 'Austria', link: '/austria' },
//   { _id: uuidv4(), text: 'Azerbaijan', link: '/azerbaijan' },
//   { _id: uuidv4(), text: 'Bahamas', link: '/bahamas' },
//   { _id: uuidv4(), text: 'Bahrain', link: '/bahrain' },
//   { _id: uuidv4(), text: 'Barbados', link: '/barbados' },
//   { _id: uuidv4(), text: 'Belgium', link: '/belgium' },
//   { _id: uuidv4(), text: 'België', link: '/belgië' },
//   { _id: uuidv4(), text: 'Bermuda', link: '/global' },
//   { _id: uuidv4(), text: 'Bolivia', link: '/global' },
//   { _id: uuidv4(), text: 'Bosnia and Herzegovina', link: '/global' },
//   { _id: uuidv4(), text: 'Botswana', link: '/global' },
//   { _id: uuidv4(), text: 'Brasil', link: '/global' },
//   { _id: uuidv4(), text: 'British Virgin Islands', link: '/global' },
//   { _id: uuidv4(), text: 'Brunei', link: '/global' },
//   { _id: uuidv4(), text: 'Bulgaria', link: '/global' },
//   { _id: uuidv4(), text: 'Cambodia', link: '/global' },
//   { _id: uuidv4(), text: 'Canada', link: '/global' },
//   { _id: uuidv4(), text: 'Cape Verde', link: '/global' },
//   { _id: uuidv4(), text: 'Caribbean', link: '/global' },
//   { _id: uuidv4(), text: 'Cayman Islands', link: '/global' },
//   { _id: uuidv4(), text: 'Central and Eastern Europe', link: '/global' },
//   { _id: uuidv4(), text: 'Chad', link: '/global' },
//   { _id: uuidv4(), text: 'Channel Islands', link: '/global' },
//   { _id: uuidv4(), text: 'Chile', link: '/global' },
//   { _id: uuidv4(), text: 'Colombia', link: '/global' },
//   { _id: uuidv4(), text: 'Congo (Brazzaville)', link: '/global' },
//   { _id: uuidv4(), text: 'Congo (Dem. Rep.)', link: '/global' },
//   { _id: uuidv4(), text: 'Costa Rica', link: '/global' },
//   { _id: uuidv4(), text: 'Croatia', link: '/global' },
//   { _id: uuidv4(), text: 'Cyprus', link: '/global' },
//   { _id: uuidv4(), text: 'Czech Republic', link: '/global' },
//   { _id: uuidv4(), text: "Côte d'Ivoire", link: '/global' },
// ]

type listItems = {
  list: territoriesListItem[]
  closeDropdownHandler?: () => void
}

const DropdownMenu: FunctionComponent<listItems> = ({
  list,
  closeDropdownHandler,
}) => {
  const [listData, setListData] = useState<territoriesListItem[]>(list)
  const [noResult, setNoResult] = useState<boolean>(false)

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoResult(false)
    const updatedList = list.filter((item: territoriesListItem) =>
      item.text.toLowerCase().includes(e.target.value.toLowerCase())
    )
    updatedList.length === 0 && setNoResult(true)
    setListData(updatedList)
  }

  const closeDropdown = () => closeDropdownHandler && closeDropdownHandler()

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__input}>
        <input
          type='text'
          placeholder='Find a country or region'
          onChange={(e) => filterList(e)}
        />
      </div>
      <ul className={styles.dropdown__list}>
        {noResult && (
          <li className={styles['dropdown__no-result']}>No Match Found</li>
        )}
        {listData.map((item: territoriesListItem) => (
          <li
            key={item._id}
            className={`${styles.dropdown__item} ${
              item.text.toLowerCase() === 'global'
                ? styles['dropdown__item-global']
                : ' '
            }`}
          >
            <Link href={item.link}>
              <a className={styles.dropdown__link}>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
