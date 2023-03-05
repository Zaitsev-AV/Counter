import React from 'react';

type InputProps = {
	inputValue: number
	callBack: () => void
	children?: React.ReactNode
};
export const Input: React.FC<InputProps> = (props) => {
	const {inputValue, callBack, ...otherProps} = props
	return (
		<input type="number"
			   value={inputValue}
			   onChange={callBack}
		/>

	);
};