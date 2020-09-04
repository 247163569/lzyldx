import React from 'react'
import { storeContext } from '../../store/context'; // 引入storeContext

import { Link } from 'react-router-dom'
import './index.css'

import { Menu } from 'antd'
const { SubMenu } = Menu

class Slidebar extends React.Component {
    static contextType = storeContext; // 加静态属性contextType, 赋值为storeContext
    constructor(props) {
        super(props)
        this.state = {}
    }

    menuList(menus) {
        if (menus) {
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
    }

    render(i) {
        return (
            <div className={['slidebar-menu', this.state.slideState ? '' : 'slide-close'].join(' ')}>
                <img className="menu-logo display-b" src={require("../../static/images/logo.png")} alt="logo"></img>
                <Menu style={{ width: '100%', height: '100%', borderRight: 'none' }} mode="inline">
                    {this.menuList(this.state.menus)}
                </Menu>
            </div>
        )
    }

    componentDidMount() {
        let { store } = this.context; // this.context 获取到store
        this.setState(store.getState())
        store.subscribe(() => { // 监听状态的改变
            this.setState(store.getState())
        })
    }

}

export default Slidebar