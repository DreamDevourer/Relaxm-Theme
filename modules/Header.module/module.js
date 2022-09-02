$(document).ready(function(){
 //https://code.jquery.com/jquery-2.2.4.min.js
/* hubspot menu js */
    $(".mainmenu").addClass("js-enabled");
    $(".mainmenu .hs-menu-flow-horizontal").before('<a class="mobile-trigger"><i></i></a>');
    $(".mainmenu .hs-item-has-children > a").after('<span class="child-triggerm"><span></span></span>');
    $("a.mobile-trigger").click(function() {
        $(this).next(".mainmenu .hs-menu-flow-horizontal").slideToggle(250);
        $("body").toggleClass("mobile-open");
        $("span.child-triggerm").removeClass("child-open");
        $(".hs-menu-children-wrapper").slideUp(250);
        return false
    });
    $(".mainmenu span.child-triggerm").click(function() {
        $(this).parent().siblings(".hs-item-has-children").find("span.child-triggerm").removeClass("child-open");
        $(this).parent().siblings(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").slideToggle(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find(".hs-menu-children-wrapper").slideUp(250);
        $(this).next(".hs-menu-children-wrapper").children(".hs-item-has-children").find("span.child-triggerm").removeClass("child-open");
        $(this).toggleClass("child-open");
        return false
    });
  
});

$(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
          $('body').addClass("sticky");
           }
        else{
           $('body').removeClass("sticky");
        }
});