import React, { createContext, useEffect, useState } from 'react'

const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    fetch(`/api/v1/getUser/?userId=76561198379454428`)
      .then((res) => res.json())
      .then((data) => setUserName(data.players[0].personaname))
      .catch((err) => console.log(err))
  })
  const value = { userName }
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
export default MainContext
