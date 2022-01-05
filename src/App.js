import React from 'react'
import { MainContextProvider } from './Contexts/MainContext'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <>
      <MainContextProvider>
        <Homepage />
      </MainContextProvider>
    </>
  )
}

export default App
