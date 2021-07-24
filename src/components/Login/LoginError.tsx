/** 登陆error 页面 */
import React from 'react';
import { Layout } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './style.less';

const LoginError: React.FC = () => {
  return (<Layout className="login-error-wrapper">
    <div className="error-content">
      <SmileOutlined rotate={180} />
      <span className="text">登录失败，请稍后重试</span>
    </div>
  </Layout>);
};

export default LoginError;