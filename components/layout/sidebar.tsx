'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, FileText, TrendingUp, Calendar, HeartHandshake, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

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

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <h2 className="text-2xl font-bold text-primary-500">Mental Health</h2>
        </div>
        
        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon
                  className={cn(
                    'mr-3 h-5 w-5 flex-shrink-0',
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-400 group-hover:text-gray-500'
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex-1 space-y-1">
            <Link
              href="/dashboard/settings"
              className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              Settings
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </aside>
  )
}