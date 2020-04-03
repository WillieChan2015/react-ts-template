import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout as ALayout, Menu, } from 'antd';

import './Layout.scss';

const { Header, Content } = ALayout;
const { Item: MenuItem } = Menu;

interface IProps {
}

const Layout: React.FC<IProps> = (props) => {
  const location = useLocation();
  const pathname = location.pathname.split('/').slice(0, 2).join('/');

  return (
    <ALayout className="t_layout">
      <Header>
        <Menu 
          theme="dark" 
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          <MenuItem key="/">
            <Link to="/">home</Link>
          </MenuItem>
          <MenuItem key="/about">
            <Link to="/about">about</Link>
          </MenuItem>
          <MenuItem key="/contact">
            <Link to="/contact">contact</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Notfound">Notfound</Link>
          </MenuItem>
        </Menu>
      </Header>
      <Content>
        { props.children }
      </Content>
    </ALayout>
  )
}

export default Layout;
