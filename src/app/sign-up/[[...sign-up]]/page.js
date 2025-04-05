'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Create Your Account</h2>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white font-semibold",
            },
          }}
        />
      </div>
    </div>
  )
}
