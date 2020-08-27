import React from 'react';
import './index.css';

class User extends React.Component {
    render(i) {
        return (
        <div className="user-page">
            <div className="search-container">
                <div className="search-item">
                    <label className="item-tit">用户名：</label>
                    <input className="item-input" placeholder="请输入用户名"></input>
                </div>
                <div className="search-item">
                    <label className="item-tit">手机号：</label>
                    <input className="item-input" placeholder="请输入手机号"></input>
                </div>
                <div className="search-item">
                    <input type="button" value="搜索"></input>
                </div>
            </div>
        </div>
        )
    }
}

export default User