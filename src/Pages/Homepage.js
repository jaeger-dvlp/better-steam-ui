import React, { useEffect, useContext } from 'react'
import Resources from '../Resources'
import MainContext from '../Contexts/MainContext'

export default function Homepage() {
  const { userName } = useContext(MainContext)
  useEffect(() => {
    document.querySelector('.bg-vid').addEventListener('loadeddata', () => {
      document
        .querySelector('.bg-video-cont')
        .classList.remove('opacity-0', 'invisible')
    })
  }, [])

  return (
    <>
      <div className="w-screen bg-video-cont transition-opacity duration-500 opacity-0 invisible h-screen relative left-0 top-0 p-0 m-0">
        <div className="w-full h-full absolute left-0 z-[5] top-0">
          <div className="w-full h-full relative p-0 m-0"></div>
        </div>
        <div className="w-full h-full fixed z-[4] bg-black bg-opacity-20"></div>
        <video
          className="object-cover bg-vid left-0 z-[3] top-0 w-full h-full object-center"
          playsInline
          loop
          autoPlay
          muted
        >
          <source src={Resources.MainBackground} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
