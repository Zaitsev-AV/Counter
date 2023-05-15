import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { tunerReducer } from "./tunerReducer";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from "react-redux";
import { loadMinCount } from "../utils/preloadCount";

const rootReducer = combineReducers(
	{
		counter: counterReducer,
		tuner: tunerReducer
	}
)
const preloadState: PreloadedState = {
	counter: { count: loadMinCount() },
	tuner: { maxCount: 0, minCount: 0 }
}

type AppThunkDispatch =  ThunkDispatch<RootStoreType, any, AnyAction>
export const store = legacy_createStore( rootReducer,preloadState, applyMiddleware(thunkMiddleware) )

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

export type RootStoreType = ReturnType<typeof rootReducer>

interface PreloadedState {
	counter: { count: number },
	tuner: { maxCount: number, minCount: number }
}
