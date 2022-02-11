import React from 'react';
import { Col, Row } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="footer py-md-4 py-0">
      <Row className="container py-5" align="top">
        <Col xs={24} md={6}>
          <Row justify="start" className="pt-2">
            {"Über uns"}
          </Row>
          <Row justify="start" className="pt-2">
            {"Impressum"}
          </Row>
        </Col>
        <Col xs={24} md={10}>
        </Col>
        <Col xs={24} md={8} style={{ marginTop: 'auto' }}>
          <Row justify="end" className="pt-5 pt-md-2">
          <InstagramOutlined style={{fontSize: "48px"}} />
          <FacebookOutlined style={{fontSize: "48px"}} />
          </Row>
          <Row justify="end" className="pt-2 white">
            <h5 className="white">{"Copyright UHT Herisau | 2022"}</h5>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
