import React from 'react';
import Header from '../../components/header/index';
import Slidebar from '../../components/slidebar/index';
import Router from'../../router/index'; // 引入路由表
import './index.css';

import { storeContext } from '../../store/context'; // 引入storeContext


class Layout extends React.Component {
    static contextType = storeContext; // 加静态属性contextType, 赋值为storeContext
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(i) {
        return (
            <div className="layout-page">
                <Slidebar />
                <div className={['display-f', 'flex-col', 'layout-main', this.state.slideState?'':'slide-close'].join(' ')}>
                    <Header />
                    <div className="layout-content" style={{ flexGrow: 1 }}>
                        <Router />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let { store } = this.context; // this.context 获取到store
        this.setState(store.getState().slide)
        store.subscribe(() => { // 监听状态的改变
            this.setState(store.getState().slide)
        })
    }
}

export default Layout