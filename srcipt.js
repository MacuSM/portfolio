<<<<<<< HEAD
$(document).ready(function () {
  $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 550) {
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible');
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');
      }
  });
});
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Optional: Add hash to URL after scroll
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function () {
  // Skill progress bar widths
  $('.html').css('width', '90%');
  $('.css').css('width', '85%');
  $('.bootstrap').css('width', '80%');
  $('.javascript').css('width', '85%');
  $('.python').css('width', '85%');
  $('.django').css('width', '80%');
  $('.react\\.js').css('width', '80%'); // Escape dot in class name
  $('.react-native').css('width', '80%');
  $('.nodejs').css('width', '75%');
  $('.expressjs').css('width', '70%');
  $('.git').css('width', '70%');
  $('.databases').css('width', '70%');
});
=======
$(document).ready(function () {
  $(window).scroll(function () {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if ($(this).scrollTop() > 550) {
          $('.navbar').addClass('solid');
          $('.back-to-top').addClass('visible');
      } else {
          $('.navbar').removeClass('solid');
          $('.back-to-top').removeClass('visible');
      }
  });
});
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
>>>>>>> 7cb865e56ad89e9358648a36bb73d4a4a8771eb2
