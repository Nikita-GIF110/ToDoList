import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export const Input = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={styles.input}
    placeholder="Add Todo ..."
  />
)

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
Input.defaultProps = {
  value: '',
  onChange: () => { },
}
