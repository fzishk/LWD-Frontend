import AppHeader from './components/common/header';
import Login from './components/auth/login.js';
import Register from './components/auth/register';
import "antd/dist/antd.css";

import { Layout } from 'antd';
const { Header } = Layout;



function App() {
  return (
    <Layout className="layout">
      <Header>
        <AppHeader />
      </Header>
      <Register />
      <Login />
    </Layout>
  );
}

export default App;
