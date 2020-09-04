import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './pages/layout/index';
import './index.less';

import { Provider } from 'react-redux'
import { store } from './store/index'

const AppDom = (
  <div style={{ height: '100%', width: '100%' }}>
    <Provider store={ store }>
      <HashRouter>
        <Layout />
      </HashRouter>
    </Provider>
  </div>
)

class App extends React.Component {
  render(i) {
    return AppDom
  }
}

ReactDOM.render(< App />, document.getElementById("root"));