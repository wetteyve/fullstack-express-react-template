import React, { useState } from 'react';
import { Menu } from 'antd';
import './navbar.scss';
import { menues } from './menues';

const Navbar = () => {
  const [current, setCurrent] = useState('startseite');

  const handleClick = (e: any) => {
    console.log(e);
    setCurrent(e.key);
  };

  const { SubMenu } = Menu;

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {menues.map((item) =>
        item.icon ? (
          <Menu.Item key={item.key} icon={<item.icon/>} />
        ) : item.subMenues ? (
          <SubMenu key={item.key} title={item.label}>
            {item.subMenues.map((subItem) => (
              <Menu.Item key={subItem.key} title={subItem.label}>{subItem.label}</Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key} title={item.label}>{item.label}</Menu.Item>
        )
      )}
    </Menu>
  );
};

export default Navbar;
