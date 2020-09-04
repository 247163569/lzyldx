import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './pages/layout/index';
import './index.less';

import { store } from "./store/index";
import { storeContext } from "./store/context";

// 提供sotre 作为共享数据，App及其子组件都能获取到store
const AppDom = (
  <div style={{ height: '100%', width: '100%' }}>
    <storeContext.Provider value={{store: store}}>
      <HashRouter>
        <Layout/>
      </HashRouter>
    </storeContext.Provider>
  </div>
)

class App extends React.Component {
  render(i) {
    return AppDom;
  }
}

ReactDOM.render(< App />, document.getElementById("root"));