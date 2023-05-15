import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { tunerReducer } from "./tunerReducer";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { useDispatch } from "react-redux";

const rootReducer = combineReducers(
	{
		counter: counterReducer,
		tuner: tunerReducer
	}
)
type AppThunkDispatch =  ThunkDispatch<RootStoreType, any, AnyAction>
export const store = legacy_createStore( rootReducer, applyMiddleware(thunkMiddleware) )

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

export type RootStoreType = ReturnType<typeof rootReducer>
