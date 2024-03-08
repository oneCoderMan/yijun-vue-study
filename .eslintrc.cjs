/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/promise-function-async': 'off',
    // 关闭驼峰命名规则
    'vue/multi-word-component-names': 0,
    // 关闭函数形参前的空格
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    // 没有子元素，自动使用闭合单标签
    'vue/html-self-closing': ['warn', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}
