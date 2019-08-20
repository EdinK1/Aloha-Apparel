// Navbar link scrolling

$(function($) {
  $(".main_header a").on("click", function(event) {
    if (this.hash !== "") {
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

  // Cart Update

  let timesClicked = 0;
  let addToCart = document.querySelectorAll(".add_to_cart");
  let itemCounter = document.querySelector(".item_counter");

  for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", function(event) {
      event.preventDefault();

      itemCounter.style.visibility = "visible";
      itemCounter.innerHTML = ++timesClicked;
      alert("Item added to cart.");
      return true;
    });
  }

  // Subscription Alert

  document.querySelector("#subcribe").addEventListener("submit", subscribe);

  function subscribe(event) {
    event.preventDefault();
    let email = document.querySelector("#email").value;

    if (email === "") {
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing.");
    }
  }
});
