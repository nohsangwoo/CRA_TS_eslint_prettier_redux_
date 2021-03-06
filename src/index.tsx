import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store/store'
import AOSINIT from 'components/utils/AOSINIT'

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AOSINIT>
          <App />
        </AOSINIT>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
