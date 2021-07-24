import permissionConfig, { IPermissionConf } from '../config/permisson';
import { GlobalContextType, Privileges, Operations } from '../types';

// 权限的operation,默认是conan下的
export const getPrivilegeOperations = (privileges: Privileges, resource:string, productArg?:string):Operations[] => {
  const production = productArg || 'conan';
  const privilege =  (privileges[production] || []).find((item) => {
    return item.resource === resource;
  }) || { operations: [], resource:''}

  return privilege.operations || [];
}

// 检查当前用户是否具有权限
export const checkAuth = (privileges:Privileges, sourceKey:string, namespace?:string):boolean => {
  if(!sourceKey){
    return true;
  }
  const operations = getPrivilegeOperations(privileges,sourceKey,namespace);
  return operations.length > 0;
}

// 检查传入的pathname下用户的权限
export const getPageAuth = (pathname:string, context:GlobalContextType):boolean => {
  // 页面访问权限校验
  const authInfo = permissionConfig.find(({ regExp}) => {
    const regular = new RegExp(regExp, 'i');
    return regular.test(pathname);
  }) || { resource: { key: '', owner:'', namespace:''}};
  const resource = authInfo.resource || { key: '', namespace:''};
  return checkAuth(context.privileges || {},resource.key, resource.namespace);
}

// 获取pathname下匹配的权限信息
export const getAuthInfo = (pathname:string):IPermissionConf => {
  return permissionConfig.find(({ regExp}) => {
    const regular = new RegExp(regExp, 'i');
    return regular.test(pathname);
  }) || { resource: { key: '', owner:''}, regExp:''};
}