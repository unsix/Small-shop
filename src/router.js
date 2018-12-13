import React from 'react'
import Apps from './Apps'
import App from './App'
import Home from './container/home'
import Seahch from './container/search'
import MangerAdress from './container/manager_adress'
import Login from './container/login/login'
import Register from './container/register/register'
import ForgotPwd  from './container/forgot_pwd'
import ChangePwd from './container/change_pwd'
import NoMatch from './component/nomatch'

import ShopCart from './container/shop_cart'
import Shop from './container/shop'
import Order from './container/order'

import ShopDetails from  './component/details/shop_details'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

class ERouter extends React.Component{

  render(){
    return(
      <HashRouter>
        <Apps>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpwd" component={ForgotPwd} />
            <Route path="/" render={()=>
              <App>
                <Switch>
                  <Route path="/home" component={Home}  />
                  <Route path="/search" component={Seahch} />
                  {/*个人中心*/}
                  <Route path="/user/order" component={Order} />
                  <Route path="/user/adress" component={MangerAdress} />

                  <Route path="/seting/reset" component={ChangePwd} />
                  <Route path="/ui/buttons" component={Login} />
                  <Route path="/shopcart" component={ShopCart} />
                  <Route path="/shop/all" component={Shop} />

                  <Route path="/details/shop/:id" component={ShopDetails} />
                  <Route component={NoMatch} />
                </Switch>
              </App>
            }/>
          </Switch>
        </Apps>
      </HashRouter>
    )
  }
}
export default ERouter