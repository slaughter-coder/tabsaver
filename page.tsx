'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiSearch, FiZap } from 'react-icons/fi'
import Image from 'next/image'
import { useWaitlistForm } from '../hooks/useWaitlistForm'

export default function WaitlistPage() {
  const [email, setEmail] = useState('')
  const { submitForm, isSubmitting, isSubmitted } = useWaitlistForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm(email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Lost in tabs? Let us simplify your research.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Input your open tabs, receive digested summaries. Focus on what matters most.
          </p>
          <div className="relative w-full h-64 sm:h-96 mb-8">
            <Image
              src="/placeholder.svg?height=384&width=768"
              alt="Simplified research visualization"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiCheckCircle, text: "TL;DR summaries" },
              { icon: FiClock, text: "Custom delivery times" },
              { icon: FiSearch, text: "Optional discovery of additional sources" },
              { icon: FiZap, text: "Enhanced focus for research" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
              >
                <feature.icon className="text-4xl text-indigo-600 mb-4" />
                <p className="text-lg font-medium text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Join the Waitlist</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : isSubmitted ? 'Thank you!' : 'Join the Waitlist'}
            </button>
          </form>
          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-600 text-center"
            >
              You're on the list! We'll be in touch soon.
            </motion.p>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-8">Ready to simplify your research?</h2>
          <button
            onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Join the Waitlist Now
          </button>
        </motion.section>
      </main>
    </div>
  )
}

