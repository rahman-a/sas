import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'
import { ButtonType } from '@customTypes/Button'
import ButtonIcon from './Button-Icon'

const Button: FunctionComponent<ButtonType> = (
  {
    variant,
    className,
    children,
    style,
    type,
    icon,
    disabled,
    onClick,
    rounded,
    as,
    href,
    dataAttributes,
  },
  props
) => {
  const btnClasses = classnames(styles.btn, {
    [styles['btn__dark-primary']]: variant === 'dark-primary',
    [styles['btn__dark-white']]: variant === 'dark-white',
    [styles['btn__white']]: variant === 'white',
    [styles['btn__outlined']]: variant === 'primary-outlined',
    [styles['btn__secondary-outlined']]: variant === 'secondary-outlined',
    [styles['btn__gray-outlined']]: variant === 'gray-outlined',
    [styles['btn__rounded']]: rounded,
    [styles['btn__text']]: variant === 'text',
    [styles['btn__wide']]: icon,
    [styles['btn__disabled-text']]: variant === 'text' && disabled,
    [styles['btn__disabled']]: disabled,
    [className as string]: className,
  })
  const AsComponent = as ?? 'button'
  return (
    <AsComponent
      href={href}
      onClick={onClick}
      className={btnClasses}
      style={style}
      disabled={disabled}
      type={type}
      {...dataAttributes}
    >
      {children}
      {icon && <ButtonIcon icon={icon} />}
    </AsComponent>
  )
}

export default Button
