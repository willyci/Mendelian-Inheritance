// mouse over text, change bg-color 
function mouse_over_event(){
	
	$('.ph_1').mouseenter(function(){
		$('.ph_1, .pea_1').addClass('mouse_over_yellow');
	}).mouseleave(function(){
		$('.ph_1, .pea_1').removeClass('mouse_over_yellow');
	});

	$('.ph_2').mouseenter(function(){
		$('.ph_2, .pea_2, .pea_3').addClass('mouse_over_yellow');
	}).mouseleave(function(){
		$('.ph_2, .pea_2, .pea_3').removeClass('mouse_over_yellow');
	});

	$('.ph_3').mouseenter(function(){
		$('.ph_3, .pea_4').addClass('mouse_over_green');
	}).mouseleave(function(){
		$('.ph_3, .pea_4').removeClass('mouse_over_green');
	});

	$('.gr_1').mouseenter(function(){
		$('.gr_1, .pea_1, .pea_2, .pea_3').addClass('mouse_over_yellow');
	}).mouseleave(function(){
		$('.gr_1, .pea_1, .pea_2, .pea_3').removeClass('mouse_over_yellow');
	});

	$('.gr_2').mouseenter(function(){
		$('.gr_2, .pea_4').addClass('mouse_over_green');
	}).mouseleave(function(){
		$('.gr_2, .pea_4').removeClass('mouse_over_green');
	});

}

// all peas animations 
function pea_animate_1(){
	
	reset_all();

	var x = $('.pea_1 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_1 > img')[0].getBoundingClientRect().left-1;	
	$('#ypea1').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_1 > img').css('visibility','visible'); }});
	$('#ypea_svg1').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg1').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea1').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg1').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg1').fadeTo({ duration: 500 },0,function(){}); pea_animate_2(); }});
	
}

function pea_animate_2(){

	var x = $('.pea_2 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_2 > img')[0].getBoundingClientRect().left-1;	
	$('#ypea2').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_2 > img').css('visibility','visible'); }});
	$('#ypea_svg2').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg2').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea2').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg2').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg2').fadeTo({ duration: 500 },0,function(){}); pea_animate_3(); }});
	
}


function pea_animate_3(){
	
	var x = $('.pea_3 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_3 > img')[0].getBoundingClientRect().left-1;	
	$('#ypea3').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_3 > img').css('visibility','visible'); }});
	$('#ypea_svg3').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg3').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea3').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg3').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg3').fadeTo({ duration: 500 },0,function(){}); pea_animate_4(); }});
	
}


function pea_animate_4(){
	
	var x = $('.pea_4 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_4 > img')[0].getBoundingClientRect().left-1;	
	$('#ypea4').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_4 > img').css('visibility','visible'); }});
	$('#ypea_svg4').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg4').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea4').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg4').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg4').fadeTo({ duration: 500 },0,function(){}); }});
	
}


// hide all peas, reset all peas
function reset_all() {
	
	// hide all peas, reset all peas
	$('.pea_1 > img, .pea_2 > img, .pea_3 > img, .pea_4 > img').css('visibility','hidden');
	
	$('#ypea_svg1, #ypea_svg2, #ypea_svg3, #ypea_svg4').css('opacity','1').css('width','40px').css('height','40px');

	$('#gpea_svg1, #gpea_svg2, #gpea_svg3, #gpea_svg4').css('opacity','1').css('width','40px').css('height','40px');
	
	$('#ypea1, #ypea2, #ypea3, #ypea4').css('top', 'auto').css('left', 'auto');
	
	$('#gpea1, #gpea2, #gpea3, #gpea4').css('top', 'auto').css('left', 'auto');

	
}



function log(s){window.console && console.log(s);};


$(function() {
    //log( "ready go!" );
	
	// onload reset all, run after 2 seconds
	reset_all();
	setTimeout(function(){ pea_animate_1(); }, 2000);
	mouse_over_event();



});
