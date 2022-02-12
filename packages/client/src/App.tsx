import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const Navbar = React.lazy(() => import('./components/navbar/navbar'));
  const Footer = React.lazy(() => import('./components/footer/footer'));
  const HomeContainer = React.lazy(() => import('./components/home/home-container'));

  return (
    <BrowserRouter>
      <div className="app">
        <Layout className="app-layout">
          <div className="app-layout-top">
            <Layout.Header>
              <Navbar />
            </Layout.Header>
            <Layout.Content>
              <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='/spielbetrieb' element={<HomeContainer />} />
              </Routes>
            </Layout.Content>
          </div>
          <div className="app-layout-bottom">
            <Layout.Footer className="app-layout-footer">
              <Footer />
            </Layout.Footer>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
