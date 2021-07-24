# 项目说明

### 目录

```
{name}
|
├── src
│   ├── asstes                  - static files
│   ├── components              - common components
│   │   ├── App.jsx             - react application with router and store registration
│   │   └── App.less            - global style
│   ├── pages                   - page components
│   │   └── components          - child components for exact page
│   ├── env                     - environment variable
│   │   └── .env.developemnt    - environment variable of NODE_ENV:developemnt
│   │   └── .env.test           - environment variable of NODE_ENV:test
│   │   └── .env.production     - environment variable of NODE_ENV:production
│   ├── services                - common request logic
│   ├── utils                   - common utilities
│   ├── types                   - common types
│   ├── contexts                - implement store by Context API
│   ├── config                  - global config
│   └── index.js                - application entry
├── static                      - common static files
│   ├── html                    - html templates
│   ├── image                   - image files
│   └── favicon.ico
├── .editorconfig               - editor config
├── .eslintignore               - eslint ignore config
├── .eslintrc                   - eslint rules config
├── .gitignore                  - git ignore config
├── .babelrc                    - babel config
├── postcss.config.js           - postcss config
├── tsconfig.json               - typescript build config
├── webpack.common.js           - webpack common config
├── webpack.dev.js              - webpack development extra config
├── webpack.prod.js             - webpack production extra config
├── .npmrc                      - npm setting
├── package.json
├── README.md

```

### scripts

安装/更新依赖：

```
npm install
```

格式化代码：

```
npm run lint
```

编译静态资源：

```
npm run build
```

启动服务器：

```
npm run start
```

访问地址：

```
localhost:3000
```
