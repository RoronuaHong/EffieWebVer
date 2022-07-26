import React from 'react'
import ReactDOM from 'react-dom/client'

import EffieWebVer from './EffieWebVer'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <EffieWebVer />
  </React.StrictMode>
)

reportWebVitals()
