import React from 'react';
import b from './Button.module.css'

type ButtonProps = {
	typeBtn: string
	children: React.ReactNode
	callBack: () => void
	disabled?: boolean
};
export const Button: React.FC<ButtonProps> = (props) => {

	const {callBack, children, disabled, typeBtn, ...otherProps} = props

	return (
		<button onClick={callBack}
				disabled={disabled}
				className={typeBtn === 'inc' ? b.inc : typeBtn === 'res' ? b.reset : typeBtn === 'set' ? b.set : b.clear}>{children}</button>
	);
};