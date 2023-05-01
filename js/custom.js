$(document).ready(function(){
  // sub_nav slide
  $('header nav ul li').mouseenter(function(){
    $('.sub_nav',this).stop().slideDown();
  });
  $('header nav ul li').mouseleave(function(){
    $('.sub_nav',this).stop().slideUp();
  });
  //trigger 클릭시 active class추가삭제
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('header nav ul').toggleClass('active');
  })
  //header search slide
  $('.search_icon').click(function(){
    $('.search').slideDown(200);
  })
  $('.search_close').click(function(){
    $('.search').slideUp(200);
  })
  //header login pop-up이 페이드인 아웃된다.
  $('.login_icon').click(function(){
    $('.login').fadeIn();
  })
  $('.login_close').click(function(){
    $('.login').fadeOut();
  })
  //header icon 중 cart 클릭시 해당 팝업이 나타난다.
  $('.cart_icon').click(function(){
    $('.cart').toggle();
  })
  //show slide 
  setInterval(function(){
    $('.slide_list').animate({marginRight:'+=250px'},2000,function(){
      $('.slide_list li:first').appendTo('.slide_list');
      $('.slide_list').css('marginRight','0')
    });
  });
  //letter input에 포커스 했을때 체크란이 나타난다.
  $('.letter input[type=email]').click(function(){
    $('.letter_check').show();
  });
});