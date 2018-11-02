$(document).ready(function(){
  /* Fade in Navbar solid background color upon scrolling + highlight current page. */
  $(function () {
    $(window).scroll(function () {
      /* Set distance user needs to scroll before we change Navbar styles.
       * Note: class 'solid' is different between .nav-wrapper and li elements. */
      if ($(this).scrollTop() < $('.Home').height() - 10) {
        $('.nav-wrapper').removeClass('solid');
        $('#nav-about').removeClass('solid');
        $('#nav-about-label').removeClass('bold');
        $('#nav-video').removeClass('solid');
        $('#nav-video-label').removeClass('bold');
        $('#nav-whatwedo').removeClass('solid');
        $('#nav-whatwedo-label').removeClass('bold');
        $('#nav-contact').removeClass('solid');
        $('#nav-contact-label').removeClass('bold');
      } else if ($(this).scrollTop() >= $('.Home').height() - 10 &&
                 $(this).scrollTop() < $('.Home').height() + $('.About').height() + $('.Video').height() + $('.WhatWeDo').height())
      {
        $('.nav-wrapper').addClass('solid');
        $('#nav-about').addClass('solid');
        $('#nav-about-label').addClass('bold');
        $('#nav-video').addClass('solid');
        $('#nav-video-label').addClass('bold');
        $('#nav-whatwedo').addClass('solid');
        $('#nav-whatwedo-label').addClass('bold');
        $('#nav-contact').removeClass('solid');
        $('#nav-contact-label').removeClass('bold');
      } else {
        $('.nav-wrapper').addClass('solid');
        $('#nav-about').removeClass('solid');
        $('#nav-about-label').removeClass('bold');
        $('#nav-video').removeClass('solid');
        $('#nav-video-label').removeClass('bold');
        $('#nav-whatwedo').removeClass('solid');
        $('#nav-whatwedo-label').removeClass('bold');
        $('#nav-contact').addClass('solid');
        $('#nav-contact-label').addClass('bold');
      }
    });
  });

  /* Smooth scroll. Source: https://www.npmjs.com/package/smooth-scroll */
  var scroll = new SmoothScroll('a[href*="#"]');
});