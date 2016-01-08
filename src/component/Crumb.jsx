import React from 'react';
import {Breadcrumb} from 'antd';

const Crumb = React.createClass({
  render() {
    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>应用列表</Breadcrumb.Item>
          <Breadcrumb.Item>某应用</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  },
});

export default Crumb;
