import React, { useContext } from 'react'
import MainContext from '../Contexts/MainContext'

export default function Header() {
  const { userData } = useContext(MainContext)
  console.log(userData)
  return (
    <div className="w-full font-pop bg-black bg-opacity-20 flex flex-wrap justify-end xl:p-5 lg:p-5 p-3">
      <div className="border cursor-pointer bg-black bg-opacity-30 relative border-slate-400 shadow-lg p-0 rounded-lg">
        <div className="flex justify-center">
          <div className="user-avatar-container p-3 pr-0">
            <img
              src={userData.avatarfull}
              className="rounded-sm w-full h-full max-w-[2.5rem] max-h-[2.5rem]"
              alt="Profile Avatar"
            />
          </div>
          <div className="p-3 text-white flex justify-center text-center">
            <h1 className="self-center">{userData.personaname}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
