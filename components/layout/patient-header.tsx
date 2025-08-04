'use client'

import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import { Bell, User, Menu } from 'lucide-react'
import { useUIStore } from '@/lib/stores/ui-store'

export function PatientHeader() {
  const { data: session } = useSession()
  const { toggleSidebar, notifications } = useUIStore()
  const unreadCount = notifications.filter(n => n.type === 'info').length

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900">
            Mental Health Portal
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Crisis Button - Always Visible */}
          <Button
            variant="destructive"
            size="sm"
            className="font-medium"
          >
            Crisis Support
          </Button>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-error text-white text-xs flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Button>
          
          {/* User Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {session?.user?.name || 'Patient'}
              </p>
              <p className="text-xs text-gray-500">
                {session?.user?.email}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}