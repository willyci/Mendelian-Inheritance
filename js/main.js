// mouse over text, change bg-color 
function mouse_over_event(){
	
	$('.ph_1, .ph_1_1, .ph_1_2').mouseenter(function(){
		$('.ph_1, .ph_1_1, .ph_1_2').addClass('mouse_over_yellow');
		if($('.pea_1 > img').attr('src').indexOf('yellow') > 1) $('.pea_1').addClass('mouse_over_yellow'); 
		if($('.pea_2 > img').attr('src').indexOf('yellow') > 1) $('.pea_2').addClass('mouse_over_yellow'); 
		if($('.pea_3 > img').attr('src').indexOf('yellow') > 1) $('.pea_3').addClass('mouse_over_yellow'); 
		if($('.pea_4 > img').attr('src').indexOf('yellow') > 1) $('.pea_4').addClass('mouse_over_yellow'); 
	}).mouseleave(function(){
		$('.ph_1, .ph_1_1, .ph_1_2, .pea_1, .pea_2, .pea_3, .pea_4').removeClass('mouse_over_yellow').removeClass('mouse_over_green');
	});
	
	$('.ph_2, .ph_2_1, .ph_2_2').mouseenter(function(){
		$('.ph_2, .ph_2_1, .ph_2_2').addClass('mouse_over_yellow');
		if($('.pea_1 > img').attr('src').indexOf('yellow') > 1) $('.pea_1').addClass('mouse_over_yellow'); 
		if($('.pea_2 > img').attr('src').indexOf('yellow') > 1) $('.pea_2').addClass('mouse_over_yellow'); 
		if($('.pea_3 > img').attr('src').indexOf('yellow') > 1) $('.pea_3').addClass('mouse_over_yellow'); 
		if($('.pea_4 > img').attr('src').indexOf('yellow') > 1) $('.pea_4').addClass('mouse_over_yellow'); 
	}).mouseleave(function(){
		$('.ph_2, .ph_2_1, .ph_2_2, .pea_1, .pea_2, .pea_3, .pea_4').removeClass('mouse_over_yellow').removeClass('mouse_over_green');
	});

	$('.ph_3, .ph_3_1, .ph_3_2').mouseenter(function(){
		$('.ph_3, .ph_3_1, .ph_3_2').addClass('mouse_over_yellow');
		if($('.pea_1 > img').attr('src').indexOf('green') > 1) $('.pea_1').addClass('mouse_over_green'); 
		if($('.pea_2 > img').attr('src').indexOf('green') > 1) $('.pea_2').addClass('mouse_over_green'); 
		if($('.pea_3 > img').attr('src').indexOf('green') > 1) $('.pea_3').addClass('mouse_over_green'); 
		if($('.pea_4 > img').attr('src').indexOf('green') > 1) $('.pea_4').addClass('mouse_over_green');
	}).mouseleave(function(){
		$('.ph_3, .ph_3_1, .ph_3_2, .pea_1, .pea_2, .pea_3, .pea_4').removeClass('mouse_over_yellow').removeClass('mouse_over_green');
	});




	$('.gr_1, .gr_1_1, .gr_1_2').mouseenter(function(){
		$('.gr_1, .gr_1_1, .gr_1_2').addClass('mouse_over_yellow');
		if($('.pea_1 > img').attr('src').indexOf('yellow') > 1) $('.pea_1').addClass('mouse_over_yellow'); 
		if($('.pea_2 > img').attr('src').indexOf('yellow') > 1) $('.pea_2').addClass('mouse_over_yellow'); 
		if($('.pea_3 > img').attr('src').indexOf('yellow') > 1) $('.pea_3').addClass('mouse_over_yellow'); 
		if($('.pea_4 > img').attr('src').indexOf('yellow') > 1) $('.pea_4').addClass('mouse_over_yellow'); 
	}).mouseleave(function(){
		$('.gr_1, .gr_1_1, .gr_1_2, .ph_2_2, .pea_1, .pea_2, .pea_3, .pea_4').removeClass('mouse_over_yellow');
	});

	$('.gr_2, .gr_2_1, .gr_2_2').mouseenter(function(){
		$('.gr_2, .gr_2_1, .gr_2_2').addClass('mouse_over_green');
		if($('.pea_1 > img').attr('src').indexOf('green') > 1) $('.pea_1').addClass('mouse_over_green'); 
		if($('.pea_2 > img').attr('src').indexOf('green') > 1) $('.pea_2').addClass('mouse_over_green'); 
		if($('.pea_3 > img').attr('src').indexOf('green') > 1) $('.pea_3').addClass('mouse_over_green'); 
		if($('.pea_4 > img').attr('src').indexOf('green') > 1) $('.pea_4').addClass('mouse_over_green'); 
	}).mouseleave(function(){
		$('.gr_2, .gr_2_1, .gr_2_2, .pea_1, .pea_2, .pea_3, .pea_4').removeClass('mouse_over_green');
	});

}

// all peas animations 
// first pea, then done, call second pea

function pea_animate_1(){
	
	reset_all();

	var x = $('.pea_1 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_1 > img')[0].getBoundingClientRect().left-1+$(window).scrollLeft();	
	$('#ypea1').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_1 > img').css('visibility','visible'); }});
	$('#ypea_svg1').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg1').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea1').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg1').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg1').fadeTo({ duration: 500 },0,function(){}); pea_animate_2(); }});
	
}

// second pea, then done, call third 
function pea_animate_2(){

	var x = $('.pea_2 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_2 > img')[0].getBoundingClientRect().left-1+$(window).scrollLeft();	
	$('#ypea2').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_2 > img').css('visibility','visible'); }});
	$('#ypea_svg2').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg2').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea2').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg2').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg2').fadeTo({ duration: 500 },0,function(){}); pea_animate_3(); }});
	
}

// third pea, then done, call fourth pea 
function pea_animate_3(){
	
	var x = $('.pea_3 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_3 > img')[0].getBoundingClientRect().left-1+$(window).scrollLeft();	
	$('#ypea3').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_3 > img').css('visibility','visible'); }});
	$('#ypea_svg3').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg3').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea3').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg3').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg3').fadeTo({ duration: 500 },0,function(){}); pea_animate_4(); }});
	
}

// fourth pea, 
function pea_animate_4(){
	
	var x = $('.pea_4 > img')[0].getBoundingClientRect().top-8+$(window).scrollTop();
	var y = $('.pea_4 > img')[0].getBoundingClientRect().left-1+$(window).scrollLeft();	
	$('#ypea4').animate({top:x+'px', left:y+'px'},{ duration: 1000, queue: false ,   complete:function () { $('.pea_4 > img').css('visibility','visible'); }});
	$('#ypea_svg4').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){ $('#ypea_svg4').fadeTo({ duration: 500 },0,function(){});  }});
	$('#gpea4').animate({top:(x-50)+'px', left:y+'px'},{ duration: 1000, queue: false },function(){});
	$('#gpea_svg4').animate({height:'60px', width:'60px'},{ duration: 1000, queue: false , complete:function(){  $('#gpea_svg4').fadeTo({ duration: 500 },0,function(){}); }});
	
}


// on user click on pea
var s1 = 0;
function selectPea( which ) {
	log('selected ' + which );
	
	// 
	if(s1==0){		
		reset_all();
		s1 = which;
		log('got first one '+s1);
		switch (s1.toString()) {
			case '1' : $('.pea_11').html('Y');
					   $('.pea_12').html('Y');
			break;
			case '2' : $('.pea_11').html('y');
					   $('.pea_12').html('y');
			break;
			case '3' : $('.pea_11').html('Y');
					   $('.pea_12').html('y');
			break;
		}
		return;
	}
	
	else if ( s1 != 0 ) {
		log('got second one ' + which + " reset s1");
		
		var str = (s1*10+which).toString().split('').sort();
		log('you got '+str);
		
		switch (str.toString()) {
			case '1,1' : log('YYYY'); 
				$('.pea_21').html('Y');
				$('.pea_22').html('Y');
				$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_1_svg').animate({opacity: 1},1000);
				$('.pea_1_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_2_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_2_svg').animate({opacity: 1},1000);
				$('.pea_2_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_3_svg').animate({opacity: 1},1000);
				$('.pea_3_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_4_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_4_svg').animate({opacity: 1},1000);
				$('.pea_4_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);				
				
				$('.ph_1_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('0%').css('opacity','0').animate({opacity: 1},1000);				
				
			break;
			case '1,2' : log('YYyy'); 
				if(which != 1 ){ $('.pea_21').html('y');$('.pea_22').html('y'); } else  { $('.pea_21').html('Y');$('.pea_22').html('Y'); }
				$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_1_svg').animate({opacity: 1},1000);
				$('.pea_1_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_2_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_2_svg').animate({opacity: 1},1000);
				$('.pea_2_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_3_svg').animate({opacity: 1},1000);
				$('.pea_3_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_4_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_4_svg').animate({opacity: 1},1000);
				$('.pea_4_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);				
				
				$('.ph_1_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				
			break;
			case '1,3' : log('YYYy'); 
				if(which != 1 ){ $('.pea_21').html('Y');$('.pea_22').html('y'); 
				$('.pea_2_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				} else  { $('.pea_21').html('Y');$('.pea_22').html('Y'); 
				$('.pea_2_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				}
				$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_1_svg').animate({opacity: 1},1000);
				$('.pea_1_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_2_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_2_svg').animate({opacity: 1},1000);
				
				$('.pea_3_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_3_svg').animate({opacity: 1},1000);
				
				$('.pea_4_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_4_svg').animate({opacity: 1},1000);
				$('.pea_4_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);				
				
				$('.ph_1_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('0%').css('opacity','0').animate({opacity: 1},1000);

			break;
			case '2,2' : log('yyyy'); 
				$('.pea_21').html('y');
				$('.pea_22').html('y');
				$('.pea_1_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_1_svg').animate({opacity: 1},1000);
				$('.pea_1_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_2_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_2_svg').animate({opacity: 1},1000);
				$('.pea_2_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_3_svg').animate({opacity: 1},1000);
				$('.pea_3_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_4_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_4_svg').animate({opacity: 1},1000);
				$('.pea_4_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);				
				
				$('.ph_1_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('100%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('4').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('100%').css('opacity','0').animate({opacity: 1},1000);

			break;
			case '2,3' : log('Yyyy'); 
				if(which != 3 ){ $('.pea_21').html('y');$('.pea_22').html('y'); 
					$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_1_svg').animate({opacity: 1},1000);
					$('.pea_1_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_2_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_2_svg').animate({opacity: 1},1000);
					$('.pea_2_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_3_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_3_svg').animate({opacity: 1},1000);
					$('.pea_3_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_4_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_4_svg').animate({opacity: 1},1000);
					$('.pea_4_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);				
				} else  { $('.pea_21').html('Y');$('.pea_22').html('y');
					$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_1_svg').animate({opacity: 1},1000);
					$('.pea_1_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_2_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_2_svg').animate({opacity: 1},1000);
					$('.pea_2_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_3_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_3_svg').animate({opacity: 1},1000);
					$('.pea_3_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
					$('.pea_4_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
					$('.pea_4_svg').animate({opacity: 1},1000);
					$('.pea_4_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);	
				}
				$('.ph_1_1').html('0').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('0%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('50%').css('opacity','0').animate({opacity: 1},1000);

			break;
			case '3,3' : log('YyYy'); 
				$('.pea_21').html('Y');
				$('.pea_22').html('y');
				$('.pea_1_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_1_svg').animate({opacity: 1},1000);
				$('.pea_1_txt').html('YY').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_2_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_2_svg').animate({opacity: 1},1000);
				$('.pea_2_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_3_svg').attr('src','img/yellow_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_3_svg').animate({opacity: 1},1000);
				$('.pea_3_txt').html('Yy').css('opacity','0').animate({opacity: 1},1000);
				$('.pea_4_svg').attr('src','img/green_pea.svg').css('opacity','0').css('visibility', 'visible');
				$('.pea_4_svg').animate({opacity: 1},1000);
				$('.pea_4_txt').html('yy').css('opacity','0').animate({opacity: 1},1000);				
				
				$('.ph_1_1').html('1').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_1').html('2').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_1').html('1').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_1_2').html('25%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_2_2').html('50%').css('opacity','0').animate({opacity: 1},1000);
				$('.ph_3_2').html('25%').css('opacity','0').animate({opacity: 1},1000);
				
				$('.gr_1_1').html('3').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_1').html('1').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_1_2').html('75%').css('opacity','0').animate({opacity: 1},1000);
				$('.gr_2_2').html('25%').css('opacity','0').animate({opacity: 1},1000);

			break;
			default : log('nothing'); 
			s1=0;
			break;
		}
		
		
		
		s1=0; //reset 
	}

	
	
	}




// hide all peas, reset all peas
function reset_all() {
	
	// hide all peas, reset all peas
	$('.pea_1 > img, .pea_2 > img, .pea_3 > img, .pea_4 > img').css('visibility','hidden');
	
	$('#ypea_svg1, #ypea_svg2, #ypea_svg3, #ypea_svg4').css('opacity','1').css('width','40px').css('height','40px');

	$('#gpea_svg1, #gpea_svg2, #gpea_svg3, #gpea_svg4').css('opacity','1').css('width','40px').css('height','40px');
	
	$('#ypea1, #ypea2, #ypea3, #ypea4').css('top', 'auto').css('left', 'auto');
	
	$('#gpea1, #gpea2, #gpea3, #gpea4').css('top', 'auto').css('left', 'auto');

	$('.pea_11, .pea_12, .pea_21, .pea_22, .pea_1_txt, .pea_2_txt, .pea_3_txt, .pea_4_txt').html('&nbsp;&nbsp;');
	
	$('.ph_1_1, .ph_2_1, .ph_3_1, .ph_1_2, .ph_2_2, .ph_3_2').html('&nbsp;&nbsp;');
	
	$('.gr_1_1, .gr_2_1, .gr_1_2, .gr_2_2').html('&nbsp;&nbsp;');

}	

function log(s){window.console && console.log(s);};


$(function() {
    //log( "ready go!" );
	
	// onload reset all, run after 2 seconds
	reset_all();
	//setTimeout(function(){ pea_animate_1(); }, 2000);
	mouse_over_event();



});
