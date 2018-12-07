import React from "react";
// import logoImg from './job.png'
import Login from '../../container/login/login'
import './log_reg.less';
class LogReg extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="ground-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default LogReg