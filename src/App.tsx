import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/store";
import {addMoneyAC, getMoneyAC} from "./redux/MoneyReducer";


function App() {

    const dispatch = useDispatch()
const balance =  useSelector<RootReducerType,number>(state => state.balance.balance)


    const addCash = (addSum:number) => {
        dispatch(addMoneyAC(addSum))
    }
    const getCash = (getSum:number) => {
        dispatch(getMoneyAC(getSum))
    }
    return (
        <div className={'app '}>
            <div>{balance}</div>
        <div style={{display:'flex'}}>
            <button onClick={() => addCash(Number(prompt()))}>Add money</button>
            <button onClick={() => getCash(Number(prompt()))}>Get money</button>
        </div>
        </div>
    );
}

export default App;
