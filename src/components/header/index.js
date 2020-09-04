import React from 'react';
import './index.css';

class Header extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    gogogo = () => {}

    render(i) {
        return (
            <div className="nav-header display-f flex-between align-center">
                <div className="cursor-p select-no" onClick={()=>{this.gogogo()}}>≡</div>
                <div className="display-f align-center">
                    <div className="user-avatar"></div>
                    <div className="user-name">李朝阳</div>
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

export default Header