import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LiveOn from './pages/LiveOn'
import LiveOnSupport from './pages/LiveOnSupport'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/liveOn" element={<LiveOn />} />
				<Route path="/streamAlertSupport" element={<LiveOnSupport />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
