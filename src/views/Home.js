import React, { Component, Fragment } from 'react';
import { Button } from 'antd';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {}
    }
  
    render(){
      return (
        <Fragment>
          home
          <Button type="primary">Primary</Button>
        </Fragment>
      );
    }
  }

  export default Home;