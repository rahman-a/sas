/**
 * filled button
 * elevated button
 * outlined button
 * tonal button
 * text button
 *  plus icon
 */

import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'
import { RightArrow } from '../../icons'
import classnames from 'classnames'

// type Variants = 'filled' | 'elevated' | 'outlined' | 'tonal' | 'text'
interface ButtonProps {
  text: string
  border?: string
  bg?: string
  icon?: JSX.Element
  className?: string
  onClick?: () => void
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  onClick,
  border,
  bg,
  icon,
  className,
}) => {
  const btnStyles = () => {
    return {
      backgroundColor: bg ? bg : 'transparent',
      border: border ? `2px solid ${border}` : 'none',
    }
  }
  return (
    <button
      className={`${styles.btn} ${className ? className : ''}`}
      style={btnStyles()}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick()
      }}
    >
      {text}
      {icon && <span className={styles.btn__icon}>{icon}</span>}
    </button>
  )
}

export default Button
