/** 登陆loading 页面 */
import React from 'react';
import { Spin } from 'antd';
import './style.less';

const LoginLoading = () => {
  return (<Spin
    wrapperClassName="login-loading-wrapper"
    tip="登录中，请稍等..."
  >
    <p></p>
  </Spin>);
};

export default LoginLoading;