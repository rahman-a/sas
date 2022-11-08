import React, { FunctionComponent } from 'react'
import styles from './Featured-Posts.module.scss'
import { Post } from '@customTypes/Featured'
import Image from 'next/image'

type PostItem = { post: Post }

const FeaturedPost: FunctionComponent<PostItem> = ({ post }) => {
  return (
    <div className={styles.posts__featured}>
      <a href={post.link} className={styles.posts__link}>
        <Image src={post.image} alt={post.text} width='90px' height='51px' />
        <p>{post.text}</p>
      </a>
    </div>
  )
}

export default FeaturedPost
