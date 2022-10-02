import React, { useState, useEffect, useContext, useRef } from 'react'
import styles from './Featured-Posts.module.scss'
import FeaturedPost from './Featured-Post'
import featuredPostsList from '../demo-data/featured.json'
import { HeaderContext } from '../../../context/Header-Context'
import { Post } from '../../../types/Featured'

const FeaturedPosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const { subNavType } = useContext(HeaderContext)

  const getPosts = () => {
    const postsList =
      featuredPostsList[subNavType as keyof typeof featuredPostsList]
    setPosts(postsList as unknown as Post[])
  }

  useEffect(() => {
    subNavType && getPosts()
  }, [subNavType])
  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__title}>Featured News</h2>
      {posts.map((post) => (
        <FeaturedPost key={post._id} post={post} />
      ))}
    </div>
  )
}

export default FeaturedPosts
