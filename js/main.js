//initialize map 
function initMap() {
  //location
  const loc = { lat: 27.044901, lng: 84.867218 };
  //center map location
  map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at location
  var marker = new google.maps.Marker({ position: loc, map: map });
}

// sticky menu background
window.addEventListener('scroll', function () { 
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  }
  else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

//smooth scrolling 
$("#navbar a").on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    const hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top- 100
    },
      800
    );
  } 
});