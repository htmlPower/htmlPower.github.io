var active = 'main';
  $(document).ready(function(){
    $('.icon-link').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $('.icon-link').removeClass('activ');
        $(this).addClass('activ');     
        $('#'+active).addClass('none');
        $('#'+id).removeClass('none');
        active = id;
    })
  })