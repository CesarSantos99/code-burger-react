import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContentx'
import { UserProvider } from './UserContentx'

const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
