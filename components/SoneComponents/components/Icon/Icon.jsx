import styles from './Icon.module.css'
import icons from './defs'

const Icon = ({ variant, toolTip, invert = false, ...props }) => {
  const IconOfInstance = icons[variant]
  const color = invert ? 'var(--color-highlight)' : 'var(--color-dark)'
  return (
    <i className={styles.root} {...props}>
      <IconOfInstance color={color} />
      {toolTip && <div className={styles.toolTip}>{toolTip}</div>}
    </i>
  )
}

export default Icon
