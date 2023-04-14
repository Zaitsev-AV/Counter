
export type TunerType = {
	maxCount: number
	minCount: number
}

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

type ActionType = ReturnType<typeof SetMaxCountAC> | ReturnType<typeof SetMinCountAC>
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