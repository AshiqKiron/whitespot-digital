$(document).ready(function(){

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
        });


/*back to top btn appear after scrolling*/
if ($('#back-to-top').length) {
    var scrollTrigger = 1200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 900);
    });

}


});

/* Disable map scrolling by default*/
$('.map-container')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')}
);