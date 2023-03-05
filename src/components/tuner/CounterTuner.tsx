import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './CounterTuner.module.css'
import {Button} from "../Button/Button";
import {Input} from "./Input";

type CounterTunerProps = {
	maxCount: number
	minCount: number
	setMaxCount: (maxCount: number) => void
	setMinCount: (minCount: number) => void
	setCount: (count: number) => void
};
export const CounterTuner: React.FC<CounterTunerProps> = (props) => {
	const {maxCount, minCount, setMinCount, setMaxCount, setCount, ...otherProps} = props

	const onMaxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget.value) setMaxCount(+e.currentTarget.value)
	}
	const onMinCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinCount(+e.currentTarget.value)
	}
	const onClickSetButtonHandler = () => {
		localStorage.setItem('key_countMax', JSON.stringify(maxCount))
		localStorage.setItem('key_countMin', JSON.stringify(minCount))
		setCount(minCount)
	}
	const onClickClearButtonHandler = () => {
		localStorage.clear()
	}

	return (
		<div className={s.wrapper}>
			<div className={s.scoreboard}>
				<div>
					<div>
						Max
						<input type="number"
							   value={maxCount}
							   onChange={onMaxCountHandler}
						/>
						{/*<Input inputValue={maxCount}*/}
						{/*	   callBack={onMaxCountHandler}/>*/}
					</div>
					<div>
						Min
						<input type="number"
							   value={minCount}
							   onChange={onMinCountHandler}
						/>
						{/*<Input inputValue={minCount}*/}
						{/*	   callBack={() => onMinCountHandler}/>*/}
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