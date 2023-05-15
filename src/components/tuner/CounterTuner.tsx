import React, { ChangeEvent } from 'react';
import s from './CounterTuner.module.css'
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { setDataToLocalStorageTC, SetMaxCountAC, SetMinCountAC, TunerType } from "../../redux/tunerReducer";
import { RootStoreType, useAppDispatch } from "../../redux/store";
import { IncrementCountAC } from "../../redux/counterReducer";


export const CounterTuner: React.FC = () => {
const state = useSelector<RootStoreType, TunerType>(state => state.tuner)
	const dispatch = useAppDispatch()
	const onMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(SetMaxCountAC(+e.currentTarget.value) )
	}
	const onMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(SetMinCountAC(+e.currentTarget.value))
		dispatch(IncrementCountAC(+e.currentTarget.value))
	}
	const onClickSetButtonHandler = () => {
		dispatch(setDataToLocalStorageTC(state.minCount, state.maxCount))
	}
	const onClickClearButtonHandler = () => {
		dispatch(SetMaxCountAC(0))
		dispatch(SetMinCountAC(0))
		// localStorage.clear()
	}

	return (
		<div className={s.wrapper}>
			<div className={s.scoreboard}>
				<div>
					<div>
						Max
						<input type="number"
							   value={state.maxCount}
							   onChange={onMaxCountHandler}
						/>
					</div>
					<div>
						Min
						<input type="number"
							   value={state.minCount}
							   onChange={onMinCountHandler}
						/>
					</div>

				</div>
			</div>
			<div className={s.btn_wrapper}>
				<Button typeBtn={'set'}
						callBack={onClickSetButtonHandler}>Set</Button>
				<Button typeBtn={'clear'}
						callBack={onClickClearButtonHandler}>Clear</Button>
			</div>
		</div>
	);
};