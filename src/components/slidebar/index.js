import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { Menu } from 'antd'
const { SubMenu } = Menu

class Slidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [{
                key: 'home',
                name: '首页',
                link: '/home'
            }, {
                key: 'user',
                name: '用户管理',
                link: '/user',
                children: [{
                    key: 'userList',
                    name: '用户列表',
                    link: '/userList'
                }]
            }, {
                key: 'mine',
                name: '个人中心',
                link: '/mine'
            }]
        }
    }

    menuList(menus) {
        return (
            menus.map((menu) => {
                if (menu.children) {
                    return (
                        <SubMenu key={menu.key} title={menu.name}>
                            {this.menuList(menu.children)}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={menu.key}>
                            <Link to={menu.link}>{menu.name}</Link>
                        </Menu.Item>
                    )
                }
            })
        )
    }

    render(i) {
        return (
            <div className={['slidebar-menu', 'slide-close'].join(' ')}>
                <img className="menu-logo display-b" src={require("../../static/images/logo.png")} alt="logo"></img>
                <Menu style={{ width: '100%', height: '100%', borderRight: 'none' }} mode="inline">
                    {this.menuList(this.state.menus)}
                </Menu>
            </div>
        )
    }
    // componentWillMount() {
    //     console.log('componentWillMount')
    // }
    // componentDidMount() {
    //     console.log('componentDidMount')
    // }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate')
    // }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }

}

export default Slidebar