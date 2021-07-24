// import { getData } from '../utils/request';

import { ICurrent } from '../types';

export const   requestUerInfoApi = () => {
  const res:ICurrent = {
    ldapId:'user', //用户名
    privileges:{
      sys1:[{
        operations:['READ'],
        resource:'TEST'
      }]
    }
  };

  // return getData(url);
  return Promise.resolve(res);
};