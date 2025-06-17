// Set initial time (20 hours, 30 minutes, 20 seconds)
    let totalSeconds = (20 * 3600) + (30 * 60) + 20;

    const countdown = document.getElementById("countdown");

    function updateCountdown() {
      if (totalSeconds <= 0) {
        countdown.textContent = "00 H : 00 M : 00 S";
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      countdown.textContent = 
        `${String(hours).padStart(2, '0')} H : ` +
        `${String(minutes).padStart(2, '0')} M : ` +
        `${String(seconds).padStart(2, '0')} S`;

      totalSeconds--;
    }

    // Initial display and set interval
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);


//slider
  $(document).ready(function(){
    $(".my-carousel").owlCarousel({
      loop: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 800,
      responsive:{
        0:{
          items:1.5
        },
        768:{
          items:2.5
        },
        1024:{
          items:4.5
        }
      }
    });
  });

//animated
AOS.init();