import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


const App = () => {
  const Navbar = React.lazy(() => import('./components/navbar/navbar'));
  const Footer = React.lazy(() => import('./components/footer/footer'));



  return (
    <div className="app">
      <Layout className="app-layout">
        <div className="app-layout-top">
          <Layout.Header>
            <Navbar />
          </Layout.Header>
          <Layout.Content>{' Hier App Content machen'}</Layout.Content>
        </div>
        <div className="app-layout-bottom">
          <Layout.Footer className="app-layout-footer">
            <Footer />
          </Layout.Footer>
        </div>
      </Layout>
    </div>
  );
};

export default App;
