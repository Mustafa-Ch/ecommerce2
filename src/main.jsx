import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import router from './router/Router.jsx'
import { Provider } from 'react-redux'
import {store} from '../src/redux/Store.jsx'
import ShopContextProvider from './Contextapi/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App/>
 </Provider>
,
)
