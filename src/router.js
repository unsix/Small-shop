import React from 'react'
import Apps from './Apps'
import Login from './container/login/login'
import NoMatch from './component/nomatch'
import LogReg  from './component/background/log_reg'
import Admin from './admin'
import App from './App'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'

class ERouter extends React.Component{

  render(){
    return(
      <HashRouter>
        <Apps>
          <Switch>
            <Route path="/login" component={LogReg} />
            <Route path="/" render={()=>
              <App>
                <Switch>
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