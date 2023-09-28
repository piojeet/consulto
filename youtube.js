// youtube video play
$(document).ready(function() {
  // Initialize Fancybox
  $('[data-fancybox="gallery"]').fancybox({
    type: 'iframe',
    iframe: {
      preload: false,
      attrs: {
        autoplay: true // Set autoplay to true for autoplay
      }
    }
  });
});