$('#btn_group .main').on('click',function(){

  if ( $(this).parents().hasClass('on') ) {
    $(this).parents().removeClass('on')
  } else {
    $(this).parents().addClass('on')
  }

  if ($(this).find('i').hasClass('fa-bars-staggered') ) {
    $(this).find('i').removeClass('fa-bars-staggered').addClass('fa-x')
  } else {
    $(this).find('i').removeClass('fa-x').addClass('fa-bars-staggered')
  }
  

})


$(window).on('load', function(){
    
  if ( !sessionStorage.getItem('refresh') ) {
      sessionStorage.setItem('refresh', 'yes')
      let count = 0;
      let timer = setInterval(add, 25)
      function add() {
          count++
          if (count>=100) { 
              clearInterval(timer) 
              $('.introAni').animate({
                  left:'-100%'
              }, 300, function(){
                  $(this).addClass('on')
              })
          }
      }
  } else {
      $('.introAni').addClass('on')
  }

})