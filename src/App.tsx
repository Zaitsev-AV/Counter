import './App.module.css'
import {Counter} from "./components/Counter/Counter";
import {CounterTuner} from "./components/tuner/CounterTuner";
import s from './App.module.css'


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
	
			<div className={ s.background }>
				<div className={ s.app }>
					<Counter />
				</div>
				<CounterTuner />
			</div>
	)
}

export default App
