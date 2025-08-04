'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, TrendingUp, Calendar, HeartHandshake } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Assessments',
    href: '/dashboard/assessments',
    icon: FileText,
  },
  {
    name: 'Progress',
    href: '/dashboard/progress',
    icon: TrendingUp,
  },
  {
    name: 'Appointments',
    href: '/dashboard/appointments',
    icon: Calendar,
  },
  {
    name: 'Crisis Plan',
    href: '/dashboard/crisis-plan',
    icon: HeartHandshake,
  },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-1 text-xs transition-colors',
                isActive
                  ? 'text-primary-500'
                  : 'text-gray-500 hover:text-gray-900'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only md:not-sr-only">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}