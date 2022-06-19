import React from 'react';
import 'antd/dist/antd.css';
import "./App.css"
import { Layout } from 'antd';
import Login from './Components/Login'
const { Header, Content, Footer } = Layout;


const App = () => (
  
  
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0,
        }}
      />
      <Login/>
      <Content
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>

);

export default App;