import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Howl } from 'howler'
import Resources from './Resources'

import './Styles/main.css'

window.addEventListener('load', () => {
  const backgroundSound = new Howl({
    src: Resources.BackgroundTaiga,
    autoplay: true,
    loop: true,
    volume: 0.5
  }).play()
  return () => null
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('better-steam-ui')
)
