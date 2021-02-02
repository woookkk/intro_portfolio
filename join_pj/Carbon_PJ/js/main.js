///// 카본뷰티 메인 페이지 JS - main.js //////////
// 로딩구역 //
//DOMContentLoaded 이벤트 - html랜더링 시
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!!");

        // 부드러운 스크롤 함수 호출 !
        startSS();

        // 무빙레터 구현!!! ///////
        $(".stg1").html('<ul class="mtit1"></ul>');
        let mtxt1 = "Carbon Beauty";

        // 글자개수만큼 .mtit1의 크기를 설정해준다 !(글자가 안떨어지게함 !)
        $(".mtit1").css({
            width: (100 * mtxt1.length) + "px"
        }); /////////css ///////
        // for 문으로 글자만큼 li만들기 !!
        // for of문 - 배열, 요소컬렉션, 문자열데이터를 그 개수만큼 자동으로 돈다!
        // ex) c 따로 a따로 r따로 이런식으로 
        // for of 문의 지역변수는 그 데이터나 요소 그 자체임 !!
        for (var x of mtxt1) {
            if (x === " ") x = "&nbsp;"; // 공백문자 빈값에 넣기 
            $(".mtit1").append('<li>' + x + '</li>');

        } ///// for of문 ///////////////

        // 무빙레터 구현!!! ///////
        $(".stg2").html('<ul class="mtit2"></ul>');
        let mtxt2 = "Fall Picks";

        // 글자개수만큼 .mtit1의 크기를 설정해준다 !(글자가 안떨어지게함 !)
        $(".mtit2").css({
            width: (100 * mtxt2.length) + "px"
        }); /////////css ///////
        // for 문으로 글자만큼 li만들기 !!
        // for of문 - 배열, 요소컬렉션, 문자열데이터를 그 개수만큼 자동으로 돈다!
        // ex) c 따로 a따로 r따로 이런식으로 
        // for of 문의 지역변수는 그 데이터나 요소 그 자체임 !!
        for (var x of mtxt2) {
            if (x === " ") x = "&nbsp;"; // 공백문자 빈값에 넣기 
            $(".mtit2").append('<li>' + x + '</li>');

        } ///// for of문 ///////////////


        // 버튼 공통 마우스 오버/아웃시 class넣기/빼기
        // 대상선정: .cmbtn
        var bbn = document.querySelectorAll(".cmbtn");
        // 마우스 오버시 (.on넣고 .off빼기)
        // 요소의 수만큼 for문 셋팅하기
        // for of 문 (선택된 요소만큼 반복함!) - of 뒤에 쓴 변수!
        for (var x of bbn) { // x는 각 요소 자신!
            x.onmouseover = function () {
                /// this는 나 자신 (.banbtn)
                this.classList.add("on");
                this.classList.remove("off");
            }; /// mouseover /////////////
            // 마우스 아웃시 (.off넣고 .on빼기)
            x.onmouseout = function () {
                /// this는 나 자신 (.banbtn)
                this.classList.add("off");
                this.classList.remove("on");
            }; /// onmouseout /////////////
        } ////// for of 문 ///////////




        //////////////////////////////////////////////////////
        //////////////////////////// 패럴렉스 적용하기 /////////
        ///////////////// vanilla JS - rellax.js 순수 JS 개발코딩 //
        /// 깃허브 - https://github.com/dixonandmoe/rellax 
        /// 데모 - https://dixonandmoe.com/rellax/
        //////////////////////////////////////////////////////////

        /* 배너 버튼 */
        var rellax = new Rellax('.rellax', {
            speed: -2
            /*center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
            여기는 디폴트 옵션 !!
            */
        }); //// rellax /////////

        /* 상품박스 양쪽 */
        var rellax2 = new Rellax('.rellax2', {
            speed: 5
        });

        /* 상품박스 중앙 */
        var rellax3 = new Rellax('.rellax3', {
            speed: -2
        });

        ///////// 상품리스트 드래그 하기 ///////////////////
        /////////// 대상선정: .gdsec>ul
        $(".gdsec>ul").draggable({
            axis: "x" //x축 고정
        });

        //// 마우스버튼 클릭할때 이벤트 체크하여
        //// 리스트 슬라이드 이동하기 
        // 대상: .gdsec>ul
        // 이벤트 : mouseup (마우스 왼쪽버튼을 눌렀다가 땔때 발생)
        //        mouseleave (마우스가 영역을 벗어날때 발생)
        // on(이벤트명, 함수)
        // 이벤트명에 띄어쓰기로 여러이벤트를 사용할 수 있다 !

        // 상품리스트박스 크기(슬라이드 하나의 단위!)
        var gw = $(".gdsec").width();
        console.log("기본크기:" + gw);

        $(".gdsec").on("mouseup mouseleave", function () {
            // 1. 이벤트확인
            console.log("나야나~!!!");

            // 이동대상의 위치값
            //            offset()은 화면 기준 left값
            //            position()은 부모박스 기준 left값을 리턴함!
            var tgpos = $(".gdsec>ul").position().left;
            console.log("위치값:" + tgpos);

            // 2. 위치값 확인하여 이동하기 

            // 2페이지로 이동 //////////////////////
            if (
                (tgpos < -gw * 0.1 && tgpos > -gw * 0.5) ||
                (tgpos < -gw * 1.5 && tgpos > -gw * 1.9)
            ) {
                $(".gdsec>ul").animate({
                    left: "-100%"
                }, 800);
            } //////////// if /////////////

            // 3페이지로 이동 //////////////////////
            else if (
                tgpos < -gw * 1.1 && tgpos > -gw * 1.5
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 800);
            } //////////// else if /////////////

            // 1페이지로 이동 //////////////////////
            else if (
                tgpos < -gw * 0.5 && tgpos > -gw * 0.9
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 800);
            } //////////// if /////////////

            // 1페이지로 고정하기 //////////////////////
            else if (
                tgpos > 0
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 400);
            } //////////// if /////////////

            // 3페이지로 고정하기 //////////////////////
            else if (
                tgpos < -2 * gw
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 400);
            } //////////// if /////////////

            // 그 밖에 자기자리로 돌아오기 !! //////////
            else {
                // 단위크기로 나눈수를 양수로 만들고 반올림하여 
                // 결과적으로 0,1,2중 하나의 수만 나오게 함!!
                var num = Math.round(Math.abs(tgpos / gw));
                // Math.abs(양수/음수) -> 절대값 (양수로 나옴)
                // Math.floor(소수자리수) -> 소수점버림!
                // Math.round(소수자리수) -> 소수점반올림!
                console.log("나눈수:" + num);

                // 자기자리로 돌아가기 !!!!
                $(".gdsec>ul").animate({
                    left: (num * -100) + "%"
                    //num*-100 의 결과는 0, -100, -200 중 하나 !!
                }, 400);
            } ///////// else ////////////////


        }); /// 마우스이벤트 함수 //////////////

        // 위치값 셋팅
        tgpos[0] = $("#blog").offset().top;
        console.log("블로그영역위치 값:" + tgpos[0]);

        // 시작 기준값을 계산함 !! (원래위치값-윈도우절반)
        tgpos[0] = tgpos[0] - winH / 2

    }); //////////////////////////// 로드 구역 //////////////////////////////////
//////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////
///////////////// 스크롤 이벤트 구역 /////////////////

// 윈도우(보이는 화면) 높이값
var winH = $(window).height();
// 보이는 화면의 반 또는 어떤 비율만큼 위치값에서 뺀다 !

// 위치값 변수 (여러개의 위치를 담는 목적 )
var tgpos = [];

$(window).scroll(function () {

    // 현재 스크롤 위치값 
    var scTop = $(this).scrollTop();
    // console.log("스위:"+scTop);

    // 블로그 영역 스크롤액션!
    if (scTop > tgpos[0] &&
        scTop < tgpos[0] + 200) {
        console.log("움직여~!!");
        $(".bb2 .mtxt2").css({
            left: (320 - 50) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (-50) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (320 - 50) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (-50) + "px"
        });


    } //// if /////////////////
    else if (scTop > tgpos[0] + 200 &&
        scTop < tgpos[0] + 400) {
        console.log("움직여~!!");
        $(".bb2 .mtxt2").css({
            left: (320 - 100) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (-100) + "px"
        });
        $(".bb2 .mtxt1").css({
            right: (320 - 100) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (-100) + "px"
        });

    } //// else if ////////////////15
    else if (scTop > tgpos[0] + 400 &&
        scTop < tgpos[0] + 600) {
        console.log("움직여~!!");
        $(".bb2 .mtxt2").css({
            left: (320 - 150) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (-150) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (320 - 150) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (-150) + "px"
        });

    } //// else if /////////////////
    else if (scTop > tgpos[0] + 600 &&
        scTop < tgpos[0] + 800) {
        console.log("움직여~!!");
        $(".bb2 .mtxt2").css({
            left: (320 - 200) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (-200) + "px"
        });
        $(".bb2 .mtxt1").css({
            right: (320 - 200) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (-200) + "px"
        });

    } //// else if /////////////////
    else {
        $(".bb2 .mtxt2").css({
            left: (320) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (320) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0) + "px"
        });


    } //// else /////////////////
    
    // 무빙레터 //////////////////
    if (scTop<100){
        $(".mtit1").css({left:"30%"});
        $(".mtit2").css({left:"50%"});
    }/////////// if ////////////////////
    else if (scTop>100 && scTop < 200){
        $(".mtit1").css({left:"10%"});
        $(".mtit2").css({left:"20%"});
    }/////////// if ////////////////////
    else if (scTop>200 && scTop < 300){
        $(".mtit1").css({left:"-20%"});
        $(".mtit2").css({left:"-10%"});
    }/////////// if ////////////////////
    else if (scTop>300 && scTop < 400){
        $(".mtit1").css({left:"-50%"});
        $(".mtit2").css({left:"-30%"});
    }/////////// if ////////////////////
    else if (scTop>400 && scTop < 500){
        $(".mtit1").css({left:"-80%"});
        $(".mtit2").css({left:"-50%"});
    }/////////// if ////////////////////
    else if (scTop>500 && scTop < 600){
        $(".mtit1").css({left:"-120%"});
        $(".mtit2").css({left:"-100%"});
    }/////////// if ////////////////////
    
    

}); ////////// scroll ///////////////////
////////////////////////////////////////
