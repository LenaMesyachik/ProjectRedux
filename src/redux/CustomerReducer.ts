export const initialState = {
    customer: []
}
/*export type InitialStateType={
    balance:number
}*/
type InitialStateType = typeof initialState
export const CustomerReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MONEY':

        case 'GET-MONEY':

        default:
            return state
    }
}
export type AllActionType = addMoneyACType | getMoneyACType

export type addMoneyACType = {
    type: 'ADD-MONEY',
    addSum: number
}
export const addMoneyAC = (addSum: number) => ({type: 'ADD-MONEY', addSum} as const)

export type getMoneyACType = {
    type: 'GET-MONEY',
    getSum: number
}
export const getMoneyAC = (getSum: number) => ({type: 'GET-MONEY', getSum} as const)