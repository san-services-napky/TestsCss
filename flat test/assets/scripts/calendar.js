var i = 1
var init = 14;
var limit = 31;
var first_selectable_day = 25;
var last_selectable_day = first_selectable_day+5;
var normalized_iteration;
$(document).ready(function(){

    var table_data = $("tr > td");

    table_data.each(function(){

      normalized_iteration = i-(init-1);
      if(i <= 7)
        $(this).css("color","#4fc4f6");
      else if(i > 7 && i < init)
        $(this).html(" ");
      else if(i >= init && normalized_iteration < (limit)){
        $(this).html(i - (init - 1));
        $(this).css("color","#9099b7");

        if( normalized_iteration >= first_selectable_day
            && normalized_iteration <= last_selectable_day){
              $(this).css("color","white");
              $(this).attr("class","selectable-date")
        }
      }
      else if(i - (init - 1) >= limit){
        $(this).html(" ");
      }
        i++
    });

});
