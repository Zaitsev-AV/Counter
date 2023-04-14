import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { tunerReducer } from "./tunerReducer";

const rootReducer = combineReducers(
	{
		counter: counterReducer,
		tuner: tunerReducer
	}
)
export const store = legacy_createStore( rootReducer )

export type RootStoreType = ReturnType<typeof rootReducer>