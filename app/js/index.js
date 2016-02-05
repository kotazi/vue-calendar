
var Vue = require('vue');
Vue.use(require('vue-resource'));
var data = require("./models/data.js");

require("./../css/style.css");


$(document).ready(function() {

  var CuHeaderComponent = Vue.extend({
    template: '<h1>Hello, Calendar!!<br>{{message}}</h1>',
    data: {
      message: 'hoge'
    },
    ready: function() {
      this.$http({url: 'http://echo.jsontest.com/key/the-text-got-by-json', method: 'GET'}).then(function (response) {
          // success callback
          if (!response.data) {
            return false;
          }
          this.$set('message', response.data.key)
      }, function (response) {
          // error callback
      });
    }
  });

  Vue.component('cu-header', CuHeaderComponent);

  var appVM = new Vue({
    el: '#app'
  });

  var externalEventsVM = new Vue({
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

  var calendarVM = new Vue({
    el: '#calendar',
    methods: {
      initCalendar: function() {
        $(this.$el).fullCalendar({
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
          },
          editable: true,
          droppable: true,
          drop: function() {
            if ($('#drop-remove').is(':checked')) {
              $(this).remove();
            }
          }
        });
      }
    },
    ready: function() {
      this.initCalendar()
    }
  });

});
