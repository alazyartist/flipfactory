import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
	return (
		<div className='bg-zinc-300 w-full h-full fixed flex flex-col'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
