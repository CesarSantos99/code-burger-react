import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUseData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburgee:userData', JSON.stringify(userInfo))
  }

  return (
    <UserContext.Provider value={{ putUseData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
