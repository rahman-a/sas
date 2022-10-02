import { createContext, useState } from 'react'
import { Menu } from '../types/Menu'

interface HeaderContextProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  isDropdownOpen: boolean
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSubNavType: React.Dispatch<React.SetStateAction<string>>
  subNavType: string
  subMenuLevel: number
  setSubMenuLevel: React.Dispatch<React.SetStateAction<number>>
  menu: Menu
  setMenu: React.Dispatch<React.SetStateAction<Menu>>
}

interface HeaderContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const HeaderContext = createContext<HeaderContextProps>(
  {} as HeaderContextProps
)

export default function HeaderContextProvider({
  children,
}: HeaderContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [subNavType, setSubNavType] = useState<string>('')
  const [menu, setMenu] = useState<Menu>({} as Menu)
  const [subMenuLevel, setSubMenuLevel] = useState<number>(1)

  const passedValues = {
    setIsOpen,
    isOpen,
    isDropdownOpen,
    setIsDropdownOpen,
    setSubNavType,
    subNavType,
    subMenuLevel,
    setSubMenuLevel,
    menu,
    setMenu,
  }

  return (
    <HeaderContext.Provider value={passedValues}>
      {children}
    </HeaderContext.Provider>
  )
}
