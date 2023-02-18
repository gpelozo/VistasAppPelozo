import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
// reducers
import CategoryReducer from "./reducers/category.reducer"
import ProductReducer from "./reducers/products.reducer"
import CartReducer from "./reducers/cart.reducer"

const rootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))