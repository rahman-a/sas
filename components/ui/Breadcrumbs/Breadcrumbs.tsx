import React, { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SimpleBar from 'simplebar-react'
import classnames from 'classnames'
import 'simplebar/dist/simplebar.min.css'
import styles from './Breadcrumbs.module.scss'
import { Home } from '../../icons'
import Link from 'next/link'

interface BreadcrumbsProps {
  isOpen: boolean
}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ isOpen }) => {
  const [path, setPath] = useState<string[]>([])
  const router = useRouter()
  const breadcrumbsClasses = classnames(styles.breadcrumbs, {
    'is-hidden': isOpen,
  })
  const constructPathHandler = (idx: number) => {
    const newPath = path
      .slice(0, idx + 1)
      .map((p) => p.toLowerCase().split(' ').join('-'))
    return newPath.join('/')
  }
  useEffect(() => {
    const path = router.pathname.split('/').map((p) => p.split('-').join(' '))
    path.splice(0, 1)
    setPath(path)
  }, [router.pathname])
  return (
    <div className='container'>
      <SimpleBar>
        <div className={breadcrumbsClasses}>
          <Link href='/'>
            <a className={styles.breadcrumbs__item}>
              <Home /> &nbsp; SAS
            </a>
          </Link>
          {path.map((p, i) => (
            <Link key={p} href={`/${constructPathHandler(i)}`}>
              <a className={styles.breadcrumbs__item}>{p}</a>
            </Link>
          ))}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Breadcrumbs
