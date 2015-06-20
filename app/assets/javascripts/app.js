import $ from 'jquery';

$(function() {
  $(".js-count-button").click(function() {
    let nextNumber = parseInt($(".js-count").html()) + 1
    $(".js-count").html(nextNumber);
  });
});
