import { useState } from 'react'

export function useWaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = async (email: string) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
  }

  return { submitForm, isSubmitting, isSubmitted }
}

