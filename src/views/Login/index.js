import React, { Component, Fragment } from 'react';
// css
import './index.scss';
// 组件
import LoginFrom from './LoginFrom';
import RegisterFrom from './RegisterFrom';

class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
          fromType: "login"
      }
    }

    switch_from = (val) => {
        this.setState({
            fromType: val
        })
    }

    
    render(){
      return (
        <Fragment>
          <div className="from-wrap">
            <div>
                {
                    this.state.fromType ==="login" ? 
                    <LoginFrom switch_from={this.switch_from}></LoginFrom> : 
                    <RegisterFrom switch_from={this.switch_from}></RegisterFrom>
                }
            </div>
          </div>
        </Fragment>
      );
    }
  }

  export default Login;