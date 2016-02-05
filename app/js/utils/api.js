
// Vuewを読み込む
var Vue = require('vue');

// vue-resourceを読み込む
Vue.use(require('vue-resource'));

module.exports = new Vue({
  methods: {
    // 与えたkeyとvalueをオブジェクトにして返す
    echo: function (key, value) {
      return this.$http({url: 'http://echo.jsontest.com/' + key + '/' + value, method: 'GET'})
        .then(function(response) {
          if (!response.data) {
            return false;
          }
          return response.data
        });
    }
  }
});
