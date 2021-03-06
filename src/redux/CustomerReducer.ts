export const initialState = {
    customers: [ ]
}
export type CustomersType = {
    id: number,
    name: string,
    age?: number
}

export type InitialStateType = {
    customers: Array<CustomersType>,
}

export const CustomerReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-CUSTOMER':
        return {...state,customers: [...state.customers,...action.customers]}

        case 'DELETE-CUSTOMER':
return ({...state, customers: state.customers.filter(c => c.id !== action.id)})
        default:
            return state
    }
}
export type AllActionType = addCustomerACType | deleteCustomerACType

export type addCustomerACType = {
    type: 'ADD-CUSTOMER',
    customers:CustomersType[]
}
export const addCustomerAC = (customers:CustomersType[]) => ({type: 'ADD-CUSTOMER',customers } as const)



export type deleteCustomerACType = {
    type: 'DELETE-CUSTOMER',
    id:number
}
export const deleteCustomerAC = (id:number) => ({type: 'DELETE-CUSTOMER',id } as const)