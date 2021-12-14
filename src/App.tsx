import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/store";
import {addMoneyAC, getMoneyAC} from "./redux/MoneyReducer";
import {addCustomerAC, CustomersType} from "./redux/CustomerReducer";


function App() {

    const dispatch = useDispatch()
    const balance = useSelector<RootReducerType, number>(state => state.balance.balance)
    const customers = useSelector<RootReducerType, Array<CustomersType>>(state => state.customers.customers)


    const addCash = (addSum: number) => {
        dispatch(addMoneyAC(addSum))
    }
    const getCash = (getSum: number) => {
        dispatch(getMoneyAC(getSum))
    }
    const addCustomer = (value: string) => {
        const customer = {
            name: value,
            age: 25,
            id: 1
        }
        dispatch(addCustomerAC(customer))
    }
    const deleteCustomer = (getSum: number) => {
        dispatch(getMoneyAC(getSum))
    }
    return (
        <div className={'app '}>
            <div>{balance}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Add money</button>
                <button onClick={() => getCash(Number(prompt()))}>Get money</button>
                <button onClick={() => addCustomer(String(prompt()))}>Add customer</button>
                <button onClick={() => deleteCustomer(Number(prompt()))}>Delete customer</button>
            </div>
            <div>
                {customers.length === 0 ?
                    <div>{customers.map(c =>
                        <div>{c.name}</div>)}
                    </div> :
                    <div style={{fontSize: '2rem', marginTop: 20}}> 'No clients! '</div>}
            </div>
        </div>
    );
}

export default App;
