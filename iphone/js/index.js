$(function(){
	var ch=$(window).height();
	$(window).resize(function(){
		var cw=$(window).width();
		if(cw>=768){
			$(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"});
			$(".min-nav ul").css({height:0});
			$(".nav-span").removeAttr("id");
		}
	})
	$(".nav-span").click(function(){
		var ids=$(this).attr("id");
		if(ids == "active"){
			$(this).removeAttr("id");
			$(".min-nav ul").css({height:0})
			$(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"})
		}else{
			$(this).attr("id","active");
			$(".min-nav ul").css({height:ch-44});
			$(".container-fluid").eq(0).css({background:"#000"})
		}
		
	})







	for (var i = 1; i <= $(".banner").length; i++) {
			$(".btnbox").append("<div class='btn'></div>")
		};
		$(".btn").eq(0).css({"background":"#fff","border":"1px solid #1893D0"});


		
		var $banner=$(".banner");
		var $btn=$(".btn");
		$banner.css("left","100%").eq(0).css("left","0");
		var num=0;
		var next=0;


		function move(){
			next++;
			if(next>=$banner.length){
				next=0;
			}
			$banner.eq(next).css({"left":"100%"});
			$banner.eq(num).animate({"left":"-100%"},700);
			$banner.eq(next).animate({"left":"0"},700,function(){
				flag2=true;
			});
			$btn.css({"background":"#999999","border":"none"}).eq(next).css({"background":"#fff","border":"1px solid #1893D0"});
			num=next;
		}
		var t=setInterval(move,2000);


		function moveR(){
			next--;
			if(next<=-1){
				next=$banner.length-1;
			}
			$banner.eq(next).css({"left":"-100%"});
			$banner.eq(num).animate({"left":"100%"},700);
			$banner.eq(next).animate({"left":"0"},700,function(){
				flag2=true;
			});
			$btn.css({"background":"#999999","border":"none"}).eq(next).css({"background":"#fff","border":"1px solid #1893D0"});
			num=next;
		}


		$(".swiper-container").hover(function(){
			clearInterval(t);
			$(".left").css("display","block");
			$(".right").css("display","block");
		},function(){
			t=setInterval(move,2000);
			$(".left").css("display","none");
			$(".right").css("display","none");
		})

		var flag=true;
		$btn.click(function(){			
			if(flag){
				flag=false;
				var index=$(this).index(".btn");
				$btn.css({"background":"#999999","border":"none"}).eq(index).css({"background":"#fff","border":"1px solid #1893D0"});
				if(next==index){
					flag=true;
					return;
					
				}
				if(next<index){
					$banner.eq(index).css({"left":"100%"});
					$banner.eq(next).animate({"left":"-100%"},700);
					$banner.eq(index).animate({"left":"0"},700,function(){
						flag=true;
					});
				}else{
					$banner.eq(index).css({"left":"-100%"});
					$banner.eq(next).animate({"left":"100%"},700);
					$banner.eq(index).animate({"left":"0"},700,function(){
						flag=true;
					});
				}
				
				next=index;
				num=next;
			}
			
		})


		$btn.mouseover(function(){
			var mousei=$(this).index(".btn");
			$btn.css({"background":"#999999","border":"none"}).eq(next).css({"background":"#fff","border":"1px solid #1893D0"});
			$btn.eq(mousei).css({"background":"#fff","border":"1px solid #1893D0"});
		});
		$btn.mouseout(function(){
			$btn.css({"background":"#999999","border":"none"}).eq(next).css({"background":"#fff","border":"1px solid #1893D0"});
		})



		var flag2=true;
		$(".left").click(function(){
			if(flag2){
				flag2=false;
				moveR();
			}
			
		});
		$(".right").click(function(){
			if(flag2){
				flag2=false;
				move();
			}
			
		});



		$(".btmnav>h5").click(function(){
			var index=$(this).index(".btmnav>h5");
			var h=$(".btmnav>ul").eq(index).height();
			if(h==0){
				$(".btmnav>ul").eq(index).addClass("active");
				$(".btmnav span").eq(index).addClass("active");
			}else{
				$(".btmnav>ul").eq(index).removeClass("active");
				$(".btmnav span").eq(index).removeClass("active");
			}
			

		})



})