var Loadflag = false;
var flag = false;



if (window.matchMedia("(max-width:767px)").matches) {
  flag = false;
}



$('.tab-section .tab-list ul li').on('click',function(e){
  e.preventDefault();
  var index = $(this).index(),
      tab = $(this).parents('.tab'),
      tabList = tab.find('.tab-content-list');

  tabList.find('.tab-content').eq(index).fadeIn();
  tabList.find('.tab-content').not(':eq('+index+')').hide();

  $(this).addClass('active').siblings().removeClass('active');
});

$('.tab-section .title').on('click',function(){
  var tab = $(this).parent('.tab-content');
  tab.find('.inner').slideToggle(300);
  tab.siblings().find('.inner').slideUp(300);
  tab.toggleClass('active').siblings().removeClass('active');
  if(flag && Loadflag){
    setTimeout(function() {
      $("html, body").animate({
        scrollTop: tab.offset().top
      }, 500)
    }, 500)
  }
});

if(flag){
  $(".tab-section .tab-list").hide();
  $('.tab-section .title').eq(0).trigger('click');
}else{
  $('.tab-section .title').hide();
  $(".tab-section .tab-list ul li:nth-child(1)").trigger('click');
}
$(window).on('load',function(){
  Loadflag = true;
});