$(function(){
	$('.toggleNav').on('click',  function() {
		$('.navigation ul').slideToggle();
		$('.main-info').toggleClass('none');



		/* Act on the event */
	});
})
$(function(){
    if(document.documentElement.clientWidth <= 700){
  $('.navigation li').on('click',  function() {
   $('.navigation ul').slideToggle();
   $('.main-info').toggleClass('none')
  });
    }
})

$(function(){
// function for question
var buttons = $('.ask p'),
boxes = $('.toggle');
buttons.on('click', function(){
	var indx = buttons.index(this);
    boxes.not(':eq(' + indx + ')').fadeOut();
    boxes.eq(indx).fadeToggle(); // или .;
});

})

$(function(){
  var buttons = $('.ask p');
  buttons.on('click', function(){
  	buttons.removeClass('ask_yellow');
  	if ($(buttons).hasClass('ask_yellow')){
  		$(this).removeClass('ask_yellow');
  	} else{
  		$(this).addClass('ask_yellow');
  	}
  })
})
$(document).ready(function(){
	if(document.documentElement.clientWidth <= 999){
		$('.entry').hide()
    $('.ask p').click(function(){
        $(this).next().slideToggle("slow");
    })
	}
    
})

// $(document).ready(function(){
//   var mapHeight = $( '.map' ).width();
//   $( '.mapQ' ).css('width', mapHeight);

//   })


$(document).ready(function(){
    $(".navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


// (function($) {
// $(function() {

//   $('#up').click(function() {
//     $('html, body').animate({scrollTop: 0},500);
//     return false;
//   })

// })
// })(jQuery)
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});