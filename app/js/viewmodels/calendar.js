
// Vuewを読み込む
var Vue = require('vue');

new Vue({
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
