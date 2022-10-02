import React, { FunctionComponent, useEffect } from 'react'
import styles from './Featured-Posts.module.scss'
import { Post } from '../../../types/Featured'
import { link } from 'fs'
import Image from 'next/image'

type PostItem = { post: Post }

const FeaturedPost: FunctionComponent<PostItem> = ({ post }) => {
  return (
    <div className={styles.posts__featured}>
      <a href={post.link} className={styles.posts__link}>
        <Image
          src={`/images/${post.image}`}
          alt={post.text}
          width='90px'
          height='51px'
        />
        <p>{post.text}</p>
      </a>
    </div>
  )
}

export default FeaturedPost
