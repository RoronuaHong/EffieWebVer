import React from 'react'
import ReactDOM from 'react-dom/client'

import EffieWebVer from './EffieWebVer'
import reportWebVitals from './reportWebVitals'

import { EffieContextProvider } from './context/EffieContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <EffieContextProvider>
      <EffieWebVer />
    </EffieContextProvider>
  </React.StrictMode>
)

reportWebVitals()
