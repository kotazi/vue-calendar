require("./../css/style.css");


$(document).ready(function() {

  var CuHeaderComponent = Vue.extend({
    template: '<h1>Hello, Calendar!!</h1>'
  });

  Vue.component('cu-header', CuHeaderComponent);

  var appVM = new Vue({
    el: '#app'
  });

  var externalEventsVM = new Vue({
    el: '#external-events',
    data: {
      items: 6
    },
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
