
const initialState: StateType = {
	count: 0
}

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
	switch (action.type ) {
		case "INCREMENT": {
			return {...state, count: action.payload.count + 1}
		}
		case "RESET-COUNT": {
			return {...state, count: action.payload.count}
		}
		default :
			return state
	}
}

//actions
export const IncrementCountAC = ( count: number ) => {
	return {
		type: "INCREMENT",
		payload: {
			count
		}
	} as const
}
export const ResetCountAC = ( count: number ) => {
	return {
		type: "RESET-COUNT",
		payload: {
			count
		}
	} as const
}

//types
export type StateType = {
	count: number
}
type ActionType = ReturnType<typeof IncrementCountAC> | ReturnType<typeof ResetCountAC>