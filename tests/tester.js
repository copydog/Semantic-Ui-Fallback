$(document).ready(function () {
   $('#add').click(function () {
       $('head').append('<link rel="stylesheet" class="semantic-ui-fallback-css" type="text/css" href="../src/semantic-ui-fallback.css">');
       $('body').append('<script class="semantic-ui-fallback-js" src="../src/semantic-ui-fallback.js"></script>');
   });

   $('#remove').click(function () {
      $('.semantic-ui-fallback-css').remove();
      $('.semantic-ui-fallback-js').remove();
   });
});