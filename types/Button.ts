type Variants =
  | 'dark-primary'
  | 'dark-white'
  | 'white'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'gray-outlined'
  | 'text'

export interface ButtonType {
  variant?: Variants
  className?: string
  onClick?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
  disabled?: boolean
  icon?: string | boolean
  as?: 'a' | 'button'
  href?: string
}
