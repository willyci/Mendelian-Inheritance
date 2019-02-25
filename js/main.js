
function main(){
	

}



$(function() {
    log( "ready go!" );


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



});
