import {combineReducers, createStore, Store} from "redux";
import {AllActionType, Reducers} from "./Reducers";


export const rootReducer = combineReducers({
balance: Reducers

})


 export type RootReducerType=ReturnType<typeof rootReducer>


let store:Store<RootReducerType,AllActionType> = createStore(rootReducer)

export default store;