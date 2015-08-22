$(function() {

   $(document).on('mousewheel', function() {

      this.scrollLeft -= (delta * 30);

      event.preventDefault();

   });

});
