import React, { useContext, createContext, useState } from "react"
import { set } from "lodash"

const UserContext = createContext()

const initialState = {
  name: "Foobar",
  age: 100,
  address: {
    street: "123 High Street",
    postCode: "AB1 2AB",
  },
}

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialState)

  const updateUser = ({ key, val }) => {
    setUserData((prevData) => ({
      ...prevData,
      // [key]: val, // this works for a "flat" state
      ...set(userData, key, val), // this is one way of dealing with a nested state
    }))
  }

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
