'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Sign In to Your Account</h2>
        <SignIn appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
          },
        }} />
      </div>
    </div>
  )
}
