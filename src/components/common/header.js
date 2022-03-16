import React from 'react';
import { Row, Col, Menu } from 'antd';



const AppHeader = () => {
    return (
        <Row>
            <Col span={8}>
                <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
                    <Menu.Item key="Home">Home</Menu.Item>
                    <Menu.Item key="Shop">Shop</Menu.Item>
                    <Menu.Item key="Categories">Categories</Menu.Item>
                    <Menu.Item key="Aboutus">About us</Menu.Item>
                    <Menu.Item key="Contactus">Contact us</Menu.Item>
                </Menu>
            </Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
        </Row>
    );

}


export default AppHeader;