import React from 'react'
import { withRouter } from 'react-router-dom'
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

    onSelect = (item) => {
        let menuProps = {}
        let selectedKeys = item.key
        if (selectedKeys) menuProps.selectedKeys = [selectedKeys]
        let openKeys = this.currentParentHandler(item.key) || ''
        if (openKeys) menuProps.openKeys = [openKeys]
        this.setState({
            menuProps
        })
    }

    currentParentHandler = (selectedKeys) => {
        let { store } = this.context; // this.context 获取到store
        let menuList = store.getState().slide.menus
        for (let i = 0; i < menuList.length; i++) {
            if (menuList[i].children) {
                for (let j = 0; j < menuList[i].children.length; j++) {
                    if (menuList[i].children[j]['key'] === selectedKeys) {
                        return menuList[i]['key']
                    }
                }
            }
        }
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
                <Menu onSelect={this.onSelect} {...this.state.menuProps} style={{ width: '100%', height: '100%', borderRight: 'none' }} mode="inline">
                    {this.menuList(this.state.menus)}
                </Menu>
            </div>
        )
    }

    componentDidMount() {
        let { store } = this.context; // this.context 获取到store
        let state = this.state
        let pathname = this.props.history.location.pathname
        let menuProps = {}
        let selectedKeys = pathname === '/' || !pathname ? '/home' : pathname
        if (selectedKeys) menuProps.selectedKeys = [selectedKeys]
        let openKeys = this.currentParentHandler(selectedKeys) || ''
        if (openKeys) menuProps.openKeys = [openKeys]

        state = Object.assign({}, state, store.getState().slide, {menuProps})
        this.setState(state)

        store.subscribe(() => { // 监听状态的改变
            this.setState(store.getState().slide)
        })
    }

}

export default withRouter(Slidebar)