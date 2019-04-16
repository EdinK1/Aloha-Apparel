// Navbar link scrolling

$(".main_header a").on("click", function(event) {
    if (this.hash != "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 95
        },
        800
      );
    }
  });

// Flickity Slider 

(function ($) {

    $(document).ready(function () {

        $('.container').flickity({
            cellAlign: 'center',
            wrapAround: true,
            prevNextButtons: false,
        });
    });
})(jQuery)


// Cart Update

let timesClicked = 0;

function cartUpdate() {

    document.querySelector('.item_counter').style.visibility = "visible";
    document.querySelector('.item_counter').innerHTML = ++timesClicked;
    alert('Item added to cart.');
    return true;
}


// Subscription Alert

function subscribe() {

    event.preventDefault();
    let email = document.forms['form']['email'].value;

    if (email === '') {
        alert('Please submit a valid email address.');
    } else if (email != '') {
        alert('Thanks for subscribing.');
    }
}

