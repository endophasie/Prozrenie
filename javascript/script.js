$(document).ready(function() {

	// carousel
     
     $(".b-carousel .carousel-control li a").click(function() {
     	
     	 var total = $(".b-carousel .carousel-style>ul>li").length;
         var linknumber = parseInt($(this).attr('id').replace("link", ""));
         var move = -($("#box"+linknumber).width() * (linknumber - 1));
		
		$(".b-carousel .carousel-control li").removeClass("active");
		$(this).parent("li").addClass("active");
		
         $(".b-carousel .carousel-style>ul").animate({
             left: move
         }, 500);

         return false;
     });

     $(".b-carousel .carousel-arr").click(function() {
     	
     	 var total = $(".b-carousel .carousel-style>ul>li").length;
         var boxwidth = $("#box1").width();
         var box_left = $(".b-carousel .carousel-style>ul").css("left");
         var el_id = $(this).attr("id");
         var move, linknumber;

         if (box_left == 'auto') {
             box_left = 0;
         } else {
             box_left = parseInt(box_left.replace("px", ""));
         }

         // Переход к предыдущему блоку
         if (el_id == 'linkprev') {
             if ((box_left - boxwidth) == -(boxwidth)) {
                 move = -(boxwidth * (total - 1));
                 
             } else {
                 move = box_left + boxwidth;
             }

             linknumber = -(box_left / boxwidth);
             if (linknumber == 0) {
                 linknumber = total; 
             }
         } else if (el_id == 'linknext') {
         
             // Если блок последний, то перематывается к первому
             if (-(box_left) == (boxwidth * (total - 1))) {
                 move = 0;
             } else {
                 move = box_left - boxwidth;
             }

             linknumber = Math.abs((box_left / boxwidth)) + 2;
             if (linknumber == (total + 1)) {
                 linknumber = 1;
             }
         }
         
         $(".b-carousel .carousel-control li").removeClass("active");
         $("#link"+linknumber).parent("li").addClass("active");

         
         $(".b-carousel .carousel-style>ul").animate({
             left: move+'px'
         }, 400);

	});
	
	
	$(".ad-carousel .carousel-control li a").click(function() {
		
		 var total = $(".ad-carousel .carousel-style>ul>li").length;
         var linknumber = parseInt($(this).attr('id').replace("ad-link", ""));
         var move = -($("#ad-box"+linknumber).width() * (linknumber - 1));
		
		$(".ad-carousel .carousel-control li").removeClass("active");
		$(this).parent().addClass("active");
		
         $(".ad-carousel .carousel-style>ul").animate({
             left: move
         }, 500);

         return false;
     });

     $(".ad-carousel .carousel-arr").click(function() {
     	
     	 var total = $(".ad-carousel .carousel-style>ul>li").length;
         var boxwidth = $("#ad-box1").width();
         var box_left = $(".ad-carousel .carousel-style>ul").css("left");
         var el_id = $(this).attr("id");
         var move, linknumber;

         if (box_left == 'auto') {
             box_left = 0;
         } else {
             box_left = parseInt(box_left.replace("px", ""));
         }

         // Переход к предыдущему блоку
         if (el_id == 'ad-linkprev') {
             if ((box_left - boxwidth) == -(boxwidth)) {
                 move = -(boxwidth * (total - 1));
                 
             } else {
                 move = box_left + boxwidth;
             }

             linknumber = -(box_left / boxwidth);
             if (linknumber == 0) {
                 linknumber = total; 
             }
         } else if (el_id == 'ad-linknext') {
         
             // Если блок последний, то перематывается к первому
             if (-(box_left) == (boxwidth * (total - 1))) {
                 move = 0;
             } else {
                 move = box_left - boxwidth;
             }

             linknumber = Math.abs((box_left / boxwidth)) + 2;
             if (linknumber == (total + 1)) {
                 linknumber = 1;
             }
         }
         
         $(".ad-carousel .carousel-control li").removeClass("active");
         $("#ad-link"+linknumber).parent("li").addClass("active");

         
         $(".ad-carousel .carousel-style>ul").animate({
             left: move+'px'
         }, 400);

	});
	
	// counter 
	
	function calculate($this,d) {
		var curVal = $("li.value input.value").val()*1;
		curVal += d;
		
		$("li.value input.value").val(curVal);
	}
	
	$(".arr-count .ctrl-plus").click(function(){
		calculate($(this),1);
		return false;
	});
	$(".arr-count .ctrl-minus").click(function(){
		
		if($("li.value input.value").val() > 0) {
			calculate($(this),-1);
			return false;
		}
	});
	
});

