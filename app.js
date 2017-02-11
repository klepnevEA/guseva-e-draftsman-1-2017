
var app = {};

             


app.init = function(e)
{

	var that = this;	
 
		e.add('05-slide', 'onAfterLoad', function() {
			$('.block_slide_05').addClass('active');
		}); 

		e.add('13-slide', 'onAfterLoad', function() {
			$('.bg_slide_13__2').addClass('active');
		});		 


		e.add('14-slide', 'onAfterLoad', function() {
			$('.btn_slide_14').on('click', function(){
				var allInput = $('.block_slide_14 input[type=checkbox]');

				allInput.each(function(index){
					$(allInput[index]).prop( "checked", false );
				});
				$(allInput[3]).prop( "checked", true );
				$('label[for = "check4"]').addClass('active');
				$('.text_slide_14').addClass('active');
			});
		});	

	e.add('33-slide', 'onAfterLoad', function() {
		var text = '';
		var textSubmit = 'С уважением, <br/>компания "Рош"';
		// мой код
		$('#emailInput').on('focus', function() {
			console.log('Scroll focus '+$('#emailInput').val());			
			if ($('#emailInput').val() == 'E-mail получателя') 
				$('#emailInput').val('');
			
		    $('body').css({position:'absolute'});
		    $(window).scrollTop(0);
		})
		$('#emailInput').on('blur', function(){
			if ($('#emailInput').val() == '') 
			{
				$('#emailInput').val('E-mail получателя');
				$('#emailInput').css('color','#ccc');
			};

			console.log('Scroll blur');
			$('body').css({position:'fixed'});
		})
		$('#emailInput').on('keyup', function(){
			$('#emailInput').css('color','#000');
		})

		
	
		$('.xclmSentBtn').bind('click touchstart', that.open);
		$('.formSentBack').bind('click touchstart', that.close);

		$('.xclmOpenFile').each(function() {
			$(this).bind('touchstart click', function(event) {
				console.log('Try to open');
				var x = event.screenX, y = event.screenY;
				var element = $(event.currentTarget);
				xclm.app.open(element.attr('data-file'), x, y);
			});
		});
		
		// мой код
		$('.formSentMailButton').bind('touchstart click', function() {
			var mstring = 'mailto:' + $(".formSentMail").val() + '?subject=Материалы%20от%20компании%20Рош&body='+text+ '<br/><br/>' + textSubmit;
			$('.formSentMailButton').attr('href', mstring);
		});
		// мой код
		
		$('.xclmAttachFile').bind('touchend click', function(event) {
			text = 'Уважаемый коллега, <br/> в продолжение нашего разговора направляю Вам следующие файлы:';
			textSubmit = ' С уважением, <br/>компания "Рош"';
			var total = 0;
			$('.xclmAttachFile').each(function() {
				if ($(this).prop('checked')) 
				{
					total++;
					text = text+ '<br/>' +'%20<a href="http://roche.xpractice.ru'+$(this).attr('data-url')+'">'+$(this).attr('data-title')+'</a>' ;
				}
				console.log(text);
			});
			
			
			$('#xclmFileNumber').html(total);

		});
		
		
		
	});





};  


/*запуск остановка видео*/

function play_video() {
	var dataVideo = $(this).data('video');
	$('#'+ dataVideo).addClass('active');
	$('#go_video_1')[0].play();
}

function stop_video() {
	var dataVideo = $(this).data('video-stop');
	$('#'+ dataVideo).removeClass('active');
	$('#go_video_1')[0].pause();
} 