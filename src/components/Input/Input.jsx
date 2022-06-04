import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export const Input = ({ value, onChange }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={styles.label}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  </label>
)

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
Input.defaultProps = {
  value: '',
  onChange: () => {},
}
