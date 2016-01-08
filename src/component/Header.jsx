import React from 'react';
import {Icon, Badge, Row, Col} from 'antd';

const Header = React.createClass({
  render() {
    return (
      <div className="ant-layout-header">
        <Row type="flex" justify="end">
          <Col span="4">
            <Badge dot>
              <Icon type="notification" />
            </Badge>
          </Col>
        </Row>

      </div>
    );
  },
});

export default Header;
