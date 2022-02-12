import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
  const customSpinner = <LoadingOutlined style={{ fontSize: 64, color: "white" }} spin />;

  return (
    <div className="loader-container">
      <Spin indicator={customSpinner} />
    </div>
  );
};

export default Loading;