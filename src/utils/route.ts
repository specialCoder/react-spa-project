import routerConfig, { DEFAULT_ROUTE } from '../config/router.config'

export const getDefaultPath = () => {
  return (DEFAULT_ROUTE || {}).path;
}

// 查找路由配置里面的key：支持二级菜单
export const getRouteKey = (pathname: string) => {
  return Object.keys(routerConfig).find((parentKey) => {
    const { children, regExp, path } = routerConfig[parentKey];
    if (children) {
      // 存在二级目录
      return Object.keys(children).find((childKey) => {
        const { regExp, path } = children[childKey];
        return new RegExp(regExp || path, 'i').test(pathname);
      });
    } else {
      // 只有一级目录
      return new RegExp(regExp || path, 'i').test(pathname);
    }
  });
}

// 查找路由信息
export const getRouteInfo = (pathname: string) => {
  const result = [];
  const key = Object.keys(routerConfig).find((parentKey) => {
    const { children, regExp, path } = routerConfig[parentKey];
    if (children) {
      // 存在二级目录
      const selectedKey = Object.keys(children).find((childKey) => {
        const { regExp, path } = children[childKey];
        return new RegExp(regExp || path, 'i').test(pathname);
      });
      if (selectedKey) {
        result.push(children[selectedKey].path);
      }
      return selectedKey;
    } else {
      // 只有一级目录
      return new RegExp(regExp || path, 'i').test(pathname);
    }
  });

  if (key) {
    result.push(routerConfig[key].path);
  }

  return result;
}