module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 83,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // 如果我们的地址中有[process.env.VUE_APP_BASE_URL]，就触发代理机制
      [process.env.VUE_APP_BASE_URL]: {
        target: `http://vue.ruoyi.vip`,
        // 是否跨域，需要设置此值为true，才可以让本地服务代理我们发出请求
        changeOrigin: true,
      }
    },
  },
}