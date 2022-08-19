import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scroll from "./pages/Scroll";
function App() {
	return (
		<>
			<div className='w-full h-full bg-gradient-to-b from-teal-500 z-10'>
				<div className='bg-[#ff1770]  overflow-auto w-full h-full fixed flex flex-col'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/scroll' element={<Scroll />} />
					</Routes>
				</div>
			</div>
			{/* <div className='z-[-1] bg-teal-300 w-full h-full fixed' /> */}
		</>
	);
}

export default App;
