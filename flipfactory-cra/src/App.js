import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
	return (
		<>
			<div className='bg-gradient-to-t from-teal-700 to-teal-300 overflow-auto w-full h-full fixed flex flex-col'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
			{/* <div className='z-[-1] bg-teal-300 w-full h-full fixed' /> */}
		</>
	);
}

export default App;
