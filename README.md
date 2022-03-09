# 前端编码规范(React TS)

## eslint配置(.eslintrc.js)

```javascript
module.exports = {
    "extends": [require.resolve('iresearch-standard')],
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {}
}

```

## prettier配置(.prettierrc.js)

```javascript
const prettier = require('iresearch-standard/prettier')

module.exports = {
    ...prettier
}
```
