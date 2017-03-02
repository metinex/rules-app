import React, { Component } from 'react';
import '../styles/index.css';
import Sidebar from './Sidebar'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <Sidebar route={this.props.location.pathname} />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
