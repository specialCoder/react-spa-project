export interface IRoute{
  regExp?:string;// 用来根据URL高亮Tab，没有时默认取path
  path: string;// URL路径,用来处理点击跳转
  title: string;// 导航显示的名称
  children?:IConf;// 子菜单
  isShowInRoute?: boolean; // 收是否显示在导航中
}
interface IConf{
  [index:string]: IRoute
}

export const DEFAULT_ROUTE = { // ‘/’默认进入的页面
  path:'/home/list',
  title:'首页',
};

// 配置路由信息
const routerConfig:IConf = {
  certificate:{
    path:'/home/list',
    title:'首页',
    children:{
      admin:{
        // regExp:'',
        path:'/home/list',
        title:'列表',
      },
      republish:{
        path:'/home/detail',
        title:'详情',
        isShowInRoute:false,
      }
    }
  }
};

export default routerConfig;