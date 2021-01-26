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
                iclass = "80%";
                break;
            case 11:
                iclass = "80%";
                break;
            case 13:
                iclass = "70%";
                break;
            case 14:
                iclass = "65%";
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
    var rellax1 = new Rellax('.rellax1', {
        center : true ,
        speed: -1
    });
    var rellax2 = new Rellax('.rellax2', {
        center : true ,
        speed: 3
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



}); ////////////// jQB /////////////////////////
