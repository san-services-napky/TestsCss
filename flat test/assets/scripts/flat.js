var value = 1;
var badge = document.getElementById('test');
badge.textContent = value;

$("#test").on("click", function(){

    var content = $(this).text();
    content++;
    $(this).text(content);
    console.log(content);
});
