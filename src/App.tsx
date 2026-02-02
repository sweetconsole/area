import { Routes, Route } from "react-router-dom"
import { Home, Stack, UI } from "./pages"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/stack/" element={<Stack />} />
			<Route path="/ui/" element={<UI />} />
		</Routes>
	)
}

export default App
