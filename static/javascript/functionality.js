var myTimeOut;

$(".progressBar").hide();
$(".progressContainer").hide();

$(window).ready(function(){
$(window).scroll(function(){
  var wintop = $(window).scrollTop(),
  docheight = $(document).height(),
  winheight = $(window).height();

  var totalScroll = (wintop/(docheight - winheight)) * 100;
  $(".progressBar").css("height", totalScroll + "%")

  if(totalScroll != 0){
  $(".progressBar").show();
  $(".progressContainer").show();
  clearTimeout(myTimeOut);
  myTimeOut = setTimeout(function(){
  $(".progressBar").css("height", "0%");
  $(window).scrollTop(0);
  $(".progressBar").hide();
  $(".progressContainer").hide();
  }, 500);
  }
});

});

function detectMouseWheelDirection(e){

    var delta = null,
        direction = false;

    if (!e){
        e = window.event;
    }
    if(e.wheelDelta){

    }

}