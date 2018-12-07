import React from 'react'
import Apps from './Apps'
import Admin from './admin'
import App from './App'
import Home from './container/home'
import Login from './container/login/login'
import Register from './container/register/register'
import LogReg  from './component/background/log_reg'
import ForgotPwd  from './container/forgot_pwd'

import NoMatch from './component/nomatch'
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
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Login} />
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