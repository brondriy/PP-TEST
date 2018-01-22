
var slide = 1;
var canslide = true;

$(document).ready(function(){
	$('.arrow').click(function(){
		changeslide(true, $(this).attr('id') == 'left'?-1:1);
	});

	$('.circle').click(function(){
		changeslide(false, $(this).attr('id'));
	})
});

function changeslide( fromcurrent, val )
{
	if( !canslide )
		return;
	canslide = false;
	setTimeout(function(){canslide = true;}, 800);

	if( fromcurrent )
	{
		var t =  parseInt(slide)+val;
		var perc;
		if( t == 5 )
			t = 1;
		else if( t == 0 )
			t = 4;

		switch(slide)
		{
			case 1:
			perc = val>0?0:-400;
			break;
			case 2:
			perc = val>0?-100:-100;
			break;
			case 3:
			perc = val>0?-200:-200;
			break;
			case 4:
			perc = val>0? 100:-300;
			break;
		}
		$('.page[id='+t+']').css('left', perc+'%');
		$('.page[id='+parseInt(slide)+'], .page[id='+t+']').animate({
			left: val>0?"-=100%":"+=100%"
		}, 800);
		slide = parseInt(slide)+val;
		if( slide == 5 )
			slide = 1;
		else if( slide == 0 )
			slide = 4;
		$('.circle.active').removeClass('active');
		$('.circle[id='+slide+']').addClass('active');
	}
	else
	{
		$('.circle.active').removeClass('active');
		$('.circle[id='+val+']').addClass('active');
		for( var i = 0; i < 4; i ++ )
		{
			$('.page').css('left', ((1-slide)*100)+'%');
		}
		$('.page').animate({
			left: (slide>val)?("+="+((slide-val)*100)+"%"):("-="+((val-slide)*100)+"%")
		}, 800);
		slide = val;
	}
}