$(document).ready(function(){
  //버튼 클릭시  아이디 입력칸이 빈칸이면 경고 메세지가 뜬다.
  $('#btn_form').click(function(){
    if(document.getElementById("name").value==""){
      $('#name').css({"border-bottom":"1px solid red"})
      $('.error_name').text('아이디를 입력해주세요.');
      return false;}
    });
  });