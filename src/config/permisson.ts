export interface IPermissionConf {
  regExp: string,
  resource?: {
    key: string; //资源权限key
    namespace?: string; // 权限空间，可选。默认是conan
    owner?: string; //资源负责人联系方式
  }
}


// 权限配置：根据访问URL从上到下开始匹配
const permissionConfig: IPermissionConf[] = [
  {
    regExp: '/certificate-republish',
    resource: {
      key: 'MISSION_DELETE',
      owner: 'owner'
    }
  }
];

export default permissionConfig;