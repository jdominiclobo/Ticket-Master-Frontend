import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import customersReducer from '../reducers/customers'
import employeesReducer from '../reducers/employees'
import departmentsReducer from '../reducers/departments'
import userReducer  from '../reducers/user'
import ticketsReducer from '../reducers/tickets'

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        customers : customersReducer,
        departments : departmentsReducer,
        employees : employeesReducer,
        tickets : ticketsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore