import PropTypes from 'prop-types'
import styles from './Title.module.scss'

export const Title = ({ children, className }) => (
  <h1 className={`${styles.title} ${className}`}>
    {children}
  </h1>
)

Title.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}
Title.defaultProps = {
  className: '',
}
