import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import Game from "./components/Game";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<Game />
	</Provider>
)
