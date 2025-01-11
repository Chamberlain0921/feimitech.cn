$(function(){
    new WOW().init();

	//右侧浮动
	function rightFixed() {
	    var f = $("#c-right-fixed");
	    if ($(window).width() > 992) {
	        $(window).scroll(function() {
	            if ($(window).scrollTop() > $(window).height()) {
	                f.fadeIn();
	            } else {
	                f.fadeOut();
	            }
	        });
	    }
	}
	rightFixed();


	// 首页banner
	banner1();
	function banner1(){
		var swiper = new Swiper('.c-banner1', {
			slidesPerView: 3,
			loop:true,
			spaceBetween: 20,
			autoplay: true,
			pagination: {
				el: '.c-banner1 .swiper-pagination',
				clickable :true,
			},
		    navigation: {
		      nextEl: '#about3 .swiper-button-next',
		      prevEl: '#about3 .swiper-button-prev',
		    },
			breakpoints: {
				500:{
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768:{
					slidesPerView: 2,
					spaceBetween: 10,
				},
				1024:{
					slidesPerView: 3,
					spaceBetween: 10,
				}
			}
		});
	}

	//数字滚动
	visualData($(".c-vData"));
	function visualData(obj){
		$(window).load(function(){
			obj.each(function(){
				var h = Number($(this).html());
				var t =  "";
				var n = Math.ceil(h/20);
				var a = true;
				var This = $(this);
				if($(this).length!=0){
					t =  $(this).offset().top;
				}
				This.html(0);
				fn1();
				$(window).scroll(function(){
					fn1();
				});
				function fn1(){
					var wT = $(window).scrollTop();
					if(wT>t-$(window).height()+50 && wT<t-50 && a == true){
						a = false;
						var y = 0;
						var timer2 = setInterval(function(){
							if (y>=h) {
								y = h;
								clearInterval(timer2);
							}
							This.html(y);
							y+=n;
						},100);
					}
				}
			});
		});
	}


	// 首页合作伙伴
	banner2();
	function banner2(){
		var swiper = new Swiper('.c-banner2', {
			slidesPerView: 5,
			slidesPerGroup : 5,
			slidesPerColumn: 2,
			spaceBetween: 15,
			autoplay: true,
			pagination: {
				el: '.c-banner2 .swiper-pagination',
				clickable :true,
			},
			breakpoints: {
				500:{
					slidesPerView: 2,
					slidesPerGroup : 2,
				},
				768:{
					slidesPerView: 4,
					slidesPerGroup : 4,
				}
			}
		});
	}
	
	// 
	banner3();
	function banner3(){
		var swiper = new Swiper('.c-banner3', {
// 			slidesPerView: 5,
// 			slidesPerGroup : 5,
// 			slidesPerColumn: 2,
// 			spaceBetween: 15,
            loop:true,
			autoplay: true,
			pagination: {
				el: '.c-banner3 .swiper-pagination',
				clickable :true,
			},
// 			breakpoints: {
// 				500:{
// 					slidesPerView: 2,
// 					slidesPerGroup : 2,
// 				},
// 				768:{
// 					slidesPerView: 4,
// 					slidesPerGroup : 4,
// 				}
// 			}
		});
	}
	banner4();
	function banner4(){
		var swiper = new Swiper('#pthj', {
			slidesPerView: 3,
			spaceBetween: 32,
            loop:true,
			autoplay: true,
			centeredSlides: true,
			pagination: {
				el: '#pthj .swiper-pagination',
				clickable :true,
			},
			breakpoints: {
				500:{
					slidesPerView: 1,
					spaceBetween: 0,
				},
				820:{
					slidesPerView: 2,
			        spaceBetween: 20,
				}
			}
		});
	}
	banner5();
	function banner5(){
		var swiper = new Swiper('#lx_honner', {
			slidesPerView: 4,
			spaceBetween: 25,
            loop:true,
			autoplay: true,
			//centeredSlides: true,
			pagination: {
				el: '#lx_honner .swiper-pagination',
				clickable :true,
			},
			breakpoints: {
				640:{
					slidesPerView: 2,
					spaceBetween: 20,
				},
				820:{
					slidesPerView: 3,
			        spaceBetween: 20,
				}
			}
		});
	}
	// document.onkeydown=function(){
	//     var e = window.event||arguments[0];
	//     if(e.keyCode==123){
	//     	alert('请尊重劳动成果！www.cn-cn.cc');
	//             return false;
	//     }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
	//     	alert('请尊重劳动成果！www.cn-cn.cc');
	//             return false;
	//     }else if((e.ctrlKey)&&(e.keyCode==85)){
	//             alert('请尊重劳动成果！www.cn-cn.cc');
	//             return false;
	//     }else if((e.ctrlKey)&&(e.keyCode==83)){
	//            alert('请尊重劳动成果！www.cn-cn.cc');
	//            return false;
	//     }
	// }
	// document.oncontextmenu=function(){
	// 	alert('请尊重劳动成果！www.cn-cn.cc');
	//     return false;
	// }



    //头部下滑消，失上滑显示
	isScroll();
	function isScroll(){
		var i = $(window).scrollTop();
		var obj = $("#c-header");
		if($("#c-placeholder").length!=0){
			obj.addClass("c-head-hide");
		}else{
			fn1();
			$(window).scroll(function(){
				i = $(this).scrollTop();
				fn1();
			});
		}
		function fn1(){
			if(i>50){
				obj.addClass("c-head-hide");
			}else{
				obj.removeClass("c-head-hide");
			}
		}
	}
		
	navFade();
	function navFade(){
		var i = $(window).scrollTop();
		var obj = $("#c-header");
		$(window).scroll(function(){
			if($(this).scrollTop()>i && $(this).scrollTop()>50){
				i = $(this).scrollTop();
				obj.addClass("c-head-move");
			}else{
				i = $(this).scrollTop();
				obj.removeClass("c-head-move");
			}
		});
	}
	
});