import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Mental Health Patient Portal
        </h1>
        <p className="text-center text-gray-600 mb-8">
          AI-powered tools to support your mental health journey
        </p>
        <div className="flex justify-center">
          <Link href="/auth/signin">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}