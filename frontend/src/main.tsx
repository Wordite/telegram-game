import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from '@app/router'
import { store } from '@app/store/store'

import '@styles/index.css'
import '@styles/vars.css'
import '@styles/fonts.css'
import '@styles/shadows.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
