/** 404 页面 */
import React from 'react';
import notAuth from '../../assets/403.svg';
import './style.less';

interface IProps {
  owner?: string;
}

const NotFound: React.FC<IProps> = (props: IProps) => {
  return (<div className="notAuth-wrapper">
    <img src={notAuth} width="500" />
    <p>暂无当前页面的访问权限，请联系<span>{props.owner || '管理员'}</span>开通</p>
    <p>**如果已开权限，请点击访问Tab再进入，刷新当前页面无效</p>
  </div>);
};

export default NotFound;