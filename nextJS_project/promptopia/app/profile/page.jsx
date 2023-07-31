'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { userRouter } from 'next/navigation'

import Profile from '@components/profile'

const MyProfile = () => {
  const handleEdit = () => {

  }

  const handleDelete = async () => {

  }

  useEffect(() => {

  }, [])

  return (
    <Profile
      name="My"
      desc="Welcome to your persinalize profile page"
      data={[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile