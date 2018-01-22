var activepage = 1;

var events = ['bank', 'parking', 'bus', 'cafe', 'shop', 'museum'];

$(document).ready(function(){
	checkactive();
	$(window).scroll(function() 
	{
		checkactive();
	});

	$('.menubutton').click(function(){
		$('.menu>.row>ul').css('display',$('.menu>.row>ul').css('display')=='none'?'flex':'none');
		$('.menubutton').css('opacity', $('.menubutton').css('opacity')=='0.2'?'1':'0.2');
	});

	$('.event').click(function(){
		$(this).css('opacity', '1');
		$('.event:not([id="'+$(this).attr('id')+'"]').css('opacity', '0');
		$('.phoneimg').attr('src', 'img/event/phone'+events[$(this).attr('id')-1]+'.png');
	});

});

function checkactive()
{
	for( var i = 0; i < 3; i ++ )
	{
		if( $(window).scrollTop() >= $('.main[id="'+(i+1)+'"]').position().top-91 && activepage != (i+1) )
		{
			$('li.active').removeClass('active');
			$('.menu>.row>ul>li:nth-child('+(i+1)+')').addClass('active');

			activepage = i+1;
		} 
	}
}