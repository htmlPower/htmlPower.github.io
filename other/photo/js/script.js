
$('.layout__side__slide').slick({
  infinite: true,
  dots: true,
  arrows: false
});


var active = 'main';
  $(document).ready(function(){
    $('.nav__list-link').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $('.nav__list-link').removeClass('activ');
        $(this).addClass('activ');     
        $('#'+active).addClass('none');
        $('#'+id).removeClass('none');
        active = id;
    })
  })
