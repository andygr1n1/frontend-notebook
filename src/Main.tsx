import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './styles/index.css'

import { App } from './App'
import { StoreProvider } from './StoreProvider'
import { StrictMode } from 'react'

const rootContainer = document.getElementById('root')!
const root = createRoot(rootContainer)

root.render(
    <StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </StrictMode>,
)
