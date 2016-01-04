$(function(){

	var frameCnt = 0,
			container = $('#main-container')
			frameIndicator = $('#frame-indicator'),
			prog = $('progress'),
			timerId = null;

	$(window).resize(function(){
		var wh = $(window).height(),
				oh = container.outerHeight();
		container.css('top', (wh - oh) / 2);

	}).resize();


	$('#btn-start').click(function(){
		timerId = requestAnimationFrame(drawCount);

		function drawCount(){
			frameCnt++;
			frameIndicator.text(frameCnt);

			timerId = requestAnimationFrame(drawCount);

			prog.val(frameCnt % 60);
		}
	});


	$('#btn-stop').click(function(){
		cancelAnimationFrame(timerId);
	});


	$('#btn-reset').click(function(){
		frameCnt = 0;
		frameIndicator.text(frameCnt);
		prog.val(0);
	});

});
