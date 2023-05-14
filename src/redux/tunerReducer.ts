import { Dispatch } from "redux";

const initialState: TunerType = {
	maxCount: 0,
	minCount: 0
}
export const tunerReducer = (state: TunerType = initialState, action: ActionType): TunerType => {
	switch (action.type ) {
		case "SET-MAX-COUNT": {
			return {...state, maxCount: action.payload.maxCount}
		}
		case "SET-MIN-COUNT": {
			return {...state, minCount: action.payload.minCount}
		}
		
		default:
			return state
	}
}
//actions
export const SetMaxCountAC = ( maxCount: number ) => {
	return {
		type: "SET-MAX-COUNT",
		payload: {
			maxCount
		}
	} as const
}

export const SetMinCountAC = ( minCount: number ) => {
	return {
		type: "SET-MIN-COUNT",
		payload: {
			minCount
		}
	} as const
}
//thunks
export const setDataToLocalStorageTC = ( minCount: number, maxCount: number ) => () => {
	localStorage.setItem( 'key_countMax',JSON.stringify(maxCount))
	localStorage.setItem( 'key_countMin',JSON.stringify(minCount))
}

export const getDataToLocalStorageTC = ( ) => ( dispatch: Dispatch ) => {
	const getKyeMax = localStorage.getItem('key_countMax')
	const getKyeMin = localStorage.getItem('key_countMin')
	if (getKyeMax && getKyeMin) {
		const newCountMax = JSON.parse( getKyeMax )
		const newCountMin = JSON.parse( getKyeMin )
		dispatch(SetMaxCountAC(newCountMax))
		dispatch(SetMinCountAC(newCountMin))
	}
	
}

//types
export type TunerType = {
	maxCount: number
	minCount: number
}

type ActionType = ReturnType<typeof SetMaxCountAC> | ReturnType<typeof SetMinCountAC>