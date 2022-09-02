(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    nav.classList.toggle('open');
    navToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener('click', toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }
    }
  });
})();




$(document).ready(function(){
  
  var Loadflag = false;
  var flag = false;

  if (window.matchMedia("(max-width:767px)").matches) {
    flag = true;
  }



  $('.tab-section .tab-list ul li').on('click',function(e){
    e.preventDefault();
    var pIndex = $(this).parents('.tab_left_single').index(), 
        index = $(this).index(),
        tab = $(this).parents('.tab_left').next('.tab-content-group').find('.tab-content-group-single').eq(pIndex),
        tabList = tab.find('.tab-content-list');
    
    $(this).parents('.tab_left').next('.tab-content-group').find('.tab-content-group-single').not(':eq('+pIndex+')').find('.tab-content').hide();
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
//     $('.tab-section .title').eq(0).trigger('click');
  }else{
    $('.tab-section .title').hide();
//     $(".tab-section .tab-list ul li:nth-child(1)").trigger('click');
  }
  $(window).on('load',function(){
    Loadflag = true;
  });
  
  
  if (window.matchMedia("(min-width:992px)").matches) {
    $(".accordion-title").on("click", function() {
      $(this).toggleClass("active");
      $(this).next(".accordion-text").slideToggle(250);
      $(".accordion-title").not($(this)).removeClass("active");
      $(".accordion-text").not($(this).next()).slideUp(250);
       $(this).next(".accordion-text").find('li').eq(0).trigger('click');
    }).filter(':first').click();
  }

  if (window.matchMedia("(max-width:991px)").matches) {
    $(".accordion-title").on("click", function() {
      var b = $(this);
      $(this).toggleClass("active");
      $(this).next(".accordion-text").slideToggle(250);
      $(".accordion-title").not($(this)).removeClass("active");
      $(".accordion-text").not($(this).next()).slideUp(250);
      setTimeout(function() {
        $("html, body").animate({
          scrollTop: b.offset().top //- $(".header").outerHeight()
        }, 500)
      }, 300)
    });
  }
})