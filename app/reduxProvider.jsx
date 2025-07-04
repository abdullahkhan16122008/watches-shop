"use client"
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}