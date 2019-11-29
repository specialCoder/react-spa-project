module.exports = {
    "extends": "eslint:recommended",// report common problem
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true 
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 2],// 两个字符缩进
        "quotes": ["error", "double"],// 双引号
        "semi": ["error", "always"], // 分号

        // disable rules from base configurations
        "no-console": "off",
    },
    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }
      }
}