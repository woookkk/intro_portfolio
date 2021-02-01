// 상단광고
function AdvertClose(){
    document.getElementById("advert_wrap").style.display="none";
    document.getElementsByClassName("quick_wrap")[0].style.top="170px";
}


// 퀵메뉴
var toggle=0;
var quick_btn

function QuickToggle(){
    if(toggle==0){
        document.getElementById("quick_area").style.display="block";
        document.getElementById("quick_toggle").src="images/quick_close.png";
        toggle=1;
    }else{
        document.getElementById("quick_area").style.display="none";
        document.getElementById("quick_toggle").src="images/quick_open.png";
        toggle=0;
        
    }
}

// gnb서브


function MyPopupShow(){
    
    document.getElementById("header_my_popup").style.display="block";

}
function MyPopupHide(){
    
    document.getElementById("header_my_popup").style.display="none";

}
//헤더영역 검색부분
function SearchShow(){
    document.header_search_area.header_search_input.value="";
    document.getElementById("header_search_box").style.display="block";
}

function SearchHide(){
    document.header_search_area.header_search_input.value="4명만 모이면 단독여행 OK! 우리끼리 단독여행";
    
}

function SearchNone(){
   document.getElementById("header_search_box").style.display="none"; 
}


// 헤더 검색창 탭메뉴
function SearchTab(tab, content){
    for(var k=0; k<=2; k++){
        document.getElementById("header_search_tab").children[k].classList.remove("active");
    }
    document.getElementById("header_search_tab").children[tab].classList.add("active");
    
    for(var k=0; k<=2; k++){
        document.getElementById("header_search_content").children[k].style.display="none";
    }
    document.getElementById(content).style.display="block";
}



// 헤더 인기 검색어
function RankHide(){
    document.getElementById("header_hot_area").style.display="none";
}
function RankShow(){    
    document.getElementById("header_hot_area").style.display="block";
}

var header_hot=new Array();
var header_hot_num=-1;

header_hot[0]="제주도";
header_hot[1]="울릉도";
header_hot[2]="미국";
header_hot[3]="중국";
header_hot[4]="영국";

function HeaderHotCount(){
    header_hot_num++; 
    if(header_hot_num==header_hot.length){
       header_hot_num=0;
    }       
    document.getElementById("header_hot_rank").innerText=header_hot[header_hot_num];
    
    setTimeout("HeaderHotCount()",1000);
}

HeaderHotCount();


// 헤더 전체 메뉴
var header_toggle=0;
function HeaderTotalShow(){
    if(header_toggle==0){  
        document.getElementById("lnb_total_wrap").style.display="block";
        document.getElementById("lnb_toggle").style.border ="1px solid #333";    
        document.getElementById("lnb_toggle").style.borderBottom ="1px solid #fff";
        
        header_toggle=1;
    }else{
        document.getElementById("lnb_total_wrap").style.display="none";
        document.getElementById("lnb_toggle").style.border ="1px solid #ddd";    
        document.getElementById("lnb_toggle").style.borderBottom ="0";
        header_toggle=0;
    }
}
function HeaderTotalHide(){ 
    document.getElementById("lnb_total_wrap").style.display="none";
    document.getElementById("lnb_toggle").style.border ="1px solid #ddd";    
    document.getElementById("lnb_toggle").style.borderBottom ="0";
        
    header_toggle=0;
}





// 메인비주얼 검색
function MainVisualTab(tab){
    
   var num=document.getElementById("main_visual_tab_area").getElementsByTagName("section").length-1;
    
    // 모든 a 태그에서 active를 제거한다.
    for(var k=0; k<=num; k++){
        document.getElementById("main_visual_tab").getElementsByTagName("a")[k].classList.remove("active");
        // 탭 컨텐츠 모두 안보이게 한다.  
        document.getElementById("main_visual_tab_area").getElementsByTagName("section")[k].style.display="none";
    }
    
    // 클릭한 해당 a태그만 active를 추가한다.
        document.getElementById("main_visual_tab").getElementsByTagName("a")[tab].classList.add("active");
    
    // 클릭한 해당 section만 보여준다.
        document.getElementById("main_visual_tab_area").getElementsByTagName("section")[tab].style.display="block";
}


// 메인 비주얼 플레이어
var main_visual_num=1;

//배열을 만들어서 4개의 색상을 삽입

var main_bg=new Array();

main_bg[0]="#c3fff3";
main_bg[1]="#fedbd9";
main_bg[2]="#e1ffeb";
main_bg[3]="#8ac5e4";

function NextVisual(){
    
    
    
    if(main_visual_num==4){
       main_visual_num=0;
   }
    
    main_visual_num++;
    
    document.getElementById("main_visual_box").style.backgroundImage="url(images/main_visual_"+main_visual_num+".jpg)";
    document.getElementById("main_visual_count").innerText=main_visual_num+" / 4";
    document.getElementById("main_visual_wrap").style.backgroundColor=main_bg[main_visual_num-1];
    
    
    clearInterval(TimeId);
    TimeId=setInterval("NextVisual()",2000);
    
}
    var TimeId=setInterval("NextVisual()",2000);
    //NextVisual();

//clearInterval(TimeId)

function FrewVisual(){
    
   
    
    if(main_visual_num==1){
       main_visual_num=5;
   }
    main_visual_num--;
    
    document.getElementById("main_visual_box").style.backgroundImage="url(images/main_visual_"+main_visual_num+".jpg)";
    document.getElementById("main_visual_count").innerText=main_visual_num+" / 4";
    document.getElementById("main_visual_wrap").style.backgroundColor=main_bg[main_visual_num-1];
    
    clearInterval(TimeId);
    TimeId=setInterval("NextVisual()",2000);
}

var visual_toggle=0;

function PlayerVisual(){
    if(visual_toggle==0){
        clearInterval(TimeId);
        
        document.getElementById("player_visual").innerHTML="<i class='fas fa-play'></i>";
        visual_toggle=1;
    }else{
        TimeId=setInterval("NextVisual()",2000);
        document.getElementById("player_visual").innerHTML="<i class='fas fa-stop'></i>";
        visual_toggle=0;
    }
}

 


// 메인 추천여행 영역

var main_recommend="";

var main_recommend_img=new Array();
main_recommend_img[0]="recommend_sample1.jpg";
main_recommend_img[1]="recommend_sample2.jpg";
main_recommend_img[2]="recommend_sample3.jpg";
main_recommend_img[3]="recommend_sample4.jpg";

var main_recommend_small=new Array();
main_recommend_small[0]="내륙숙박";
main_recommend_small[1]="제주숙박";
main_recommend_small[2]="내륙숙박";
main_recommend_small[3]="제주숙박";

var main_recommend_h4=new Array();
main_recommend_h4[0]="[호텔] 국내로 떠나는 여름 썸바캉스!";
main_recommend_h4[1]="[제주숙박] 일출랜드 입장권 증정";
main_recommend_h4[2]="[내륙] 벤타고 우리끼리 여행2일/3일";
main_recommend_h4[3]="[제주] 신라호텔 자유여행3일";

var main_recommend_big=new Array();
main_recommend_big[0]="45,662";
main_recommend_big[1]="35,538";
main_recommend_big[2]="324,000";
main_recommend_big[3]="323,000";

for(var k=0; k<=main_recommend_img.length-1; k++){
    main_recommend+="<li>";
    main_recommend+="   <a href='#'>";
    main_recommend+="       <div style='background-image:url(images/"+main_recommend_img[k]+");' alt='추천여행지'                      class='main_recommend_img'>";
    main_recommend+="       </div>";
    main_recommend+="       <div class='main_recommend_text'>";
    main_recommend+="           <small>"+main_recommend_small[k]+"</small>";
    main_recommend+="           <h4>"+main_recommend_h4[k]+"</h4>";
    main_recommend+="           <big>"+main_recommend_big[k]+"</big><span>원~</span>";
    main_recommend+="       </div>";
    main_recommend+="   </a>";
    main_recommend+="</li>";
}
document.getElementById("main_recommend_list").innerHTML=main_recommend;




// 슬라이드 배너

function SlideTAb(tab){
  
   var num=document.getElementById("main_slide_box").getElementsByTagName("section").length-1;
    
    // 모든 a 태그에서 active를 제거한다.
    for(var k=0; k<=num; k++){
        document.getElementById("main_slide_tab").getElementsByTagName("a")[k].classList.remove("active");
        // 탭 컨텐츠 모두 안보이게 한다.  
        document.getElementById("main_slide_box").getElementsByTagName("section")[k].style.display="none";
    }
    
    // 클릭한 해당 a태그만 active를 추가한다.
        document.getElementById("main_slide_tab").getElementsByTagName("a")[tab].classList.add("active");
    
    // 클릭한 해당 section만 보여준다.
        document.getElementById("main_slide_box").getElementsByTagName("section")[tab].style.display="block";
}








// 여행 계획
var main_plan="";

var main_plan_img=new Array();
main_plan_img[0]="plan_sample_1.jpg";
main_plan_img[1]="plan_sample_2.jpg";
main_plan_img[2]="plan_sample_3.jpg";

for(var i=0; i<=2; i++){  
main_plan+="<li>";
main_plan+="<a href=\"#\">";
main_plan+="<div class=\"main_plan_img\" style=\"background-image:url(images/"+main_plan_img[i]+");\">";
main_plan+="</div>";
main_plan+="<div class=\"main_plan_text\">";
main_plan+="<small>제주숙박</small>";
main_plan+="<h4>[숙박] 히든클리프호텔&네이쳐</h4>";
main_plan+="<p>47m 인피니트 사계절 온수풀</p>";
main_plan+="<big>363,000</big><span>원~</span>";
main_plan+="</div>";
main_plan+="</a>";
main_plan+="</li>";
}
            
document.getElementById("main_plan_list").innerHTML=main_plan;           


// 핫한 영역

var main_hot="";

var main_hot_img=new Array();
main_hot_img[0]="hot_sample1.jpg";
main_hot_img[1]="hot_sample2.jpg";
main_hot_img[2]="hot_sample3.jpg";
main_hot_img[3]="hot_sample4.jpg";
main_hot_img[4]="hot_sample5.jpg";

var main_hot_title=new Array();
main_hot_title[0]="괌";
main_hot_title[1]="강원";
main_hot_title[2]="제주";
main_hot_title[3]="울릉도/독도";
main_hot_title[4]="호주";

var main_hot_p=new Array();
main_hot_p[0]="괌 PIC골드로 떠나는<br>온 가족 특급휴양!";
main_hot_p[1]="청량함으로 승부한다!<br>동해바다 즐기기 딱 좋은때";
main_hot_p[2]="지금 즐기는 휴식<br>제주스러운 오늘을 만나요!";
main_hot_p[3]="청정지역 울릉도<br>자유여행부터 패키지까지";
main_hot_p[4]="도시와 자연이<br>공존하는 이국적 여행지";

for(var k=0; k<=main_hot_img.length-1; k++){

if(k==2){
main_hot+="<li class='main_hot_recommend'>"
main_hot+=" <a href='#'>"
main_hot+="     <div class='main_hot_img' style='background-image:url(images/"+main_hot_img[k]+");'><span class='main_hot_label'>추천</span> </div>";
}else{
main_hot+="<li>";
main_hot+=" <a href='#'>";
main_hot+="     <div class='main_hot_img' style='background-image:url(images/"+main_hot_img[k]+");'></div>";
}
main_hot+="     <div class='main_hot_text'>";
main_hot+="         <h4>"+main_hot_title[k]+"</h4>";
main_hot+="         <p>"+main_hot_p[k]+"</p>";
main_hot+="     </div>";
main_hot+=" </a>";
main_hot+="</li>";

}
document.getElementById("main_hot_list").innerHTML=main_hot;                 
                            
                            
                                
// 푸터  공지사항 영역
var footer_notice=new Array();

footer_notice[0]="오늘은 2020년 7월 3일 금요일입니다.";
footer_notice[1]="현재 날씨는 '맑음' 입니다.";
footer_notice[2]="현재 시각은 오후1시 입니다.";

var footer_num=-1;

function FooterNotice(){
    footer_num++;
    
    if(footer_num==3){
       footer_num=0;
       }
       
document.getElementById("footer_top_notice").innerText=footer_notice[footer_num];  
    
    setTimeout("FooterNotice()",1000);
}
FooterNotice();
                        
                
           
            
                
                   
                   
            
        
    

