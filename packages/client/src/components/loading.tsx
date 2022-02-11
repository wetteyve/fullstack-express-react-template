import { Spin } from 'antd';
import React from 'react';

const Loading = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};

export default Loading;