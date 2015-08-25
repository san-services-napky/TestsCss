
var sections;
var ajaxRequest;
var $mmDropDownOne    = $('.nav-list-item-2');
var $mmItems          = $('.nav-list-item-2');
var $mmSubItems       = $('.nav-list-subitem');
var $mmDropDown       = $('.sub-menu-wrapper');
var menuIndex;
var subMenuIndex;
$(document).ready(function () {


  // all actions here

  // Hover over the main menu items
  $mmItems.each(function (index) {
    var thisMMItem = $(this);

    thisMMItem.hover(function (event) {
      // MOUSE OVER
      console.log('mouse has entered on item: '+index);

      menuIndex=index;
      if(sections == null)
        sendAjaxRequest().then(function (response) {
          setSectionImage(index,-1);
            // append actions here
        }, function (error) {

        });

    showMenuSelected(index + 1);
    setSectionImage(index,-1);
    $mmDropDown.stop(1,1).fadeIn(300, function () {


      });
    },function (event) {
      // MOUSE OUT
      console.log('mouse has exited on item: '+index);


        $mmDropDown.stop(1,1).fadeOut (100);

    });
  });

  // hover over the main menu dropdown
  $mmDropDown.hover(function () {
    // MOUSE OVER
    $(this).stop(1,1);
    $(this).css({'display':'block'});
  }, function () {
    // MOUSE OUT
    $(this).stop(1,1).fadeOut(250, function () {

    });
  })
// Hover over a subitem

  $mmSubItems.each(function(i){

      $(this).hover(function(){
        subMenuIndex = i;
        console.log("subMenuIndex index is : " + i + " " + $(this).html());
        console.log("Menu index : " + menuIndex);
        setSectionImage(menuIndex,subMenuIndex);

      }, function(){
        console.log("Mouse went out of a subitem");
        subMenuIndex =-1;
      });
  });

  console.log('ready');
});


function setSectionImage(index, subIndex){
  var imageUrl = " ";
  var imageContainerSelector = "#image-container-";
  var containerIndex = index + 1;
  imageContainerSelector += containerIndex;
  if(sections != null)
    if(subIndex > -1){
      switch(index) {
            case 1:
                subIndex -= 12;
                break;
            case 2:
                subIndex -= 12;
                break;
            case 3:
                subIndex -= 12;
                break;
            case 4:
                subIndex -= 11
                break;
      }
      imageUrl = sections[index].items[subIndex].img;
    }
    else {
          imageUrl = sections[index].img
      }

  console.log("image url : " + imageUrl);
  $(imageContainerSelector).fadeOut(200, function(){
    $(this).css("background-image",imageUrl)
  }).fadeIn(200);
  console.log("Container Selector : " + imageContainerSelector);
}

function sendAjaxRequest(){

    var dfd = $.Deferred();

    var ajaxRequest = $.getJSON( "https://api.myjson.com/bins/4wzye" )
      .done(function(result) {
        console.log("Json request ");
          sections = result.Sections;
          dfd.resolve(sections);
      })
      .fail(function() {
        dfd.reject();
      })
      .always(function() {

      });

      return dfd.promise();
}

function showMenuSelected(index){
  var i;
  for(i =1; i <=5;i++){
     var SubMenuSelector = "#sub-menu-" +i;
     var $subMenu = $(SubMenuSelector);

     if(i == index)
        $subMenu.fadeIn(50);
    else
       $subMenu.fadeOut(50);
  }
}
