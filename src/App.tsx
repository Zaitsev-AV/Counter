import './App.module.css'
import {Counter} from "./components/Counter/Counter";
import {CounterTuner} from "./components/tuner/CounterTuner";
import s from './App.module.css'
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { getDataToLocalStorageTC } from "./redux/tunerReducer";


function App() {
const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getDataToLocalStorageTC())
	}, [])


	return (
		<div className={ s.background }>
			<div className={ s.wrapper }>
				<CounterTuner/>
				<Counter/>
			</div>
		
		</div>
	
	)}

export default App
