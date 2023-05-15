import React from 'react';
import s from './Counter.module.css'
import { Button } from "../Button/Button";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { useSelector } from "react-redux";
import { RootStoreType, useAppDispatch } from "../../redux/store";
import { TunerType } from "../../redux/tunerReducer";
import { IncrementCountAC, ResetCountAC, StateType } from "../../redux/counterReducer";


export const Counter: React.FC= () => {
	
	const stateTuner = useSelector<RootStoreType, TunerType>(state => state.tuner)
	const stateCounter = useSelector<RootStoreType, StateType>(state => state.counter)
	
	const dispatch = useAppDispatch()

	const disMax = stateCounter.count === stateTuner.maxCount;
	const disMin = stateCounter.count === stateTuner.minCount;
	const increment = () => {
		dispatch(IncrementCountAC(stateCounter.count))
	}
	const reset = () => {
		dispatch(ResetCountAC(stateTuner.minCount))
	}
	
	return (
		<div className={s.wrapper}>
			<Scoreboard value={stateCounter.count}
						maxCount={stateTuner.maxCount}
						minCount={stateTuner.minCount}
			/>
			<div className={s.buttons}>
				<Button callBack={increment}
						disabled={disMax}
						typeBtn={'inc'}>Increment</Button>
				<Button callBack={reset}
						disabled={disMin}
						typeBtn={'res'}>Reset</Button>
			</div>
		</div>

	);
};