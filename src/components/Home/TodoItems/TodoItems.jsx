/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import styles from './TodoItems.module.scss'

const Item = ({ label }) => (
  <label className={styles.item}>
    <input type="checkbox" className={styles.input} />
    <span className={styles.fake}>
      <i className="bx bx-check" />
    </span>
    <span>{label}</span>
  </label>
)
Item.propTypes = {
  label: PropTypes.string,
}
Item.defaultProps = {
  label: '',
}

export const TodoItems = ({ title, todos }) => (
  <>
    <small className={styles.title}>
      {title}
    </small>
    <div className={styles.content}>
      {todos.map((todo) => <Item key={todo.id} />)}
      <Item label="sdsdsdsds" />
    </div>
  </>
)
TodoItems.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
}
TodoItems.defaultProps = {
  title: '',
  todos: [],
}
