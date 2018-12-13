import { combineReducers } from 'redux'
import { menu } from './redux/menu_redux'
import { shop } from './redux/shop_redux'


export default combineReducers({menu,shop})