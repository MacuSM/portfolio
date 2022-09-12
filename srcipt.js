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
