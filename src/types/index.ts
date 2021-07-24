export type Operations = 'READ' | 'DELETE' | 'UPDATE' | 'CREATE';
export type Privilege = {
  operations: Operations[];
  resource: string; //资源Key
}

export type Privileges = {
  [index:string] : Privilege[];
}

export interface ICurrent{
  ldapId?: string; //用户名
  privileges?:Privileges;
}

export interface GlobalContextType extends ICurrent{
  userLoading:boolean
}

export type DictionaryString<T> = {
  [index:string]:T
}

export type DictionaryNumber<T> = {
  [index:number]:T
}