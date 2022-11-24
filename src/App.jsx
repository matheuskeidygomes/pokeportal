import React from 'react';
import Routers from './routes/routers';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/header';
import Content from './components/layout/content';
import Footer from './components/layout/footer';

export default function App() {
  return <>
    <BrowserRouter>
      <Header />
      <Content>
        <Routers />
      </Content>
      <Footer />
    </BrowserRouter>
  </>
}

