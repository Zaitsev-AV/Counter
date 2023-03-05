import React from 'react';
import s from './Counter.module.css'
import {Button} from "./Button";
import {Scoreboard} from "./Scoreboard";

type CounterProps = {
	count: number
	increment: () => void
	reset: () => void
	maxCount: number
	minCount: number
};
export const Counter: React.FC<CounterProps> = (props) => {
	const {count, increment, reset, maxCount, minCount, ...otherProps} = props

	const disMax = count === maxCount;
	const disMin = count === minCount;
	// setCount(minCount=count)

	return (
		<div className={s.wrapper}>
			<Scoreboard value={count}
						maxCount={maxCount}
						minCount={minCount}
			/>
			{/*{disMax && <div className={s.danger}>{count}</div>}*/}
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