import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'app/App'
import 'shared/config/i18n/i18n'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

import 'app/styles/index.scss'



render(
   <BrowserRouter>
      <StoreProvider>
         <ErrorBoundary>
            <ThemeProvider>
               <App />
            </ThemeProvider>
         </ErrorBoundary>
      </StoreProvider>
   </BrowserRouter>,
   document.getElementById('root')
)
