import React, { Component } from 'react';
import IndexLink from 'react-router';
import {
    Link
} from 'react-router';
import { Menu } from 'antd';
// import NavLink from '../../components/NavLink';

import './index.css';

const { SubMenu } = Menu;

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-component">
                <Menu mode="inline" theme="dark">
                    <Menu.Item><Link to="/">首页</Link></Menu.Item>
                    <Menu.Item><Link to="goods" >商品管理</Link></Menu.Item>
                    <Menu.Item><Link to="orders" >订单管理</Link></Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;