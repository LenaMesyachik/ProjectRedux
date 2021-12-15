import React from 'react';
import './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./redux/store";
import {addMoneyAC, getMoneyAC} from "./redux/MoneyReducer";
import {addCustomerAC, CustomersType, deleteCustomerAC} from "./redux/CustomerReducer";
import s from './App.module.css'

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
        const customers = [{
            name: value,
            id: Date.now()
        }]
        dispatch(addCustomerAC(customers))
    }
        const deleteCustomer = (id: number) => {
            dispatch(deleteCustomerAC(id))
        }
    return (
        <div className={s.app}>
        <div className={s.container}>
            <div>{balance}</div>
            <div className={s.button}>
                <button className={s.btn} onClick={() => addCash(Number(prompt()))}>Add money</button>
                <button className={s.btn}  onClick={() => getCash(Number(prompt()))}>Get money</button>
                <button className={s.btn}  onClick={() => addCustomer(String(prompt()))}>Add customer</button>
                {/*<button onClick={() => deleteCustomer(String(prompt()))}>Delete customer</button>*/}
            </div>
            <div>
                {customers.length !== 0 ?
                    <div>{customers.map(c =>
                        <div onClick={()=>deleteCustomer(c.id)}>
                            {c.name}
                        </div>)}
                    </div> :
                    <div> 'No clients! '</div>}
            </div>
        </div>
        </div>
    );
}

export default App;
