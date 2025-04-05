'use client'

import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) return <div className="p-6">Loading...</div>

  if (!isSignedIn) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">You must be signed in to view the dashboard.</h2>
        <Link
          href="/sign-in?redirect_url=/dashboard"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          Sign In
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <UserButton />
      </div>
      <p className="mt-4">Your User ID: {user.id}</p>
      <Link
        href="/prediction"
        className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Go to Prediction Form
      </Link>
    </div>
  )
}
