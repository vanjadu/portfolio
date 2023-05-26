'use client'

import { useState, createContext } from 'react'

interface NavigationContextValues {
  isNavOpen: boolean
  toggleNav: (isNavopen: boolean) => void
}

export const NavigationContext = createContext({} as NavigationContextValues)

interface NavigationProviderProps {
  children: React.ReactNode
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const contextValues = {
    isNavOpen,
    toggleNav,
  }

  return (
    <NavigationContext.Provider value={contextValues}>
      {children}
    </NavigationContext.Provider>
  )
}
