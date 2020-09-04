import React from 'react';
import { storeContext } from '../../store/context'; // 引入storeContext
import { slideChange } from '../../store/action';

import './index.css';

class Header extends React.Component {
    static contextType = storeContext; // 加静态属性contextType, 赋值为storeContext
    // constructor(props) {
    //     super(props)
    // }

    gogogo = () => {
        let { store } = this.context;
        store.dispatch(slideChange());
    }

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
}

export default Header