
// Vuewを読み込む
var Vue = require('vue');

// モデルを読み込む
var data = require("./../models/data.js");

new Vue({
  el: '#external-events',
  data: data,
  ready: function() {
    $('#external-events .fc-event').each(function() {
      $(this).data('event', {
        title: $.trim($(this).text()),
        stick: true
      });

      $(this).draggable({
        zIndex: 999,
        revert: true,
        revertDuration: 0
      });
    });
  }
});
