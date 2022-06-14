import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

export const Modal = ({
  show, setShow, children, renderChild,
}) => {
  const closeModal = () => {
    setShow(false)
  }
  return (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`${styles.modal} ${show ? styles.show : styles.hide}`}
      onClick={closeModal}
      tabIndex="-1"
      aria-hidden="true"
      role="dialog"
    >
      <div className={`${styles.container}`}>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <div
          className={`${styles.body}`}
          onClick={(event) => event.stopPropagation()}
        >
          {(renderChild || show) && children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  renderChild: PropTypes.bool,
}

Modal.defaultProps = {
  renderChild: false,
}
