import { Routes, Route } from "react-router-dom";
import LitePaper from "./components/LitePaper";
import Home from "./pages/Home";
import Scroll from "./pages/Scroll";
function App() {
	return (
		<>
			<div className='w-[100vw] overflow-hidden h-full z-10'>
				<div className='bg-zinc-900  overflow-y-auto overflow-x-hidden w-full h-full fixed flex flex-col'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/litepaper' element={<LitePaper />} />
						<Route path='/scroll' element={<Scroll />} />
					</Routes>
				</div>
			</div>
			{/* <div className='z-[-1] bg-teal-300 w-full h-full fixed bg-[#ff1770]' /> */}
		</>
	);
}

export default App;
