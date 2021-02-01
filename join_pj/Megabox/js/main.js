/// 메가박스 메인 페이지 JS - main.js ///

///// 로드구역 ///////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!");


        /// 1. 영화페이지 포스터 이동구현 //////////

        ///// 구현내용: 이동버튼 클릭시 이미지 이동하기 ///
        // 이벤트종류: click
        // 이벤트대상: .abtn
        // 변경대상: .gbox, .gbox img
        var abtn = document.querySelectorAll(".abtn");
        var gbox = document.querySelector(".gbox");

        /*////////////////////////////////////////
            함수명: chgImg
            기능: 이미지의 순서를 변경하여 이동함
        */ ////////////////////////////////////////
        var cprot = 0; //광클금지변수(0-허용,1-불허용)
        var chgImg = function (dir) { // dir(0-왼쪽,1-오른쪽)
            //console.log("이동:"+dir);

            ///// 광클금지설정 ///////////////////
            if (cprot === 1) return false;
            // return false 아무것도 하지말고 돌아가!
            cprot = 1; //잠금
            setTimeout(function () {
                cprot = 0; //해제
            }, 400); //// 타임아웃 //////
            //////////////////////////////////////

            // 1. 매번 변경된 새로운 이미지 컬렉션을 읽어옴!
            var glist = document
                .querySelectorAll(".gbox img");

            // 왼쪽 오른쪽 이동 분기
            if (dir === 1) { /// 오른쪽버튼

                // 2. 갤러리박스의 맨앞요소를 맨뒤로 이동하기
                // appendChild(이동요소)
                // - 선택된 이동요소를 맨뒤로 이동함
                gbox.appendChild(glist[0]);

            } //// if문 ////////////////////////
            else if (dir === 0) { /// 왼쪽버튼

                // 2. 갤러리박스의 맨뒤요소를 맨앞으로 이동하기
                // insertBefore(넣을놈,넣을놈전놈)
                // insertBefore(맨뒤요소,맨앞요소)
                // 맨뒤요소 = 전체리스트개수 - 1
                gbox.insertBefore(
                    glist[glist.length - 1],
                    glist[0]
                ); // insertBefore //////

            } //// else if문 ////////////////

        } ///////////// chgImg 함수 //////////////
        //////////////////////////////////////////
        //////////////////////////////////////////

        /*////////////////////////////////////////
            함수명: autoCall
            기능: 자동넘김호출설정
        */ ////////////////////////////////////////
        var autoI; //인터발용함수
        var autoCall = function () {
            autoI = setInterval(function () {
                chgImg(1);
            }, 3000); //// 인터발함수 ////////

        } ///////////// autoCall 함수 //////////////
        //////////////////////////////////////////
        //////////////////////////////////////////

        //// 자동넘김 최초호출! ///
        //autoCall();

        /*////////////////////////////////////////
            함수명: clearAuto
            기능: 인터발함수를 지우고, 다시자동호출
        */ ////////////////////////////////////////
        var autoT; //타임아웃용변수
        var clearAuto = function () {
            // 인터발,타임아웃 모두 지우기
            clearInterval(autoI);
            clearTimeout(autoT); //쓰나미방지!
            // 타임아웃으로 자동호출셋팅!
            autoT = setTimeout(autoCall, 3000);
        } ///////////// clearAuto 함수 //////////////
        //////////////////////////////////////////
        //////////////////////////////////////////



        /// 왼쪽버튼 클릭시 //////////
        abtn[0].onclick = function () {
            //console.log("왼쪽!");
            // 이동함수호출
            chgImg(0); // 0은 왼쪽
            // 자동지우기호출
            //clearAuto();

        }; /////// click함수 /////////////

        /// 오른쪽버튼 클릭시 //////////
        abtn[1].onclick = function () {
            //console.log("오른쪽!");                    
            // 이동함수호출
            chgImg(1); // 1은 오른쪽
            // 자동지우기호출
            //clearAuto();

        }; /////// click함수 /////////////

    }); //////////// 로드구역 //////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////



$(function () { // jQB /////////////////

    //// 1. 영화 포스터 클릭시 영화 예고편 보여주기 ///
    // 대상선정: .gbox img
    $(".gbox img").click(function () {

        // 이동버튼 영화상영기능 셋팅을 위한변수셋팅
        ptsts = 1; //포스터 하단모드

        // 0. 클릭된 포스터의 순번을 알아내어 자리를 중앙으로 이동하기
        // - 순번이 1번째면 왼쪽이동버튼 클릭효과
        // - 순번이 3번째면 오른쪽이동버튼 클릭효과
        // 동시에 구현된 버튼 클릭효과를 주려면 trigger() 메서드를 사용!
        // 보이지 않는 포스터 0번,4번은 클릭되어도 작동못하게 막기!

        // 포스터순번
        var pseq = $(this).index();
        //console.log("포순:"+pseq);
        if (pseq === 1) $(".lb").trigger("click");
        else if (pseq === 3) $(".rb").trigger("click");
        else if (pseq === 0 || pseq === 4) return false; //(0,4번) 돌아가!


        // 1. 영화포스터 네비 작아지게 하단이동 애니메이션
        // 방법: transition: scale을 사용함
        // css변경으로 애니메이션하기위해 transition 이용함!
        $(".gbox").css({
            top: "80%",
            transform: "translate(-50%,-50%) scale(.4)",
            transition: "all .6s ease-in-out"
        }); ///// css /////////

        // 이동버튼도 축소이동 애니메이션
        // 대상: .abtn
        $(".abtn").css({
            top: "80%",
            transform: "translateY(-50%) scale(.5)",
            transition: "all .6s ease-in-out"
        }); ///// css /////////
        // 버튼위치 세부조정
        $(".lb").css({
            left: "20%"
        }); //// css /////
        $(".rb").css({
            right: "20%"
        }); //// css /////

        /// 2. 동영상 보이게 하고 data-mv 속성값으로 동영상정보를
        // 불러온다.
        var mv = $(this).attr("data-mv");
        //console.log("동영상정보:"+mv);

        // 변경대상: #mv
        $("#mv")
            .attr("src", "mv/" + mv + ".mp4")
            //경로파일변경
            .fadeIn(300); //서서히 나타남

        // canplaythrough 이벤트는 user agent 가 
        // media 를 재생할 수 있을 때 발생함
        // 따라서 이 이벤트를 적용해야 재생시 에러가 발생안함
        // 즉, 재생할 수 있을때 play()함!
        $("#mv").on("canplaythrough", function () {

            // 비디오 볼륨 셋팅하기
            $(this).get(0).volume = 0.4;
            // 비디오 볼륨 컨트롤 변경하기
            $("#bar").css({
                left: "40%"
            });

            // 동영상 재생하기
            $(this).get(0).play();

        }); //////// canplaythrough //////////




        // 동영상은 선택후 컬렉션에 저장되므로 get(n) 메서드로 선택해야함!
        // get(0) - 숫자 0은 첫번째 동영상객체를 말함
        // play() 메서드는 재생메서드


    }); //////// click /////////////////
    ///////////////////////////////////

    //// 이동버튼 클릭시 중앙에 위치한 영화예고편 상영하기 ///
    //포스터상태값
    var ptsts = 0; //0-큰포스터,1-하단포스터
    $(".abtn").click(function () {

        // 조건: 포스터가 하단으로 이동한 경우만
        // 영화가 상영되야함!
        if (ptsts === 0) return false; //아래코드 실행하지마!
        // 포스터를 클릭한 경우 아래로 내려가므로 이때 
        // ptsts=1로 셋팅함!

        // 양쪽버튼 모두 잘라붙이기를 하므로
        // 순서상 2번이 들어올 영화가 된다!
        var mv = $(".gbox img").eq(2).attr("data-mv");
        $("#mv")
            .attr("src", "mv/" + mv + ".mp4") //경로파일변경
            .fadeIn(300); //서서히 나타남

        $("#mv").on("canplaythrough", function () {
            // 동영상 재생하기
            $(this).get(0).play();
        }); //////// canplaythrough //////////

    }); ////////// click //////////////


    ////// 동영상 제어버튼 기능 구현 //////////////////

    // 1. 동영상 제어버튼 숨김/보이기
    // 컨트롤 공통 class : .ctrl
    $("#screen").hover(
        function () { // over
            $(".ctrl").fadeIn(200);
        },
        function () { // out
            $(".ctrl").stop().fadeOut(200);
        }); //////// hover ///////////////////

    // 2. 동영상 제어버튼 오버/아웃시 이미지 변경하기 ///
    // 이벤트 대상: .btngrp img
    // 변경원리: 기존버튼의 src를 읽어와서 
    //          파일명의".png"를 "-1.png"로 변경함
    $(".btngrp img").hover(
        function () { // over
            var csrc = $(this).attr("src")
                .replace(".png", "-1.png");
            //console.log("변경된파일명:"+csrc);
            $(this).attr("src", csrc);
        },
        function () { // 
            var csrc = $(this).attr("src")
                .replace("-1.png", ".png");
            //console.log("변경된파일명:"+csrc);
            $(this).attr("src", csrc);
        }); /////// hover /////////////////

    ////// play/stop버튼 클릭시 비디오 컨트롤 하기 ///////
    /// 이벤트 대상: .btngrp img
    /// 구현원리: 재생상태이면 멈추고 멈춤상태이면 재생한다
    $(".btngrp img").click(function () {
        // 구현포인트: 비디오가 재생상태인지 멈춤상태인지 알아내기!
        var paused_sts = $("#mv").get(0).paused;
        // paused 속성은 현재 비디오가 멈춤상태이면 true값을 리턴함!
        console.log("현재멈춤상태인가?" + paused_sts);

        if (paused_sts) { // 비디오가 멈춤상태니? true(응)

            // 비디오 재생하기 - play() 메서드 사용!
            $("#mv").get(0).play();

            // 버튼은 반대로 진한이미지로(멈춤버튼)
            $(this).attr("src", "images/vbt1-1.png");

        } //// if문 //////////////
        else { // 비디오가 멈춤상태니? false(아니오)

            // 비디오 멈추기 - pause() 메서드 사용!
            $("#mv").get(0).pause();

            // 버튼은 반대로 진한이미지로(재생버튼)
            $(this).attr("src", "images/vbt2-1.png");

        } ///// else문 /////////////



    }); ///////// click ///////////////////
    //////////////////////////////////////


    /////////// 음소거기능 ///////////////////////
    /// 이벤트 대상: .sound img
    /// 구현원리: 소리가 나는지 안나는지 상태에 따라 반대로 설정함
    $(".sound img").click(function () {
        // 구현포인트: 소리안남상태 알아내기
        var sound = $("#mv").get(0).muted;
        // muted 속성은 선택된 비디오의 소리가 
        // 안나면 true, 나면 false를 리턴
        // muted 속성은 현재 소리상태를 알아내기도 하고 설정할 수 있다!
        console.log("소리가 안나니?" + sound);

        // muted로 소리설정하기(현재설정값을 반대로넣기!)
        $("#mv").get(0).muted = !sound;
        // !(NOT연산자는 true/false 반대로)

        /// 소리상태 이미지 변경하기 //
        /// !sound 는 변경된 현재 소리상태임
        if (!sound) { // 소리가 안나니? 응(true)
            $(this).attr("src", "images/speaker-mute_blue.png");
        } //// if 문 ///////////////////////
        else { // 소리가 나는 상태
            $(this).attr("src", "images/speaker_blue.png");
        } ///// else 문 ///////////////////


    }); ///////// click /////////////////////////
    ////////////////////////////////////////////


    ////// 비디오 현재 진행바 기능(시간경과표시) ////////
    var mvid = $("#mv"); // 비디오객체를 변수에 할당!
    // on(이벤트,함수) 메서드 사용
    // 사용이벤트: timeupdate 이벤트 - 비디오객체의 시간이 변경될때 발생
    mvid.on("timeupdate", function () {
        // 구현목표: 비디오가 재생중일때 진행바가 움직이게 한다!

        // 1. 비디오현재시간 가져오기
        var ctime = mvid[0].currentTime;
        // mvid[0] === mvid.get(0) 
        // currentTime 비디오 현재 시간 리턴
        //console.log("현재시간:"+ctime);

        // 2. 비디오 전체재생시간 가져오기
        var maxtime = mvid[0].duration;
        // duration 은 비디오 전체시간 리턴
        //console.log("전체시간:"+maxtime);

        // 3. 진행바 변경하기
        if (!isNaN(maxtime)) { //전체시간이 숫자로 리턴시에만 처리!
            // 우리가 구하고자 하는것은 백분율(%)이다
            // 계산식:  현재시간 / 전체시간 * 100 -> 백분율!
            var percent = ctime / maxtime * 100;
            //console.log("진행율:"+percent);

            // 진행바의 width를 진행율 퍼센트값으로 넣어준다!
            $(".tBar").css({
                width: percent + "%"
            }); //// css /////////////

            // 만약 100%로 진행이 끝나면 멈춤버튼을 재생버튼으로 변경!
            if (percent === 100) {
                $(".btngrp img").attr("src", "images/vbt2.png");
            } /// if문 /////////////////



        } ///// if문 /////////////////////////

    }); /////// timeupdate ///////////////////
    /////////////////////////////////////////

    /////////////////////////////////////////////////////////////
    ////// 시간바를 클릭하거나 드래그할때 타임라인 이동함수 구현하기 /////
    /////////////////////////////////////////////////////////////
    // 변수에 익명함수를 할당해서 사용하면 호출은 함수 아래쪽에서 함!
    var updateBar = function (x) { // x - 마우스포인터 x좌표값
        //console.log("x좌표:" + x + "/" + timeDrag);

        // 비디오시간의 비교대상: .pBar
        var pBar = $(".pBar"); //타임바부모
        // 비디오 전체시간
        var maxtime = mvid[0].duration;

        // 현재위치 백분율 구하기
        // 계산식 : 현재위치/전체크기 * 100
        // 현재위치는 전달된 변수 x임!
        var percent = x / pBar.width() * 100;
        //console.log("현재%:"+percent);

        // 타임라인 실제로 변경하기
        $(".tBar").css({
            width: percent + "%"
        }); ///// css /////////

        // 비디오를 현재 클릭된 위치로 변경하기
        // 퍼센트를 현재 실제시간으로 전환시키기
        // 현재시간% = 현재실제시간 / 전체시간 * 100
        // 현재실제시간 = 현재시간% * 전체시간 / 100
        // currentTime을 이퀄 왼쪽에 쓰고 할당하면 변경됨!
        mvid[0].currentTime = percent * maxtime / 100;

        // 시간이동시 동영상이 멈춤일때라도 
        // 다시 재생되므로 멈춤버튼으로 변경하기
        $(".btngrp img").attr("src", "images/vbt1.png");

    }; ///////// updateBar함수 ////////////////////////




    /////// 진행바를 클릭하거나 드래그하면 타임라인 이동함수를 호출! ////
    // 드래그 상태변수(true-드래그중, false-드래그아님)
    var timeDrag = false;
    // 진행바에 마우스 이벤트 적용
    // click이벤트 -> 딸각!
    // mousedown 이벤트 -> 딸!
    // mouseup 이벤트 -> 각!
    // 대상선정: .pBar(진행바 부모)
    $(".pBar").mousedown(function (e) {
        // 드래그 상태시작!
        timeDrag = true;
        // 타임바업데이트 함수호출!
        updateBar(e.offsetX);
        // e.offsetX - 현재 클릭된 마우스포인터 위치의 x좌표값
        // pageX는 화면기준, offsetX는 선택박스기준!
    }); //////// mousedown //////////////////

    //// 마우스 버튼 땔때 (드래그해제) /////////
    $(".pBar").mouseup(function (e) {
        // 드래그 상태끝!
        timeDrag = false;
        // 타임바업데이트 함수호출!
        updateBar(e.offsetX);
    }); ////////// mouseup ///////////////////

    // 마우스가 .pBar 위에서 마우스 다운상태로 움직일때만 함수호출
    // mousemove 이벤트 메서드 사용
    $(".pBar").mousemove(function (e) {
        // 마우스다운 상태일때만 허용(즉,tiemDrag===true)
        if (timeDrag) {
            // 타임바업데이트 함수호출!
            updateBar(e.offsetX);
        } //////// if문 ///////////

    }); ///////// mousemove ////////////////

    //// 드래그 상태 오작동 막기 //////
    /// .pBar(부모박스)에 마우스다운 상태에서 밖으로 나가면
    /// 드래그 상태값이 true이므로 다시 들어올때 드래그상태로인식
    /// 따라서 이것을 mouseleave에서 해결한다!
    $(".pBar").mouseleave(function () {
        // 드래그 상태해제!
        timeDrag = false;
    }); /////////// mouseleave ////////////

    ////////// 비디오 시간 표시하기 //////////
    /// [ 비디오관련 이벤트 ] ///
    /// 1. timeupdate 이벤트 : video 태그가 재생 중 시간변경될때 발생
    /// 2. loadedmetadata 이벤트 : 비디오의 기본정보가 모두 로딩됐을때

    //// 전체시간 찍기 /////////////////
    mvid.on("loadedmetadata", function () {

        // 비디오의 기본정보가 모두 로딩되면 전체시간을 찍어준다!
        var total = mvid[0].duration;

        // 소수점 아래 처리(버림)
        total = Math.floor(total);

        // 시분초변환 함수를 호출하여 변환
        total = changeTime(total);

        // 화면에 출력!
        $(".duration").text(total);


    }); ////// loadedmetadata //////////////////

    //// 현재진행시간 찍기 ///////////////
    mvid.on("timeupdate", function () {

        // 비디오의 기본정보가 모두 로딩되면 전체시간을 찍어준다!
        var cTime = mvid[0].currentTime;

        // 소수점 아래 처리(버림)
        cTime = Math.floor(cTime);

        // 시분초변환 함수를 호출하여 변환
        cTime = changeTime(cTime);

        // 화면에 출력!
        $(".current").text(cTime);

    }); //////////// timeupdate /////////////////


    //////// 화면확대 버튼 클릭시 가로폭 키우기 /////
    var expsts = 0; //확대여부(0-확대전,1-확대)
    $(".expand").click(function () {
        // 1. 확대하기
        if (expsts === 0) {
            // 화면변경하기
            $("#screen").css({
                width: "70%",
                zIndex: 1,
                transition: "all 1s ease-in-out"
            }); /// css /////

            // 버튼모양바꾸기
            $("a", this).text("▦")
                // 버튼 타이틀(툴팁설명) 바꾸기
                .attr("title", "화면축소하기");

            expsts = 1; //상태변경
        } ///// if문 ///////
        // 2. 원상복귀
        else {
            $("#screen").css({
                width: "32%",
                zIndex: 0
            }); /// css /////

            // 버튼모양바꾸기
            $("a", this).text("▣")
                // 버튼 타이틀(툴팁설명) 바꾸기
                .attr("title", "화면확대하기");


            expsts = 0; //상태변경
        } //// else문 ///////////

    }); ///////// click ///////////////////////////


    //////// 볼륨컨트롤 구현하기 ////////////////

    /// 스크롤바 드래그 설정하여 움직이기
    $("#bar").draggable({
        axis: "x", //x축고정
        containment: "parent" //작동범위부모고정
    });

    // 바를 드래이 이동시 볼륨변경하기 ////
    $("#bar").on("drag", function () {
        // 현재바의 이동값
        var barpos = $(this).position().left;
        //console.log("barpos:" + barpos);

        // 최소값 0, 최대값 54
        // 비를 계산(최대값으로 나눔)
        var val = barpos / 54;
        //console.log("비:"+val);

        // 비디오 볼륨에 적용하기
        // volume 속성에 0~1 사이값을 적용한다!
        mvid[0].volume = val;


    }); /////////// drag ///////////////


    ///// 3 페이지 영화관 파트 - swiper 플러그인 적용하기 ////
    var swiper = new Swiper('.swiper-container', {
        loop: true, //무한이동
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //클릭이동
        },
        autoplay: { //자동넘기기
            delay: 3000,
        },
    }); /////// swiper /////////////////////////////////
    
    /// 4. 특별관 페이지 - photobox 플러그인 적용하기 ////
    $("#gallery").photobox();






}); ///////// jQB /////////////////////
/////////////////////////////////////



/*///////////////////////////////////////
	함수명: changeTime
	기능: 초를 보내면 시분초 변환해주는 함수
*/ ///////////////////////////////////////
function changeTime(sec) { //sec 초단위값
    "use strict";
    var pad = function (x) {
        // 한자리 숫자는 앞에 0을 붙여준다!
        return (x < 10) ? "0" + x : x;
    };
    var res; //결과값
    if (sec < 3600) { // 한시간이 넘지 않으면 분,초만 필요함
        res = pad(parseInt(sec / 60 % 60)) + ":" + pad(sec % 60);
    } else { // 한시간이 넘으면 시,분,초가 모두 필요함
        res = pad(parseInt(sec / (60 * 60))) + ":" + pad(parseInt(sec / 60 % 60)) + ":" + pad(sec % 60);
    }
    return res;
} ///////////////// changeTime함수 ////////////////////
//////////////////////////////////////////////////////
