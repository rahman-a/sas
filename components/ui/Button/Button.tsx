import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'
import { RightArrow, LongRightArrow, ThickLongRightArrow } from '../../icons'
import { ButtonType } from '../../../types/Button'

const Button: FunctionComponent<ButtonType> = ({
  variant,
  className,
  children,
  style,
  icon,
  disabled,
  onClick,
  as,
  href,
}) => {
  const btnClasses = classnames(styles.btn, {
    [styles['btn__dark-primary']]: variant === 'dark-primary',
    [styles['btn__dark-white']]: variant === 'dark-white',
    [styles['btn__white']]: variant === 'white',
    [styles['btn__outlined']]: variant === 'primary-outlined',
    [styles['btn__secondary-outlined']]: variant === 'secondary-outlined',
    [styles['btn__gray-outlined']]: variant === 'gray-outlined',
    [styles['btn__text']]: variant === 'text',
    [styles['btn__wide']]: icon,
    [styles['btn__disabled-text']]: variant === 'text' && disabled,
    [styles['btn__disabled']]: disabled,
    [className as string]: className,
  })
  const AsComponent = as ?? 'button'
  return (
    <div className={styles.demo}>
      <AsComponent
        href={href}
        onClick={onClick}
        className={btnClasses}
        style={style}
        disabled={disabled}
      >
        {children}
        {icon && (
          <span className={styles.btn__icon}>
            {icon === 'arrow' ? (
              <LongRightArrow />
            ) : icon === 'thick-arrow' ? (
              <ThickLongRightArrow />
            ) : (
              <RightArrow />
            )}
          </span>
        )}
      </AsComponent>
    </div>
  )
}

export default Button
