/** 404 页面 */
import React from 'react';
import notFound from '../../assets/404.svg';
import './style.less';

const NotFound = () => {
  return (<div className="notAuth-wrapper">
    <img src={notFound} width="500" />
  </div>);
};

export default NotFound;