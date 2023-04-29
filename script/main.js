$(function(){

    var n=0; // 슬라이더 기억할 변수
    var posy=0; // 슬라이더 수직 위치

    setInterval(function(){

        if(n < 2) {
            n+=1;
        }
        else {
            n=0;
        }
        
        posy= (-1)*300*n;
        $("#header .slider ul").animate({top : posy}, 400);

    },3000);



    $(".menu > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(this).parent().parent().stop().animate({height:300}, 500);
		},
		function(){
			$(this).removeClass("active");
			$(this).parent().parent().stop().animate({height:100}, 500);
		}
	);
	$(".menu > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$(this).parent().parent().parent().stop().animate({height:300}, 500);
	});
	$(".menu li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});
	$(".menu li:last-child li:last-child").focusout(function(){
		$(".menu").stop().animate({height:100}, 500);
	});


    $("#content .notice .btn li.noticebtn").addClass("active"); //초기상태
    $("#content .notice .btn li.noticebtn a").addClass("active"); //초기상태
    $("#content .notice .btn li.noticebtn").click(function(e){
        e.preventDefault();
        $("#content .notice .btn li").removeClass("active");
        $(this).addClass("active");
        $("#content .notice .btn li a").removeClass("active");
        $(this).children().addClass("active");
        $("#content .notice .list .notice_list").show();
        $("#content .notice .list .gallery_list").hide();
    });
    $("#content .notice .btn li.gallerybtn").click(function(e){
        e.preventDefault();
        $("#content .notice .btn li").removeClass("active");
        $(this).addClass("active");
        $("#content .notice .btn li a").removeClass("active");
        $(this).children().addClass("active");
        $("#content .notice .list .notice_list").hide();
        $("#content .notice .list .gallery_list").show();
    });


    $("#content .notice .list .notice_list li a:first-child").click(function(e){
        e.preventDefault();
        $(".popup_area").addClass("active");
    });
    $(".popup .close").click(function(){
        $(".popup_area").removeClass("active");
    });


});