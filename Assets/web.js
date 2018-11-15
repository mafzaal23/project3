
    // Script to open and close sidebar when on tablets and phones
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }
     
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }
    
    //calculation
    function multiplyBy()
    {
            num1 = document.getElementById("distance").value;
            num2 = document.getElementById("base").value;
            num3 = document.getElementById("expense").value;
            num4 = document.getElementById("tolls").value;
            num5 = document.getElementById("tax").value;
            document.getElementById("result").innerHTML = num1 * num2 - num3 - num4 ;
    }

    function CalculateIVU() {
      var price = document.forms.txts.value;
      var evaluation = price;
      var tax = 0.825 * evaluation;
      var final = +tax - +evaluation;
      document.getElementById('res').value = final;
    }

//Google Map
    function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: 37.77, lng: -122.447}
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = document.getElementById('mode').value;
        directionsService.route({
          origin: {lat: 37.77, lng: -122.447},  // Haight.
          destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
          // Note that Javascript allows us to access the constant
          // using square brackets and a string value as its
          // "property."
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status == 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

    // Slideshow Images
    var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
      }
      x[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " w3-opacity-off";
    }
 