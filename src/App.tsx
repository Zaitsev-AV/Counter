import './App.css'
import {Counter} from "./components/Counter/Counter";
import {CounterTuner} from "./components/tuner/CounterTuner";


function App() {

	// useEffect(() => {
	// 	let getKyeMax = localStorage.getItem('key_countMax')
	// 	let getKyeMin = localStorage.getItem('key_countMin')
	// 	if (getKyeMax && getKyeMin) {
	// 		let newCountMax = JSON.parse(getKyeMax)
	// 		let newCountMin = JSON.parse(getKyeMin)
	// 		// setMaxCount(newCountMax)
	// 		// setMinCount(newCountMin)
	// 		// setCount(newCountMin)
	// 	}
	// }, [])


	return (
		<>
			<div className="App">
				<Counter />
			</div>
			<CounterTuner />
		</>

	)
}

export default App
