import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Howl } from 'howler'
import Resources from './Resources'

import './Styles/main.css'

window.addEventListener('load', () => {
  const changeToMainSound = () => {
    setTimeout(() => {
      new Howl({
        src: Resources.BgSound,
        autoplay: true,
        loop: true,
        volume: 0
      }).fade(0, 0.5, 5000)
      StarterSound.fade(0.5, 0, 4000)
    }, 13000)
  }

  const StarterSound = new Howl({
    src: Resources.StarterSound,
    autoplay: true,
    loop: false,
    volume: 0.5,
    onplay: changeToMainSound()
  })

  StarterSound.play()

  return () => null
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('better-steam-ui')
)
