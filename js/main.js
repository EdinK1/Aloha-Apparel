// Navbar link scrolling

$(function ($) {

  $(".main_header a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $("html, body").animate({
          scrollTop: $(hash).offset().top - 95
        },
        800
      );
    }
  });

  // Flickity Slider 

  $(document).ready(function () {

    $('.container').flickity({
      cellAlign: 'left',
      autoPlay: 'true',
      wrapAround: true,
      prevNextButtons: false,
    });
  });
});

// Cart Update

let timesClicked = 0;
let addToCart = document.querySelectorAll('.add_to_cart');
let itemCounter = document.querySelector('.item_counter');

for (let i = 0; i < addToCart.length; i++) {

  addToCart[i].addEventListener('click', function(event) {
    event.preventDefault();
  
    itemCounter.style.visibility = "visible";
    itemCounter.innerHTML = ++timesClicked;
    alert('Item added to cart.');
    return true;
  
  });
}


// Subscription Alert

function subscribe() {

  event.preventDefault();
  let email = document.forms['form']['email'].value;

  if (email === '') {
    alert('Please submit a valid email address.');
  } else if (email !== '') {
    alert('Thanks for subscribing.');
  }
};