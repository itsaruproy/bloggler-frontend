import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { ChakraProvider } from '@chakra-ui/react'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(null, composeEnhancers(applyMiddleware(reduxThunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <Provider store={store}>
    <ChakraProvider>
        <App />
    </ChakraProvider>
    // </Provider>
)
