$(document).ready(function () {
   $('#add').click(function () {
       $('head').append('<link rel="stylesheet" class="semantic-ui-fallback-css" type="text/css" href="../src/semantic-ui-fallback.css">');
   });

   $('#remove').click(function () {
      $('.semantic-ui-fallback-css').remove();
   });
});