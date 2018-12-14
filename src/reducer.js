import { combineReducers } from 'redux'
import { menu } from './redux/menu_redux'
import { shop } from './redux/shop_redux'
import { cart} from './redux/cart_redux'
import { order } from  './redux/order_redux'


export default combineReducers({menu,shop,cart,order})