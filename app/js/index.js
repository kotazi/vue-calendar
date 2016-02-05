
// Vuewを読み込む
var Vue = require('vue');

// CSSを読み込む
require("./../css/style.css");

$(document).ready(function() {

  // フィルタを読み込む
  require('./filters/filters.js');

  // コンポーネントを登録する
  var CuHeaderComponent = require('./components/cu-header.js');
  Vue.component('cu-header', CuHeaderComponent);

  // 各種VMを読み込む
  require('./viewmodels/app.js');
  require('./viewmodels/external-events.js');
  require('./viewmodels/calendar.js');
  require('./viewmodels/life-cycle.js');
});
