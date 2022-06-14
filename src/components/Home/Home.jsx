import { useState } from 'react'
import PropTypes from 'prop-types'
import { Title, Modal, Input } from 'components'
import { TodoItems } from './TodoItems'
import styles from './Home.module.scss'

const Setting = ({ addTodo }) => {
  const [isActive, setIseActive] = useState(false)
  const handelClickSetting = () => {
    setIseActive(!isActive)
  }
  return (
    <div
      className={`${styles.setting} ${isActive ? styles.active : ''}`}
      onClick={handelClickSetting}
      role="button"
      tabIndex="0"
    >
      <i className={`${styles.icon} bx bx-plus bx-md`} />
      <button
        type="button"
        className={styles.button}
        onClick={addTodo}
      >
        <i className="bx bxs-pencil" />
      </button>
    </div>
  )
}
Setting.propTypes = {
  addTodo: PropTypes.func,
}
Setting.defaultProps = {
  addTodo: () => { },
}

export const Home = () => {
  const [isShow, setIsShow] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handelAddTodo = () => {
    setIsShow(true)
  }
  const handelInput = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Title className={styles.title}>
          What&apos;s up, user
        </Title>
        <TodoItems
          title={'today\'s tasks'}
        />
      </div>
      <Setting
        addTodo={handelAddTodo}
      />
      <Modal show={isShow} setShow={setIsShow}>
        <Input
          value={inputValue}
          onChange={handelInput}
        />
      </Modal>
    </div>
  )
}
