import {combineReducers, createStore, Store} from "redux";
import {AllActionType, MoneyReducer} from "./MoneyReducer";
import {CustomerReducer} from "./CustomerReducer";
import {composeWithDevTools} from "redux-devtools-extension";


export const rootReducer = combineReducers({
    balance: MoneyReducer,
    customers: CustomerReducer

})


export type RootReducerType = ReturnType<typeof rootReducer>


let store: Store<RootReducerType, AllActionType> = createStore(rootReducer, composeWithDevTools())
export default store;