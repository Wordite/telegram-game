import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@app/store/store'
import App from '@app/app'

import '@styles/index.css'
import '@styles/vars.css'
import '@styles/fonts.css'
import '@styles/shadows.css'
import '@styles/animations.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
