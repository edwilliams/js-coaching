import React, { useContext, createContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: "Foobar", age: 100 })

  const updateUser = ({ key, val }) => {
    setUserData((prevData) => ({
      ...prevData,
      [key]: val,
    }))
  }

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
