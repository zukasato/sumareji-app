//カレンダーdatetimepicker

document.addEventListener('DOMContentLoaded', function() {

    flatpickr.l10ns.ja.firstDayOfWeek = 0;  
    flatpickr('#datetimepicker1', {
       wrap : true,
       dateFormat : 'Y/m/d',
       locale : 'ja',
       clickOpens : true,
       allowInput : true,
       monthSelectorType : 'static'
     });
   });