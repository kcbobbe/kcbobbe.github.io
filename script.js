document.addEventListener('DOMContentLoaded', function() {

  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);

  var boxElems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(boxElems);

  var tabElems = document.querySelectorAll('.tabs')
  var instances = M.Tabs.init(tabElems);

  // var instance = M.Parallax.getInstance(elem);
  // var instance = M.Tabs.getInstance(tabElems);


$(".contact-button").on('click', function(e){
  e.preventDefault();
  $(".contact-more").css('display','');
})

$(".contact-nav").on('click', function(e){
  e.preventDefault();
  if ($(".contact-nav").hasClass('contact-active')){
    $(".contact-bar").css('display', 'none')
    console.log('contact-notactive')
    $(".contact-nav").removeClass('contact-active')
  } else {
    $(".contact-nav").addClass('contact-active')
    console.log('contact active')

    $(".contact-bar").css('display', '');
  }
})

// $(".contactButton").on('click', function(e){
//   $("#moreContact").css('display','')
// })

})