import PropTypes from 'prop-types'

import '@scss/main.scss'

const MyToDo = ({ Component, pageProps }) => <Component {...pageProps} />

MyToDo.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
}

MyToDo.defaultProps = {
  pageProps: {},
}

export default MyToDo
