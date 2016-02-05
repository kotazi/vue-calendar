
// Vuewを読み込む
var Vue = require('vue');

var API = require('./../utils/api.js');

module.exports = Vue.extend({
  template: '<h1>Hello, Calendar!!<br>{{message}}</h1>',
  data: {
    message: ''
  },
  ready: function() {
    var self = this;
    API.echo('key', 'the-text-got-by-json').then(function (data) {
      self.$set('message', data.key)
    });
  }
});
