import React from 'react';
import Header from '../../components/header/index';
import Slidebar from '../../components/slidebar/index';
import Router from'../../router/index'; // 引入路由表
import './index.css';


class Layout extends React.Component {
    render(i) {
        return (
            <div className="layout-page">
                <Slidebar />
                <div className={['display-f', 'flex-col', 'layout-main', 'slide-close'].join(' ')}>
                    <Header />
                    <div className="layout-content" style={{ flexGrow: 1 }}>
                        <Router />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout