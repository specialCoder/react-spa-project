import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { MyContext } from './contexts/index';
import { GlobalContextType } from './types';
import { getDefaultPath, getRouteKey } from './utils/route';
import { getPageAuth, getAuthInfo } from './utils/permission';
import LoginLoading from './components/Login/LoginLoading'
import LoginError from './components/Login/LoginError';
import NotAuthorized from './components/NotAuthorized';
import NotFound from './components/NotFound';
import AppHeader from './components/Header';
import Home from './pages/Home';
import HomeDetail from './pages/HomeDetail';
import './App.less';

console.log('接口地址', process.env)

const App = () => {
  const context = (useContext(MyContext) || {}) as GlobalContextType;

  // 页面访问资源&权限 处理逻辑【通用】
  const render = (RouteCompoment: React.ReactNode): React.ReactNode => {
    const { userLoading, ldapId } = context;
    if (userLoading) {
      // 登录中
      return <LoginLoading />;
    }
    if (ldapId) {
      // 登录成功
      return (
        <Switch>
          <Route
            path='/'
            render={(routeInfo) => {
              const { location } = routeInfo;
              const { pathname } = location;

              /** 
               * 设置默认进入的页面
               * 带来一个问题： 重定向之后还要处理高亮
               */
              if (pathname === '/') {
                const defaultPath: string = getDefaultPath() || '';
                return (
                  <Route exact path="/">
                    {/** 默认进入的页面 **/}
                    <Redirect to={defaultPath} />
                  </Route>)
              }

              // 页面资源是否存在判定
              const routeKey = getRouteKey(pathname);
              if (!routeKey) {
                return <NotFound />
              }

              // 页面访问权限校验
              const auth = getPageAuth(pathname, context);
              const resource = getAuthInfo(pathname).resource || { owner: '' };
              if (auth) {
                // 没有配置resource.key 或者 有权限访问
                return RouteCompoment;
              } else {
                return <NotAuthorized owner={resource.owner} />;
              }
            }}
          />
        </Switch>)
    } else {
      // 登录失败
      return <LoginError />;
    }
  }

  // 页面路由配置，开发者在这里配置页面路由
  const RouteCompoment = (<Switch>
    {/** 首页 */}
    <Route path='/home'>
      <Switch>
        {/** 详情*/}
        <Route exact path="/home/detail/:id"><HomeDetail /></Route>
        {/** 列表 */}
        <Route><Home /></Route>
      </Switch>
    </Route>
  </Switch>);

  return (
    <ConfigProvider locale={zh_CN}>
      <Router basename="" >
        <AppHeader />
        {render(RouteCompoment)}
      </Router>
    </ConfigProvider>
  );
}

export default App;
