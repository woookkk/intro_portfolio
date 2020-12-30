$(function () { //////// jQB //////////////

    /* nav 박스 버튼 */
    $(".gnb_btn").click(function () {
        $(".gnb_box").fadeIn(200);
        $(this).hide();
    }); ///////// click /////////////
    $(".close_btn").click(function () {
        $(".gnb_box").fadeOut(200);
        $(".gnb_btn").show();
    }); //////////// click ///////////////

    /* 공통 프젝 페럴렉스 */
    /*var rellax1 = new Rellax('.rellax1', {
        speed: 2
    });
    var rellax2 = new Rellax('.rellax2', {
        speed: -1
    });
*/

    /* 컨텍 영역 타이패드 */
    
   var typed5 = new Typed('#typed5', {
    strings: ['<i>strings</i>', '<strong>HTML</strong>', '3 Chars &times; &copy;'],
    typeSpeed: 3,
    backSpeed: 2,
    cursorChar: '_',
    shuffle: true,
    smartBackspace: false,
    loop: true
  });
    
}); ////////////// jQB /////////////////////////
