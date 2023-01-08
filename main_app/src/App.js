import React from 'react';
import './App.scss';
import Home from './pages/Home'
import Qna from './pages/Qna'
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='*' element={<Home />} />
				<Route path='/qna/*' element={<Qna />} />
			</Routes>
		</BrowserRouter>
		
	)
}

export default App;