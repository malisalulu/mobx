import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon,Pagination ,Cascader,Table,Button,Popconfirm} from 'antd';
import "./layout.scss"
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  isLeaf: false,
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  isLeaf: false,
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
}];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
class Mylayout extends Component{
   constructor(...props) {
    		super(...props);
		this.columns = [{
		  title: 'Name',
		  dataIndex: 'name',
		  render: text => <a href="javascript:;">{text}</a>,
		}, {
		  title: 'Age',
		  dataIndex: 'age',
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		},{
		    title: 'Action',
		    key: 'operation',
		    fixed: 'right',
		    width: 100,
		    render: (text, record) => {
		        return (
		         	data.length > 1
		            ? (
		              <a onClick={() => this.handleDelete(record.key)}>
		                Delete
		              </a>
		            ) : null
		        );
	      },
	  }];
	  this.state = {
	  	options,
	    collapsed: false,
	  };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onShowSizeChange=(current, pageSize)=>{
	  console.log(current, pageSize);
  }
  onChange = (value, selectedOptions) => {
//  console.log(value, selectedOptions);
  }

  loadData = (selectedOptions) => {
  	console.log(selectedOptions,'selectedOptions');
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }
  handleDelete = (text) => {
  	console.log(text);
  }

  render() {
  	const { routerData, match } = this.props;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu key="sub1"  title={<span><Icon type="user" /><span>User</span></span>} >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu  key="sub2"  title={<span><Icon type="team" /><span>Team</span></span>} >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger fl"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <p className="fl"><Link to="/app">app</Link></p>
            <p className="fl"><Link to="/about">About</Link></p>
            <p className="fl"><Link to="/msg">Msg</Link></p>
            <p className="fl"><Link to="/calculator">Calculator</Link></p>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          	{this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Mylayout;
