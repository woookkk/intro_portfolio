$(function () { //////// jQB //////////////



    /* 부드러운 화면전환 */

    function isElementUnderBottom(elem, triggerDiff) {
        const {
            top
        } = elem.getBoundingClientRect();
        const {
            innerHeight
        } = window;
        return top > innerHeight + (triggerDiff || 0);
    }

    function handleScroll() {
        const elems = document.querySelectorAll('.up_on_scroll');
        elems.forEach(elem => {
            if (isElementUnderBottom(elem, -20)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateY(70px)';
            } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateY(0px)';
            }
        })
    } //////////handlescroll

    window.addEventListener('scroll', handleScroll);

    /* 부드러운 배경색 전환 */

    $(window).scroll(function () {

        var $window = $(window),
            $body = $('body'),
            $bgc = $('.bgc');


        var scroll = $window.scrollTop() + ($window.height() / 3);

        $bgc.each(function () {
            var $this = $(this);


            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

                $body.removeClass(function (index, css) {
                    return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                });

                $body.addClass('color-' + $(this).data('color'));
            }
        });

    }).scroll(); //////////////////////// scroll /////////




    /* nav 박스 버튼 */
    $(".gnb_btn").click(function () {
        $(".gnb_box").fadeIn(400, function () {
            $(this).animate({
                width: "50vW"
            }, 400, "easeInExpo", function () {
                $(".gnb_list li, .close_btn").each(function (idx, ele) {
                    $(ele).delay(200 * idx).fadeTo(400, 1);

                }); ////// each //////////

            }); /// animate ///////
        }); //////////// fadeIn ////////
        $(this).hide();
    }); /////// click /////////

    $(".close_btn").click(function () {
        $(".gnb_list li, .close_btn").each(function (idx, ele) {
            $(ele).delay(200 * idx).fadeTo(400, 0);
        }); ////// each //////////
        $(".gnb_box").delay(1000).animate({
            width: "0"
        }, 400, "easeInExpo", function () {
            $(".gnb_box").fadeOut(400);
        }); //////// animate /////////
        $(".gnb_btn").show();
    }); /////////// click ////////

    /* 모바일 */
    if ($(window).width() < 550) {
        $(".gnb_btn").click(function () {
            $(".gnb_box").fadeIn(400, function () {
                $(this).animate({
                    width: "90vW"
                }, 400, "easeInExpo", function () {
                    $(".gnb_list li, .close_btn").each(function (idx, ele) {
                        $(ele).delay(200 * idx).fadeTo(400, 1);

                    }); ////// each //////////

                }); /// animate ///////
            }); //////////// fadeIn ////////
            $(this).hide();
        }); /////// click /////////

    } ///////// mob if /////////

    /* 스킬 마우스 커서 */

    $("#skills_page_wrap").mousemove(function (e) {

        var posx = e.pageX - 50;
        var posy = e.pageY - 50;
        // console.log("x축:"+posx+"\ny축:"+posy);

        // 마우스 포인터 위치에 따라 이미지커서 위치값 변경하기
        // 대상: #cursor
        $("#cursor").css({
            top: posy + "px",
            left: posx + "px",
            display: "block",
        }); ////// css /////////
        $("body, a").css({
            cursor: "none"
        }); ////// css /////////

    }); //////// mousemove ////////////

    $(".skills_list li").mouseenter(function () {


        var skillP = $(this).index();


        var iclass; // 경로 변수 

        switch (skillP) {
            case 1:
                iclass = "90%";
                break;
            case 2:
                iclass = "90%";
                break;
            case 4:
                iclass = "85%";
                break;
            case 6:
                iclass = "90%";
                break;
            case 9:
                iclass = "85%";
                break;
            case 11:
                iclass = "80%";
                break;
            case 13:
                iclass = "75%";
                break;
            case 14:
                iclass = "75%";
                break;
            default:
                iclass = "HOVER";
        } /////// switch case문 ////////////


        $(".cursorH").html(iclass).css({
            top: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "1.5rem",
            color: "#fff"
        }); //////// css //////

        $(".cursor").css({
            border: " 3px dashed #fff"
        }); ///// css //////


    }); /////////// mouseenter ///////////


    $(".skills_list li").mouseleave(function () {
        $(".cursorH").css({
            color: "#1D8883"
        }).text("HOVER"); //////// css //////
        $(".cursor").css({
            border: " 3px dashed #1D8883"
        }); ///// css //////

    }); ////////// mouseout ///////////

    $("#skills_page_wrap").mouseleave(function (e) {

        $("#cursor").css({
            display: "none"
        }); ////// css /////////
        $("body, a").css({
            cursor: "auto"
        }); ////// css /////////

    }); //////// mouseleave ////////////


    /* 공통 프젝 페럴렉스 */
    var rellax1 = new Rellax('.rellax1', {
        center: true,
        speed: -3
    });
    var rellax2 = new Rellax('.rellax2', {
        center: true,
        speed: 1
    });


    /* 스킬 a 태그 막기 */
    $(".skills_list li a").click(function (e) {
        e.preventDefault();
    });

    /* 컨텍 영역 타이패드 */

    var typed5 = new Typed('#typed5', {
        strings: ['<strong>열정.</strong>', '<strong>협동심.</strong>', '<strong>끈기.</strong>', '<strong>성실함.</strong>'],
        typeSpeed: 85,
        backSpeed: 0,
        cursorChar: "",
        shuffle: false,
        smartBackspace: false,
        loop: true
    });


    /* 이메일 복사 */
    new ClipboardJS('.copy_box');
    $(".copy_box").click(function () {
        alert("메일 주소가 복사 되었습니다 :)");
    }); //// click ///////////


    /* 모바일 부드러운 화면전환 - 위치 바꾸기  */
    let mob = 0;
    if ($(window).width() < 550) mob = 1;

    if (mob) {
        let tg = $(".about_info_text");
        let temp = tg.html();
        tg.remove();
        $(".blank ul li").html(temp)
            .addClass("about_info_text up_on_scroll")
            .css({
                color: "#fff"
            });
        $(".about_box").css({
            height: "100vh"
        });

    } //// if /////

    /* 공퉁 프젝 페럴렉스 빼기 */
    if ($(window).width() < 415) {
        rellax1.destroy();
        rellax2.destroy();
    } //// if ////


    /* 공통 pj 페이지 이동 */

    let link = [
                "join_pj/Carbon_PJ/index.html",
                "join_pj/hana/index.html",
                "join_pj/ator/index.html",
                "join_pj/Megabox/index.html",
                "join_pj/lowamom/index.html",
                "join_pj/indigo/index.html",
                "join_pj/suhang/00.intro.html",
                "join_pj/sansam/samsam.html"
            ];

    $(".project_joint_listBox > ul > li").each(function (idx, ele) {
        $(ele).click(function () {
            //console.log(idx+"번호");

            window.open().location.href = link[idx];


        }); //////// click ////////////
    }); ///////////// each ///////////////


    /* 탑 버튼 */

    $("#top_btn").click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 800); /////////// animate //////////////////

    }); ///////////////// click ////////////////////////////


}); ////////////// jQB /////////////////////////
