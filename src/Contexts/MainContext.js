import React, { createContext, useEffect, useState } from 'react'

const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [userData, setUserData] = useState('')

  useEffect(() => {
    fetch(`/api/v1/getUser/?userId=76561198379454428`)
      .then((res) => res.json())
      .then((data) => setUserData(data.players[0]))
      .catch((err) => console.log(err))
  }, [])
  const value = { userData }
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
export default MainContext
