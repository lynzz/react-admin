import React from 'react';
import { Link } from 'react-router'

import Header from './Header';
import Footer from './Footer';
import Crumb from './Crumb';
import Nav from './Nav';

const SubMenu = Menu.SubMenu;

const App = React.createClass({
  render() {
    return <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo"><h1>React Admin</h1></div>
        <Nav/>
      </aside>
      <div className="ant-layout-main">
        <Header/>
        <Crumb/>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>;
  }
});

export default App;
