$(document).ready(function(){
  //site_map header
    $('.menu').click(function(){
      $('.site_map,.logo,.lang,.menu').toggleClass('on');
      $('.map_navi ul li').addClass('on');
    });
  //product td click onclass 추가삭제
  $('table tr td').click(function(){
    $('table tr td').removeClass('on');
    $(this).addClass('on');
  });
  //product a onclass 추가삭제
  $('.pagenation a').click(function(){
    $('.pagenation a').removeClass('on');
    $(this).addClass('on');
  });
  // product_new tab
  $('.new_btn .news').click(function(){
    
    $('.new_btn a').removeClass('on');
    $('.new_detail').hide();
    $('.new_news').show();
    $(this).addClass('on');
  });
  $('.new_btn .detail').click(function(){
    
    $('.new_btn a').removeClass('on');
    $('.new_news').hide();
    $('.new_detail').show();
    $(this).addClass('on');
  });
});