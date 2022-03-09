module.exports = {
    printWidth: 120,  // 一行的最大字符数
    semi: true, // 是否使用分号
    singleQuote: true, // 是否使用单引号
    trailingComma: 'all', // 末尾逗号在可能的地方都加上逗号
    bracketSpacing: true, // 字面量对象括号中的空格开始和结束不需要
    arrowParens: 'always', // 箭头函数中的括号在需要的时候添加
    insertPragma: false, // 添加头注释 @format 表示已经被prettier格式化过
    tabWidth: 4, // tab宽度
    useTabs: true, // 使用tab缩进
    eslintIntegration: true,  // eslint 规则优先防止冲突
}