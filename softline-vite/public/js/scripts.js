const toggleMenu = () => document.body.classList.toggle("open");

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});