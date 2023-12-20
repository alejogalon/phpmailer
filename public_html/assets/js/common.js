$(function() {
  //ブレイクポイントでメニューを閉じる
  var mql = window.matchMedia('screen and (max-width: 767px)');
  mql.addListener(checkBreakPoint);
	checkBreakPoint(mql);

  function checkBreakPoint(mql) {
    if(mql.matches) {
      //SP処理
      $('.drop_down_wrap').css('display','none');
      $('.header .nav').css('display','none')
      $('.sp_trigger').removeClass('active');
      $('.header .arrow').removeClass('active');

      $('.header .arrow').off('click');
			$('.header .arrow').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
      })
    } else {
      //PC処理
      $('.drop_down_wrap').css('display','none');
      $('.header .nav').css('display','flex')
      $('.header .arrow').removeClass('active');

      $('.header .arrow').off('click');
			$('.header .arrow').on('click', function() {
        if ($(this).hasClass('active')) {
          $(this).toggleClass('active');
          $(this).next().slideToggle();
        } else {
          $('.header .arrow').removeClass('active');
          $(this).toggleClass('active');
          $('.drop_down_wrap').hide();
          $(this).next().slideToggle();
        }
      });
    }
  }

  $('.drop_down .close').on('click', function() {
    $('.header .arrow').removeClass('active');
    $('.drop_down_wrap').slideUp();
  })

  // spトリガー
  var flag = 0;
  $('.sp_trigger').on('click', function() {
    if(flag == 1) return false;
    flag = 1;

    $(this).toggleClass('active');
    $('html').toggleClass('fixed');

    // .labelのテキストを更新
    if($(this).hasClass('active')) {
      $(this).find('.label').text('close');
    } else {
      $(this).find('.label').text('menu');
    }

    $('.header .nav').slideToggle(300);

    setTimeout(function() {
      flag = 0;
    },300)
  })

  // focus trap for a11y
  // sp
  $("#js-focus-trap-sp").on("focus", function() {
    $(".sp_trigger.sp_display").focus();
  });

  // Products
  $("#js-focus-trap-products").on("focus", function() {
    $("#menu-products .close").focus();
  });

  // Explore
  $("#js-focus-trap-explore").on("focus", function() {
    $("#menu-explore .close").focus();
  });

})