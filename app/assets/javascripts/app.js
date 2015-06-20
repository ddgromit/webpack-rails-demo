import $ from 'jquery';

console.log('Running app.js');

$(function() {
  $(".js-count-button").click(function() {
    let nextNumber = parseInt($(".js-count").html()) + 1
    $(".js-count").html(nextNumber);
  });

  $(".js-message").html('Loaded');
  console.log('Ran app.js');
});
