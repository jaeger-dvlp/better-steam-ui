import React, { useContext } from 'react'
import MainContext from '../Contexts/MainContext'

export default function Header() {
  const { userData } = useContext(MainContext)

  return (
    <div className="w-full font-pop bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] bg-opacity-20 flex flex-wrap justify-end xl:p-5 lg:p-5 p-3">
      <div
        tabIndex={1}
        role="button"
        className="cursor-pointer group flex flex-wrap relative px-5 bg-black hover:bg-white hover:bg-opacity-10 focus-within:bg-white focus-within:bg-opacity-10 transition-all duration-150 bg-opacity-30 shadow-lg p-0 rounded-lg"
      >
        <span className="p-2 text-white self-center pr-0">Welcome,</span>
        <div className="flex justify-center">
          <div className="user-avatar-container order-2 p-3 pr-0">
            <img
              src={userData.avatarfull}
              className="rounded-sm w-full h-full max-w-[2.5rem] max-h-[2.5rem]"
              alt="Profile Avatar"
            />
          </div>
          <div className="p-3 text-white flex justify-center text-center">
            <h1 className="self-center">{userData.personaname}.</h1>
          </div>
        </div>
        <div className="opacity-0 invisible scale-50 transition-all duration-300 bg-white bg-opacity-10 w-2/3 rounded-lg -translate-y-10 group-focus-within:translate-y-2 h-64 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-100 absolute top-full left-1/2 transform p-5 flex flex-wrap justify-start -translate-x-1/2 group-focus-within:flex  text-white">
          <h1>List</h1>
        </div>
      </div>
    </div>
  )
}
