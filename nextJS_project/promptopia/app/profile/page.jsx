'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { userRouter } from 'next/navigation'

import Profile from '@components/profile'

const MyProfile = () => {
  const { data: session } = useSession()

  const [posts, setPosts] = useState([])

  const handleEdit = () => {

  }

  const handleDelete = async () => {

  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
    if ( session?.user.id ) fetchPost()
  }, [])

  return (
    <Profile
      name="My"
      desc="Welcome to your persinalize profile page"
      posts={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile