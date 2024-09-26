import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LiveOn from './pages/LiveOn'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LiveOn />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
