import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/normalize.css'
import 'antd/dist/antd.css'
import './styles/index.css'
import './styles/joker.css'

import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
