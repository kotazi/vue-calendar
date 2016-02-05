// Vuewを読み込む
var Vue = require('vue');

Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
});

Vue.filter('uppercase', function (value) {
  if (!value) {
    return '';
  }
  return value.toUpperCase();
});
