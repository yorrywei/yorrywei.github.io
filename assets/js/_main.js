/*! Plugin options and other jQuery stuff */

// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});

// FitVids options
$(function() {
  $("article").fitVids();
});

$(".close-menu").click(function () {
  $(".menu").toggleClass("disabled");
  $(".links").toggleClass("enabled");
});

$(".about").click(function () {
  $("#about").css('display','block');
});

$(".close-about").click(function () {
  $("#about").css('display','');
});

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// Magnific-Popup options
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: '加载图片#%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">图片#%curr%</a>加载失败.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

// header
$(document).ready(function(e) {
  $(window).scroll(function(){
    var header = $('.header-menu');
    var scroll = $(window).scrollTop();
    if(scroll > 300){
      header.attr('class', 'header-menu header-menu-overflow');
    } else {
      header.attr('class', 'header-menu header-menu-top');
    }
  });
});

//mobile menu
$(document).ready(function(){
  $("#menu").attr('style', '');
  $("#menu").mmenu({
    "extensions": [
      "border-full",
      "effect-zoom-menu",
      "effect-zoom-panels",
      "pageshadow",
      "theme-dark"
    ],
    "counters": true,
    "navbars": [
      {
        "position": "bottom",
        "content": [
          "<a class='fa fa-search' href='/search'></a>",
          "<a class='fa fa-envelope' href='mailto:i@yorry.cn'></a>",
          "<a class='fa fa-weibo' href='https://weibo.com/yorry' target='_blank'></a>"
        ]
      }
    ]
  });
});

// reset size
$(function(){
  var w = $('.entry-content').width()
  $.each($('.entry-content iframe, .my-video'), function (i, v) {
    var v_w = $(v).width()
    var v_h = $(v).height()
    if(v_w > w) {
      $(v).width(w).height(v_h * w / v_w)
    }
  })
})
