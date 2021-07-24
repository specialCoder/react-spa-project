import { Privileges, Operations } from '../types';

// 斑马英语(conan)下的权限
export const getPrivilegeOperations = (privileges: Privileges, resource:string, productArg?:string):Operations[] => {
  const production = productArg || 'conan';
  const privilege =  (privileges[production] || []).find((item) => {
    return item.resource === resource;
  }) || { operations: [], resource:''}

  return privilege.operations || [];
}