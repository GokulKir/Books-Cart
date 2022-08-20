import { createStore } from 'redux'

import cartItemsReducer from './CartItem'

const store = createStore(cartItemsReducer)


export default store;