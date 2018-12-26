import React from 'react'
import Apps from './Apps'
import App from './App'
import Home from './container/home'
import Seahch from './container/search'
import MangerAdress from './container/manager_adress'
import Invoice from  './container/invoice'
// import Evaluate from  './container/evaluate/evaluate'
// import RefundAfter from './container/refund_after'
import FeedBack from  './container/feedback'
import AboutUs from  './container/about_us'
import Service from  './container/service'
import Login from './container/login/login'
import Register from './container/register/register'
import ForgotPwd  from './container/forgot_pwd'
import ChangePwd from './container/change_pwd'
import Collection from  './container/collection/collection'
import NoMatch from './component/nomatch'
import Payment from  './component/payment'

import ShopCart from './container/shop_cart'
import Shop from './container/shop'
import Order from './container/order'
//id动态路由
import ShopDetails from  './component/details/shop_details'
import EvaluateDetails  from './component/details/evaluate_details'
import AfterDetails from './component/details/after_details'
import OrderDetails from './component/details/order_details'
import Logistics from  './component/details/logistics'
import ApplyInvoice from  './component/details/apply_invoice'
import Refund from  './component/details/refund'
import Evaluate from  './component/details/evaluate'
import ReundDetails from  './component/details/refund_details'
import CartDetails from  './component/details/cart_details'

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
                  <Route path="/user/address" component={MangerAdress} />
                  <Route path="/user/collection" component={Collection} />
                  <Route path="/user/invoice" component={Invoice} />
                  {/*<Route path="/user/evaluate" component={Evaluate} />*/}
                  {/*<Route path="/user/refund_after" component={RefundAfter} />*/}
                  <Route path="/setting/reset" component={ChangePwd} />
                  <Route path="/setting/feedback" component={FeedBack} />
                  <Route path="/setting/our" component={AboutUs} />
                  <Route path="/setting/service" component={Service} />
                  <Route path="/ui/buttons" component={Login} />
                  <Route path="/shopcart" component={ShopCart} />
                  <Route path="/shop/all" component={Shop} />

                  <Route path="/details/shop/:id" component={ShopDetails} />
                  {/*<Route path="/details/evaluate/:id" component={EvaluateDetails} />*/}
                  <Route path="/details/after/:id" component={AfterDetails} />
                  <Route path="/details/order/:id" component={OrderDetails} />
                  <Route path="/details/logistics/:id" component={Logistics} />
                  <Route path="/details/applyinvoice/:id" component={ApplyInvoice} />
                  <Route path="/details/refund/:id" component={Refund} />
                  <Route path="/details/evaluate/:id" component={Evaluate} />
                  <Route path="/details/reunddetails/:id" component={ReundDetails} />
                  <Route path="/details/cart/:id" component={CartDetails} />
                  <Route path="/details/payment/:id" component={Payment} />
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