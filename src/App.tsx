import {useEffect, useState} from 'react'
import './App.css'
import {Counter} from "./components/Counter/Counter";
import {CounterTuner} from "./components/tuner/CounterTuner";

function App() {

	const [maxCount, setMaxCount] = useState(0)
	const [minCount, setMinCount] = useState(0)

	let [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	const reset = () => {
		let getKyeMin = localStorage.getItem('key_countMin')
		if (getKyeMin) {
			let newCountMin = JSON.parse(getKyeMin)
			setCount(newCountMin)
		}
	}


	useEffect(() => {
		let getKyeMax = localStorage.getItem('key_countMax')
		let getKyeMin = localStorage.getItem('key_countMin')
		if (getKyeMax && getKyeMin) {
			let newCountMax = JSON.parse(getKyeMax)
			let newCountMin = JSON.parse(getKyeMin)
			setMaxCount(newCountMax)
			setMinCount(newCountMin)
			setCount(newCountMin)
		}
	}, [])


	return (
		<>
			<div className="App">
				<Counter count={count}
						 setCount={setCount}
						 increment={increment}
						 reset={reset}
						 maxCount={maxCount}
						 minCount={minCount}
				/>

			</div>
			<CounterTuner maxCount={maxCount}
						  minCount={minCount}
						  setMaxCount={setMaxCount}
						  setMinCount={setMinCount}
						  setCount={setCount}

			/>
		</>

	)
}

export default App
