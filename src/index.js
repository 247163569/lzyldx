import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './pages/layout/index';
import './index.css';

const AppDom = (
  <div style={{ height: '100%', width: '100%' }}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </div>
)

class App extends React.Component {
  render(i) {
    return AppDom
  }
}

ReactDOM.render(< App />, document.getElementById("root"));