import './index.css'
import React from 'react'
import { Provider } from "react-redux"
import ReactDOM from 'react-dom/client'
import store from "./store/store"
import Game from "./components/Game"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<Game />
	</Provider>
)
