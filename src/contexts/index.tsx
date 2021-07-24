/**
 * Global store
 * uer info / permission etc
 */

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { requestUerInfoApi } from '../services';
import { ICurrent } from '../types';

const MyContext = createContext({});

interface IProps {
  children: ReactNode
}

const AppProvider: React.FC<IProps> = (props: IProps) => {
  const [current, setCurrent] = useState<ICurrent>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestUerInfo();
  }, []);

  const requestUerInfo = () => {
    setLoading(true);

    requestUerInfoApi().then((userInfo) => {
      setLoading(false);
      // ldapId: username
      const { ldapId } = userInfo || {};
      console.log(`success:${ldapId} login`);
      if (!ldapId) {
        // 跳转到登陆页
        window.location.href = `https://account.com/login?service=${window.location.href}`;
        return;
      }
      setCurrent(userInfo);
    }).catch(() => {
      setLoading(false);
      window.location.href = `https://account.com/login?service=${window.location.href}`;
    });
  }

  return (
    <MyContext.Provider
      value={{ ...current, userLoading: loading }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export {
  MyContext,
  AppProvider,
}