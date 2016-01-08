import React from 'react';
import request from 'superagent';
import { Table, Icon, Form, Input, Button, Checkbox, message, DatePicker } from 'antd';

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: function(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '操作',
  key: 'operation',
  render: function(text, record) {
    return <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider"></span>
      <a href="#">操作二</a>
      <span className="ant-divider"></span>
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down" />
      </a>
    </span>;
  }
}];
const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  onChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ' + selectedRowKeys);
  },
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};


const User = React.createClass({
  mixins: [Form.ValueMixin],

  getInitialState() {
    return {
      formData: {
        userName: undefined,
        startTime: '2015-12-1',
        endTime: '2015-12-5'
      }
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    message.success('收到表单值~~~ ：' + JSON.stringify(this.state.formData, function(k, v) {
      if (typeof v === 'undefined') {
        return '';
      }
      return v;
    }));
  },

  handlePicker(val) {
    console.log('From: ', val[0], ', to: ', val[1]);
  },

  componentDidMount() {
    request
    .get('/api/users')
    .end((err, res) => {
      console.log(err, res);
    })
  },

  render() {
    const formData = this.state.formData;
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormItem
            id="userName">
            <Input placeholder="请输入账户名" id="userName" name="userName" onChange={this.setValue.bind(this, 'userName')} value={formData.userName} />
          </FormItem>
          <FormItem>
            <RangePicker defaultValue={[formData.startTime, formData.endTime]} style={{width: 184}} format="yyyy-MM-dd" onChange={this.handlePicker} />
          </FormItem>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  },
});

export default User;
