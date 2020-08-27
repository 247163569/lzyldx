import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

class Slidebar extends React.Component {
    render(i) {
        return (
            <div className="slidebar-menu">
                <img className="menu-logo display-b" src={require("../../static/images/logo.png")} alt="logo"></img>
                <div className="menu-items display-f flex-col">
                    <div className="menu-item text-c">
                        <Link to="/home">首页</Link>
                    </div>
                    <div className="menu-item text-c">
                        <Link to="/user">用户管理</Link>
                    </div>
                    <div className="menu-item text-c">
                        <Link to="/mine">个人中心</Link>
                    </div>
                </div>
            </div>
        )
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

}

export default Slidebar