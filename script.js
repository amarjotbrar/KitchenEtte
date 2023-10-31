// Click functionalities
$("nav #nav_bar_options #home").click(function () {
  $("html, body").animate({
    scrollTop : 0
  });
});

$("nav #nav_bar_options #contact-us").click(function () {
  $("html, body").animate({
    scrollTop : 2800
  });
});

$("nav img").click(function () {
  $("html, body").animate({
    scrollTop : 0
  });
});

$("nav #nav_bar_options #menu").click(function () {
  $("html, body").animate({
    scrollTop : 800
  });
});

$("nav #nav_bar_options #cart, section#menu .cart-button-area .cart-button").click(function () {
  $("html, body").animate({
    scrollTop : 1550
  });
});

$("nav #nav_bar_options #about-us").click(function () {
  $("html, body").animate({
    scrollTop : 2350
  });
});

$("section#home #container button").click(function () {
  $("html, body").animate({
    scrollTop : 800
  });
});

//hover functionalities
$("nav #nav_bar_options .opts, section#home #container button , section#menu .cart-button-area .cart-button, section#cart .wrapper .order-now").mouseenter(function () {
  $(this).css({"transform": "scale(1.2)", "transition-duration": "300ms"});
});

$("nav #nav_bar_options .opts, section#home #container button, section#menu .cart-button-area .cart-button, section#cart .wrapper .order-now").mouseleave(function () {
  $(this).css({"transform": "scale(1)", "transition-duration": "300ms"});
});

$("section#menu .menu-container .item-box .reset-btn-area .reset-btn").mouseenter(function () {
  $(this).css({"transform": "scale(1.1)", "transition-duration": "300ms"});
});

$("section#menu .menu-container .item-box .reset-btn-area .reset-btn").mouseleave(function () {
  $(this).css({"transform": "scale(1)", "transition-duration": "300ms"});
});

$("nav img").mouseenter(function () {
  $(this).css({"transform": "scale(1.1)", "transition-duration": "300ms"});
});

$("nav img").mouseleave(function () {
  $(this).css({"transform": "scale(1)", "transition-duration": "300ms"});
});


//navbar scroll
$(document).scroll(function () {
  	var scrolled = $(document).scrollTop();
    if(scrolled > 50){
      $("nav").css({"background-color": "#494949", "transition-duration": "400ms"});
    }
    else{
      $("nav").css({"background-color": "transparent", "transition-duration": "400ms"});
    }
});

// menu functionalities


$('.button-area').on('click', 'button', function() {
  // Find the nearest 'value' element within the same .button-area
  var valueElement = $(this).siblings('h6.value');
  
  if ($(this).text() == '+') {
      // Increment the value when the 'plus' button is clicked
      var currentValue = parseInt(valueElement.text());
      valueElement.text(currentValue + 1);
  } else if ($(this).text() == '-') {
      // Decrement the value when the 'minus' button is clicked
      var currentValue = parseInt(valueElement.text());
      if (currentValue > 0) {
          valueElement.text(currentValue - 1);
      }
  }
});


$(".item-box").on('click', '.reset-btn-area .reset-btn', function(){
  var tempEl = $(this).closest('.item-box').find('.items .button-area h6');
  tempEl.text(0);
});